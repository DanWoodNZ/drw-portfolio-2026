"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Raw interaction state hooks running synchronously completely outside react loops 
  const mouse = useRef({ x: -1000, y: -1000 });
  const dragStart = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      // Pull dimensions right from the absolute DOM container wrapper cleanly
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        
        // Prevent pixel tearing inherently mapping device native limits
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dynamically load grid matrix hooks based explicitly on the active Next theme layer 
      const isDark = resolvedTheme === "dark";
      const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
      
      const gridSpacing = 40;
      
      // Calculate active render boundaries drawing solid explicit lines targeting memory loops natively
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // If active drag sequences are hitting, inject the custom framework vectors!
      if (isDragging.current) {
        // Snap drag boundaries exactly to the grid intersections natively 
        const sx = Math.round(dragStart.current.x / gridSpacing) * gridSpacing;
        const sy = Math.round(dragStart.current.y / gridSpacing) * gridSpacing;
        const cx = Math.round(mouse.current.x / gridSpacing) * gridSpacing;
        const cy = Math.round(mouse.current.y / gridSpacing) * gridSpacing;
        
        const rw = cx - sx;
        const rh = cy - sy;
        
        // Inject a transparent layer explicitly natively showing the selected grid squares
        ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(sx, sy, rw, rh);
        
        // Custom transparent drag layer mapping explicit faint borders
        ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)";
        ctx.lineWidth = 2;
        ctx.strokeRect(sx, sy, rw, rh);
        
        // Push the 4 anchor block arrays mapping explicitly out from the bounding points
        const anchors = [
          { x: sx, y: sy },
          { x: sx + rw, y: sy },
          { x: sx, y: sy + rh },
          { x: sx + rw, y: sy + rh }
        ];
        
        ctx.fillStyle = isDark ? "#ffffff" : "#0A0A0A";
        anchors.forEach(a => {
          ctx.fillRect(a.x - 5, a.y - 5, 10, 10);
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  // Hook bounding limit logic dynamically syncing mouse movements securely regardless of global limits!
  const getMousePos = (e: MouseEvent) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  useEffect(() => {
    // We bind explicitly to the global window inherently letting interactions seamlessly scale behind absolute arrays 
    const handleGlobalMove = (e: MouseEvent) => {
      const pos = getMousePos(e);
      mouse.current = pos;
    };
    
    // Safety hook securing loops explicitly dropping constraints globally 
    const handleGlobalUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);
    
    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Set origin loop securely!
    dragStart.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    isDragging.current = true;
  };

  // Block native mount calls natively waiting for absolute hooks to successfully limit node loops!
  if (!mounted) return null;

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 10%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 65%)"
      }}
      onMouseDown={handleMouseDown}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
