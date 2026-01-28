import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'cyan' | 'pink' | 'orange';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-purple-300/30 border border-purple-400 text-purple-700',
      cyan: 'bg-purple-300/30 border border-purple-400 text-purple-700',
      pink: 'bg-pink-300/30 border border-pink-400 text-pink-700',
      orange: 'bg-purple-200/30 border border-purple-300 text-purple-600',
    };

    return (
      <div
        className={cn(
          'inline-block px-3 py-1 rounded-full text-xs font-mono font-medium',
          variants[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
