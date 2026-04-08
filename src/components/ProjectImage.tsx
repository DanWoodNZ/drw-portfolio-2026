import Image from "next/image";

// ─── helpers ────────────────────────────────────────────────────────────────

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
}

function Media({ src, alt }: { src: string; alt?: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded-[20px] md:rounded-[32px]"
      />
    );
  }
  return (
    // Using a plain <img> so the browser respects the image's natural aspect ratio
    // with no cropping. Next/Image `fill` mode requires a fixed-height container.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? "Project image"}
      className="w-full h-auto rounded-[20px] md:rounded-[32px] block"
    />
  );
}

// ─── exports ────────────────────────────────────────────────────────────────

/** One image spanning the full content width, natural aspect ratio. */
export function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div className="w-full mb-6 lg:mb-10">
      <Media src={src} alt={alt} />
    </div>
  );
}

/** Two images side-by-side (stacked on mobile), natural aspect ratios. */
export function ProjectImagePair({
  left,
  right,
  altLeft,
  altRight,
}: {
  left: string;
  right: string;
  altLeft?: string;
  altRight?: string;
}) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-10">
      <Media src={left} alt={altLeft} />
      <Media src={right} alt={altRight} />
    </div>
  );
}
