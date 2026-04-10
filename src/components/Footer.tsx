"use client";

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function SocialIcon({ href, src, darkSrc, alt }: { href: string; src: string; darkSrc: string; alt: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // In light mode use the -dark variant; in dark mode use the white variant
  const icon = mounted && resolvedTheme === 'light' ? darkSrc : src;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300" aria-label={alt}>
      <div className="relative w-8 h-8 md:w-8 md:h-8">
        <Image src={icon} alt={alt} fill className="object-contain" />
      </div>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 xl:px-[4%] py-12 md:py-24 flex justify-center items-center">
      <div className="flex items-center space-x-12">
        <SocialIcon href="https://www.dribbble.com/danrobertwood" src="/icons/icon-dribble.svg" darkSrc="/icons/icon-dribble-dark.svg" alt="Dribbble" />
        <SocialIcon href="https://www.linkedin.com/in/danrobertwood" src="/icons/icon-linkedin.svg" darkSrc="/icons/icon-linkedin-dark.svg" alt="LinkedIn" />
        <SocialIcon href="https://www.instagram.com/danrobertwood" src="/icons/icon-instagram.svg" darkSrc="/icons/icon-instagram-dark.svg" alt="Instagram" />
        <SocialIcon href="https://open.spotify.com/user/1241863181?si=36e3331fcb214a63" src="/icons/icon-spotify.svg" darkSrc="/icons/icon-spotify-dark.svg" alt="Spotify" />
      </div>
    </footer>
  );
}
