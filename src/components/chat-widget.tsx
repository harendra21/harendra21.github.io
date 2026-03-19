import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./chat-widget.module.css";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const STORAGE_KEY = "harendra-chat-widget:v1";
const CONVERSATION_ID_KEY = "harendra-chat-widget:conversation-id:v1";
const BACKEND_URL = "https://harendra-ai-agent.vercel.app";

function getInitialMessages(): ChatMessage[] {
  return [
    {
      role: "assistant",
      content:
        "Hi, I’m Harendra. Ask me about my experience, projects, skills, or job change.",
    },
  ];
}

function loadMessages() {
  if (typeof window === "undefined") {
    return getInitialMessages();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialMessages();

    const parsed = JSON.parse(raw) as ChatMessage[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return getInitialMessages();
    }

    return parsed.filter(
      item =>
        item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string",
    );
  } catch {
    return getInitialMessages();
  }
}

function createConversationId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadConversationId() {
  if (typeof window === "undefined") {
    return createConversationId();
  }

  const existing = window.localStorage.getItem(CONVERSATION_ID_KEY);
  if (existing) {
    return existing;
  }

  const next = createConversationId();
  window.localStorage.setItem(CONVERSATION_ID_KEY, next);
  return next;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>(getInitialMessages());
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string>(() =>
    loadConversationId(),
  );
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const backendUrl = useMemo(() => BACKEND_URL.replace(/\/$/, ""), []);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen]);

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const form = event.currentTarget.form;
      if (!form) return;

      const submitButton = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );

      submitButton?.click();
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isSending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages, conversationId }),
      });

      const data = (await response.json()) as
        | { ok: true; reply: string }
        | { ok: false; error: string };

      if (!response.ok || !data.ok) {
        throw new Error("error" in data ? data.error : "Something went wrong.");
      }

      setMessages(current => [
        ...current,
        { role: "assistant", content: data.reply.trim() },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to reach the assistant right now.",
      );
      setMessages(current => [
        ...current,
        {
          role: "assistant",
          content: "I’m having trouble connecting right now, please try again.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function resetChat() {
    const initial = getInitialMessages();
    const nextConversationId = createConversationId();
    setMessages(initial);
    setInput("");
    setError(null);
    setConversationId(nextConversationId);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      window.localStorage.setItem(CONVERSATION_ID_KEY, nextConversationId);
    }
  }

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.launchButton}
        onClick={() => setIsOpen(open => !open)}
        aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
      >
        {isOpen ? "×" : "Chat"}
      </button>

      <section
        className={`${styles.panel} ${isOpen ? styles.panelOpen : styles.panelClosed}`}
        aria-hidden={!isOpen}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Harendra AI</p>
            <h2 className={styles.title}>Chat with Harendra</h2>
          </div>
          <button type="button" className={styles.resetButton} onClick={resetChat}>
            New chat
          </button>
        </header>

        <p className={styles.description}>
          Ask about experience, projects, skills, or job change.
        </p>

        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
              className={`${styles.row} ${
                message.role === "user" ? styles.rowUser : styles.rowAssistant
              }`}
              style={{ animationDelay: `${Math.min(index * 40, 240)}ms` }}
            >
              <div
                className={`${styles.bubble} ${
                  message.role === "user" ? styles.userBubble : styles.assistantBubble
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isSending ? <div className={styles.typing}>Typing...</div> : null}
          <div ref={endRef} />
        </div>

        <form className={styles.composer} onSubmit={handleSubmit}>
          <label className={styles.srOnly} htmlFor="chat-widget-input">
            Type your message
          </label>
          <textarea
            id="chat-widget-input"
            ref={inputRef}
            rows={3}
            value={input}
            onChange={event => setInput(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a question..."
            className={styles.input}
          />

          <div className={styles.footer}>
            <p className={styles.hint}>Context is saved in this browser.</p>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isSending || !input.trim()}
            >
              Send
            </button>
          </div>

          {error ? <p className={styles.error}>{error}</p> : null}
        </form>
      </section>
    </div>
  );
}
