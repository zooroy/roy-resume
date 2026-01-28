import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'cyan' | 'pink' | 'orange';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-cyan-500/20 border border-cyan-400 text-cyan-300',
      cyan: 'bg-cyan-500/20 border border-cyan-400 text-cyan-300',
      pink: 'bg-pink-500/20 border border-pink-500 text-pink-300',
      orange: 'bg-orange-500/20 border border-orange-400 text-orange-300',
    };

    return (
      <div
        className={cn(
          'inline-block px-3 py-1 rounded-lg text-xs font-mono font-medium',
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
