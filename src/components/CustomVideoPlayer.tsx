"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  className?: string;
  containerClassName?: string;
}

export function CustomVideoPlayer({ src, className, containerClassName }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingScrubber, setIsDraggingScrubber] = useState(false);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDraggingScrubber) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / (duration || 1)) * 100);
    }
  };

  const updateScrubber = (clientX: number) => {
    if (scrubberRef.current && videoRef.current) {
      const rect = scrubberRef.current.getBoundingClientRect();
      let pos = (clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(1, pos));
      videoRef.current.currentTime = pos * videoRef.current.duration;
      setProgress(pos * 100);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingScrubber(true);
    updateScrubber(e.clientX);
  };

  useEffect(() => {
    if (!isDraggingScrubber) return;

    const handlePointerMove = (e: PointerEvent) => {
      e.preventDefault();
      updateScrubber(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDraggingScrubber(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDraggingScrubber]);

  // Determine if controls should be visible
  // Visible if hovered, explicitly paused, or actively being scrubbed
  const showControls = isHovered || !isPlaying || isDraggingScrubber;

  return (
    <div 
      className={`relative group w-full h-full overflow-hidden ${containerClassName || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className={className}
      />
      
      {/* Controls Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
      >
        {/* Play/Pause Button */}
        <div 
          className="absolute top-4 left-4 p-2 pointer-events-auto cursor-pointer transition-colors text-[#B7B7B7]/50 hover:text-[#B7B7B7]"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={18} fill="currentColor" strokeWidth={0} /> : <Play size={18} fill="currentColor" strokeWidth={0} className="ml-[2px]" />}
        </div>
        
        {/* Scrubber */}
        <div 
          ref={scrubberRef}
          className="absolute bottom-2 left-4 right-4 h-8 flex items-center pointer-events-auto cursor-pointer"
          onPointerDown={handlePointerDown}
        >
          <div className="w-full h-1.5 bg-[#B7B7B7]/50 rounded-full overflow-hidden relative">
            <div 
              className={`absolute top-0 left-0 h-full bg-[#B7B7B7]/50 rounded-full ${isDraggingScrubber ? "" : "transition-all duration-75"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
