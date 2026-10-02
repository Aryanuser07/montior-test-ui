"use client";

import React, { useEffect, useRef, useState } from "react";

export interface VectorWordmarkProps {
  text?: string;
  background?: string;
  textColor?: string;
  shade?: string;
  accent?: string;
  handles?: {
    size?: number;
    spread?: number;
    labels?: boolean;
  };
  fontFamily?: string;
  fontSize?: number;
  reach?: number;
  speed?: number;
  damping?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function VectorWordmark({
  text = "UPTIME",
  background = "transparent",
  textColor = "#FFFFFF",
  shade = "#4F46E5",
  accent = "#6366F1",
  handles = { size: 109, spread: 27, labels: true },
  fontFamily = "Inter, sans-serif",
  fontSize = 180,
  reach = 200,
  speed = 0.08,
  damping = 0.85,
  style,
  className,
}: VectorWordmarkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion & WebGL support
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !hasWebGL) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Mouse pointer state
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Telemetry labels drift
    let tick = 0;

    // Handle resize
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Pointer listener
    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handlePointerMove);

    // Pause when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick += 0.02;

      // Smooth pointer interpolation
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Clear frame
      ctx.clearRect(0, 0, width, height);

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw dashed vector background grid
      ctx.save();
      ctx.strokeStyle = "rgba(99, 102, 241, 0.07)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);

      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Main Text Typography setup
      ctx.save();
      const responsiveFontSize = Math.min((width / 1200) * fontSize, fontSize);
      ctx.font = `900 ${responsiveFontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textX = width / 2;
      const textY = height / 2;

      // Shadow layer
      ctx.fillStyle = shade;
      ctx.globalAlpha = 0.2;
      ctx.fillText(text, textX + 4, textY + 6);

      // Gradient text main fill
      const grad = ctx.createLinearGradient(0, textY - responsiveFontSize / 2, width, textY + responsiveFontSize / 2);
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(0.5, "#E0E7FF");
      grad.addColorStop(1, accent);

      ctx.fillStyle = grad;
      ctx.globalAlpha = 1.0;
      ctx.fillText(text, textX, textY);

      // Pointer reactive glow circle
      if (currentX > 0 && currentY > 0) {
        const glowRad = reach;
        const radialGrad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, glowRad);
        radialGrad.addColorStop(0, "rgba(99, 102, 241, 0.25)");
        radialGrad.addColorStop(0.5, "rgba(59, 130, 246, 0.1)");
        radialGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Target crosshair handles
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(currentX, currentY, handles.size ? handles.size / 4 : 20, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(currentX - 35, currentY);
        ctx.lineTo(currentX + 35, currentY);
        ctx.moveTo(currentX, currentY - 35);
        ctx.lineTo(currentX, currentY + 35);
        ctx.stroke();

        // Drifting telemetry coordinate label
        if (handles.labels) {
          ctx.font = "10px monospace";
          ctx.fillStyle = "#a5b4fc";
          ctx.textAlign = "left";
          const coordStr = `PTR [X:${Math.round(currentX)} Y:${Math.round(currentY)}] · SYS_OK`;
          ctx.fillText(coordStr, currentX + 15, currentY - 15);
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      observer.disconnect();
    };
  }, [hasWebGL, prefersReducedMotion, text, background, textColor, shade, accent, fontFamily, fontSize, reach, speed, damping, handles]);

  if (prefersReducedMotion || hasWebGL === false) {
    return (
      <div
        aria-hidden="true"
        className={`relative flex items-center justify-center overflow-hidden border border-white/5 bg-slate-950/40 rounded-3xl ${className || ""}`}
        style={{
          width: "100%",
          height: "clamp(240px, 35vw, 480px)",
          ...style,
        }}
      >
        <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-violet-500 bg-clip-text text-transparent select-none opacity-90">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden rounded-3xl ${className || ""}`}
      style={{
        height: "clamp(260px, 36vw, 500px)",
        minWidth: 0,
        minHeight: 0,
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block rounded-3xl cursor-crosshair"
      />
    </div>
  );
}
