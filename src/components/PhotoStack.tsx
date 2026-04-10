"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo, useMotionValue, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

type PhotoStackProps = {
  images: string[];
};

export function PhotoStack({ images }: PhotoStackProps) {
  const [cards, setCards] = useState(images.map((_, i) => i));
  const [isDragging, setIsDragging] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const dragX = useMotionValue(0);

  // Stagger configurations
  const angles = [0, 8, -6, 5, -4];
  const yOffsets = [0, 20, 40, 60, 80];
  const scales = [1, 0.95, 0.9, 0.85, 0.8];

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const swipeThreshold = 100;
    if (
      Math.abs(info.offset.x) > swipeThreshold ||
      Math.abs(info.offset.y) > swipeThreshold ||
      Math.abs(info.velocity.x) > 800 ||
      Math.abs(info.velocity.y) > 800
    ) {
      cycleCards();
    }
  };

  const cycleCards = () => {
    dragX.stop();
    dragX.set(0);
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.shift();
      if (topCard !== undefined) {
        newCards.push(topCard);
      }
      return newCards;
    });
  };

  const bounceStack = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 200);
  };

  return (
    <div className="relative w-full aspect-[4/5] flex items-start justify-center pt-4 md:pt-8">
      <AnimatePresence>
        {cards.slice(0, 4).map((imageIndex, arrayIndex) => {
          return (
            <StackCard
              key={imageIndex}
              imageIndex={imageIndex}
              arrayIndex={arrayIndex}
              totalCards={cards.length}
              images={images}
              angles={angles}
              yOffsets={yOffsets}
              scales={scales}
              handleDragEnd={handleDragEnd}
              setIsDragging={setIsDragging}
              isDragging={isDragging}
              dragX={dragX}
              isBouncing={isBouncing}
              bounceStack={bounceStack}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

type StackCardProps = {
  imageIndex: number;
  arrayIndex: number;
  totalCards: number;
  images: string[];
  angles: number[];
  yOffsets: number[];
  scales: number[];
  handleDragEnd: (e: any, info: PanInfo) => void;
  setIsDragging: (val: boolean) => void;
  isDragging: boolean;
  dragX: MotionValue<number>;
  isBouncing: boolean;
  bounceStack: () => void;
};

function StackCard({
  imageIndex,
  arrayIndex,
  totalCards,
  images,
  angles,
  yOffsets,
  scales,
  handleDragEnd,
  setIsDragging,
  isDragging,
  dragX,
  isBouncing,
  bounceStack
}: StackCardProps) {
  const isVisible = arrayIndex < 3;

  const isTop = arrayIndex === 0;
  const isSecondary = arrayIndex === 1;
  const isTertiary = arrayIndex === 2;

  const rotation = angles[imageIndex % angles.length];

  const staticYPos = isVisible ? yOffsets[arrayIndex] : yOffsets[2] + 20;
  const staticScale = isVisible ? scales[arrayIndex] : scales[2] - 0.05;
  const zIndex = totalCards - arrayIndex;
  const opacity = isVisible ? 1 : 0;

  // Primary card physics
  const rotateDrag = useTransform(dragX, [-150, 150], [-8, 8]);

  // Secondary pop effects triggered at +/- 100px threshold
  const secondaryScale = useTransform(
    dragX,
    [-250, -101, -100, 0, 100, 101, 250],
    [1, 1.02, 0.95, 0.95, 0.95, 1.02, 1]
  );
  const secondaryY = useTransform(
    dragX,
    [-250, -101, -100, 0, 100, 101, 250],
    [0, -5, 20, 20, 20, -5, 0]
  );
  const secondaryRotate = useTransform(
    dragX,
    [-250, -101, -100, 0, 100, 101, 250],
    [0, 0, rotation, rotation, rotation, 0, 0]
  );

  // Tertiary pop effects triggered at +/- 100px threshold
  const tertiaryScale = useTransform(
    dragX,
    [-250, -101, -100, 0, 100, 101, 250],
    [0.95, 0.96, 0.9, 0.9, 0.9, 0.96, 0.95]
  );
  const tertiaryY = useTransform(
    dragX,
    [-250, -101, -100, 0, 100, 101, 250],
    [20, 15, 40, 40, 40, 15, 20]
  );

  // Map dynamic styles securely only during active drag state to preserve smooth spring exits
  const dynStyle: any = { transformOrigin: "bottom center" };
  if (isTop) {
    dynStyle.x = dragX;
    if (isDragging) {
      dynStyle.rotate = rotateDrag;
    }
  } else if (isDragging) {
    if (isSecondary) {
      dynStyle.scale = secondaryScale;
      dynStyle.y = secondaryY;
      dynStyle.rotate = secondaryRotate;
    } else if (isTertiary) {
      dynStyle.scale = tertiaryScale;
      dynStyle.y = tertiaryY;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 0 }}
      animate={{
        opacity: opacity,
        scale: isTop ? 1 : staticScale,
        y: isBouncing ? staticYPos - 12 : staticYPos,
        rotate: isTop ? 0 : rotation,
        zIndex: zIndex
      }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 1
      }}
      drag={isTop}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={isTop ? handleDragEnd : undefined}
      onTap={isTop ? bounceStack : undefined}
      whileHover={isTop && !isDragging ? { scale: 1.02 } : {}}
      whileTap={isTop ? { cursor: "grabbing" } : {}}
      className={`absolute w-full h-[calc(100%-80px)] p-4 md:p-5 bg-white rounded-[24px] border border-black/5 dark:border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${isTop ? "cursor-grab" : "cursor-auto"}`}
      style={dynStyle}
    >
      <div className="relative w-full h-full rounded-[14px] md:rounded-[16px] overflow-hidden pointer-events-none">
        <Image
          src={images[imageIndex]}
          alt={`Stack photo ${imageIndex}`}
          fill
          className="object-cover"
          priority={isVisible}
        />
      </div>
    </motion.div>
  );
}
