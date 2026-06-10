'use client';

import { useEffect, useRef, useState } from 'react';

type LazyOnVisibleProps = {
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
  rootMargin?: string;
};

/**
 * Defers rendering children until the container enters the viewport.
 * Used for below-fold RealScout widgets and third-party-heavy sections.
 */
export default function LazyOnVisible({
  children,
  className = '',
  minHeight = '400px',
  rootMargin = '200px',
}: LazyOnVisibleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible ? (
        children
      ) : (
        <div
          className="flex h-full min-h-[inherit] items-center justify-center rounded-lg bg-gray-50"
          aria-hidden="true"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  );
}
