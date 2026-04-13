import Image from "next/image";
import { CustomVideoPlayer } from "./CustomVideoPlayer";

interface MasonryGridProps {
  images: string[];
}

function MediaBlock({ src }: { src: string }) {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  if (isVideo) {
    return (
      <CustomVideoPlayer 
        src={src}
        className="w-full h-full object-cover absolute inset-0"
        containerClassName="w-full h-full absolute inset-0"
      />
    );
  }

  return (
    <Image src={src} alt="Project Media" fill className="object-cover" />
  );
}

export function MasonryGrid({ images }: MasonryGridProps) {
  const blocks = [];
  for (let i = 0; i < images.length; i += 3) {
    blocks.push(images.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col gap-6 lg:gap-10 w-full mb-32">
      {blocks.map((block, idx) => (
        <div key={idx} className="flex flex-col gap-6 lg:gap-10 w-full">
          {/* Row 1: Full width rectangle */}
          {block[0] && (
            <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-[16px] md:rounded-[20px] overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
              <MediaBlock src={block[0]} />
            </div>
          )}

          {/* Row 2: Two squares */}
          {(block[1] || block[2]) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full">
              {block[1] && (
                <div className="w-full aspect-square rounded-[16px] md:rounded-[20px] overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
                  <MediaBlock src={block[1]} />
                </div>
              )}
              {block[2] && (
                <div className="w-full aspect-square rounded-[16px] md:rounded-[20px] overflow-hidden relative bg-[#0A0A0A] flex items-center justify-center">
                  <MediaBlock src={block[2]} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
