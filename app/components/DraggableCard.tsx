'use client';

import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type DraggableCardProps = {
  as?: 'div' | 'article';
  className?: string;
  children: ReactNode;
  effects?: 'default' | 'none' | 'scale';
  zIndexCounterRef: React.MutableRefObject<number>;
};

export default function DraggableCard({
  as = 'div',
  className,
  children,
  effects = 'default',
  zIndexCounterRef,
}: DraggableCardProps) {
  const [zIndex, setZIndex] = useState(1);
  const MotionTag = as === 'article' ? motion.article : motion.div;

  const whileTap =
    effects === 'none'
      ? undefined
      : effects === 'scale'
        ? { scale: 1.02 }
        : {
            scale: 1.02,
            boxShadow: '0 22px 45px rgba(34, 20, 10, 0.26)',
          };

  return (
    <MotionTag
      whileTap={whileTap}
      onPointerDown={() => setZIndex(++zIndexCounterRef.current)}
      style={{ zIndex, position: 'relative' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
