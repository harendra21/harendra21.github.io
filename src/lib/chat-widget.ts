export type ChatWidgetRole = "user" | "assistant";

export interface ChatWidgetMessage {
  role: ChatWidgetRole;
  content: string;
}

export const CHAT_WIDGET_STORAGE_KEY = "harendra-chat-widget:v1";
