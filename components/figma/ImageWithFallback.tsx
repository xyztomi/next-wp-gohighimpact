"use client";

import Image from "next/image";
import { useState } from "react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  fallback?: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Image>, "className">;

const defaultFallback = (
  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-sm text-gray-500">
    Image unavailable
  </div>
);

export function ImageWithFallback({
  fallback = defaultFallback,
  className,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className={cn("h-full w-full overflow-hidden", className)}>{fallback}</div>;
  }

  return (
    <Image
      {...props}
      className={cn(className)}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
    />
  );
}
