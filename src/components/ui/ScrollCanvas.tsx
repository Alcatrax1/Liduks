"use client";

import { useRef, useEffect, useCallback } from "react";

const TOTAL_FRAMES = 40;

// Pre-generate frame paths
const framePaths = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/hero_frames/frame_${String(i + 1).padStart(3, "0")}.jpg`
);

interface ScrollCanvasProps {
  scrollProgress: number; // 0 to 1
  className?: string;
}

export function ScrollCanvas({ scrollProgress, className = "" }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);

  // Preload all images on mount
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    framePaths.forEach((src, index) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCountRef.current++;
        // Draw first frame once loaded
        if (index === 0 && canvasRef.current) {
          drawFrame(0);
        }
      };
      images[index] = img;
    });

    imagesRef.current = images;
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    // Set canvas size to match image (only once or on resize)
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, []);

  // Draw frame based on scroll progress
  useEffect(() => {
    const frameIndex = Math.min(
      Math.floor(scrollProgress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );
    drawFrame(frameIndex);
  }, [scrollProgress, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
