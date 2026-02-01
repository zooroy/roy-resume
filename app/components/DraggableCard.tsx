'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion, useMotionValue } from 'framer-motion';

type DraggableCardProps = {
  as?: 'div' | 'article';
  className?: string;
  children: ReactNode;
  dragBoundsRef: React.RefObject<HTMLElement | null>;
  zIndexCounterRef: React.MutableRefObject<number>;
};

export default function DraggableCard({
  as = 'div',
  className,
  children,
  dragBoundsRef,
  zIndexCounterRef,
}: DraggableCardProps) {
  const [zIndex, setZIndex] = useState(1);
  const [dragEnabled, setDragEnabled] = useState(true);
  const MotionTag = as === 'article' ? motion.article : motion.div;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateDragEnabled = () => setDragEnabled(!mediaQuery.matches);
    updateDragEnabled();
    mediaQuery.addEventListener('change', updateDragEnabled);
    return () => mediaQuery.removeEventListener('change', updateDragEnabled);
  }, []);

  useEffect(() => {
    const resetPosition = () => {
      x.set(0);
      y.set(0);
    };
    window.addEventListener('resize', resetPosition);
    return () => window.removeEventListener('resize', resetPosition);
  }, [x, y]);

  return (
    <MotionTag
      drag={dragEnabled}
      dragListener={dragEnabled}
      dragConstraints={dragBoundsRef}
      dragMomentum={false}
      dragElastic={0.28}
      whileTap={{
        scale: 1.02,
        boxShadow: '0 22px 45px rgba(34, 20, 10, 0.26)',
      }}
      whileDrag={{
        scale: 1.04,
        boxShadow: '0 28px 55px rgba(34, 20, 10, 0.32)',
      }}
      onPointerDown={() => setZIndex(++zIndexCounterRef.current)}
      style={{ zIndex, position: 'relative', x, y }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
