import { useEffect, useRef } from "react";
import { Maximize2 } from "lucide-react";
import "plyr/dist/plyr.css";

type Source = {
  src: string;
  type?: string;
};

type BaseProps = {
  className?: string;
  caption?: string;
};

type ImageProps = BaseProps & {
  kind: "image";
  src: string;
  alt: string;
};

type VideoProps = BaseProps & {
  kind: "video";
  src: string;
  title?: string;
  poster?: string;
  provider?: "html5" | "youtube";
  sources?: Source[];
};

type Props = ImageProps | VideoProps;

function resolveYouTubeId(input: string) {
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) {
    return input;
  }

  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }

    const videoId = url.searchParams.get("v");
    if (videoId) return videoId;

    const parts = url.pathname.split("/").filter(Boolean);
    return parts.at(-1) ?? input;
  } catch {
    return input;
  }
}

export default function ProjectMedia(props: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const embedRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (props.kind !== "video") return;

    let player: { destroy: () => void } | null = null;
    const target =
      props.provider === "youtube" ? embedRef.current : videoRef.current;

    if (!target) return;

    let cancelled = false;

    void import("plyr").then(({ default: Plyr }) => {
      if (cancelled || !target) return;
      player = new Plyr(target, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
        ],
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true,
        },
      });
    });

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, [props.kind, props.provider, props.src]);

  if (props.kind === "image") {
    return (
      <figure className={props.className}>
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
          <img
            src={props.src}
            alt={props.alt}
            loading="lazy"
            className="block w-full object-cover"
          />
        </div>
        {props.caption ? (
          <figcaption className="mt-2 text-sm text-muted-foreground">
            {props.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (props.provider === "youtube") {
    const embedId = resolveYouTubeId(props.src);
    const embedSrc = `https://www.youtube.com/embed/${embedId}?rel=0&modestbranding=1&playsinline=1`;

    return (
      <figure className={props.className}>
        <div ref={frameRef} className="relative overflow-hidden rounded-2xl border border-border/70 bg-card">
          <button
            type="button"
            aria-label="Enter fullscreen"
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent"
            onClick={() => {
              const node = frameRef.current;
              if (!node) return;

              if (node.requestFullscreen) {
                void node.requestFullscreen();
              }
            }}
          >
            <Maximize2 className="size-3.5" />
            Fullscreen
          </button>
          <div
            ref={embedRef}
            className="plyr__video-embed aspect-video"
            aria-label={props.title ?? "Video player"}
          >
            <iframe
              src={embedSrc}
              allowFullScreen
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              title={props.title ?? "Video player"}
            />
          </div>
        </div>
        {props.caption ? (
          <figcaption className="mt-2 text-sm text-muted-foreground">
            {props.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const mimeType =
    props.sources?.[0]?.type ??
    (props.src.endsWith(".webm")
      ? "video/webm"
      : props.src.endsWith(".mov")
        ? "video/quicktime"
        : "video/mp4");

  return (
    <figure className={props.className}>
      <div ref={frameRef} className="relative overflow-hidden rounded-2xl border border-border/70 bg-card">
        <button
          type="button"
          aria-label="Enter fullscreen"
          className="absolute top-3 right-3 z-10 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent"
          onClick={() => {
            const node = frameRef.current ?? videoRef.current;
            if (!node) return;

            if ("requestFullscreen" in node) {
              void node.requestFullscreen();
              return;
            }

            const video = videoRef.current as HTMLVideoElement | null;
            if (video && "webkitEnterFullscreen" in video) {
              // Safari on iPhone/iPad prefers the native fullscreen call.
              (video as HTMLVideoElement & { webkitEnterFullscreen?: () => void })
                .webkitEnterFullscreen?.();
            }
          }}
        >
          <Maximize2 className="size-3.5" />
          Fullscreen
        </button>
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={props.poster}
          className="block w-full"
        >
          {props.sources && props.sources.length > 0 ? (
            props.sources.map(source => (
              <source src={source.src} type={source.type} />
            ))
          ) : (
            <source src={props.src} type={mimeType} />
          )}
        </video>
      </div>
      {props.caption ? (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          {props.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
