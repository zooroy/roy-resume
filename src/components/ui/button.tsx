import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "neon-cyan" | "neon-pink" | "neon-orange"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles = "font-mono font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center"

    const variants = {
      default:
        "bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/40 hover:shadow-neon-cyan",
      outline:
        "border border-pink-500/50 text-pink-300 hover:border-pink-500 hover:bg-pink-500/10 hover:shadow-[0_0_8px_rgba(255,0,255,0.4)]",
      "neon-cyan":
        "bg-cyan-500/10 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/30 hover:shadow-neon-cyan hover:scale-105",
      "neon-pink":
        "bg-pink-500/10 border border-pink-500 text-pink-300 hover:bg-pink-500/30 hover:shadow-neon-pink hover:scale-105",
      "neon-orange":
        "bg-orange-500/10 border border-orange-400 text-orange-300 hover:bg-orange-500/30 hover:shadow-neon-orange hover:scale-105",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
