"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", magnetic = true, children, ...props },
    ref
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !internalRef.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = internalRef.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      x.set(middleX * 0.2); // Pull strength
      y.set(middleY * 0.2);
    };

    const handleMouseLeave = () => {
      if (!magnetic) return;
      x.set(0);
      y.set(0);
    };

    const variants = {
      primary: "bg-brand-emerald text-white hover:bg-brand-emerald-hover shadow-lg shadow-brand-emerald/20",
      secondary: "bg-brand-text text-white hover:bg-neutral-800",
      outline: "border border-neutral-300 bg-transparent hover:bg-neutral-50 text-brand-text",
      ghost: "bg-transparent hover:bg-black/5 text-brand-text",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg tracking-tight",
    };

    return (
      <motion.button
        ref={(node) => {
          // @ts-ignore
          internalRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        style={{ x: mouseXSpring, y: mouseYSpring }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative isolate inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {/* Subtle inner light reflection */}
        {variant !== 'ghost' && variant !== 'outline' && (
           <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
        )}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
