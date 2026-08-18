import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LiquidGlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function LiquidGlassContainer({ className, children, ...props }: LiquidGlassContainerProps) {
  return (
    <div
      className={cn(
        "liquid-glass rounded-[2rem] p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
