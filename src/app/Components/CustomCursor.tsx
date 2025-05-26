'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setShowCursor(window.innerWidth >= 1024); // 1024px = Tailwind's 'lg'
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (!showCursor) return;
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out',
        });
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 w-5 h-5 rounded-full bg-black opacity-70 z-[9999]"
    />
  );
};

export default CustomCursor;