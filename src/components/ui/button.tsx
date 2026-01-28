import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "neon-cyan" | "neon-pink" | "neon-orange"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles = "font-mono font-medium transition-all duration-300 rounded-xl inline-flex items-center justify-center"

    const variants = {
      default:
        "bg-purple-300/30 border border-purple-400 text-purple-700 hover:bg-purple-300/50 hover:shadow-[0_2px_8px_rgba(115,79,156,0.15)]",
      outline:
        "border border-pink-400/50 text-pink-600 hover:border-pink-500 hover:bg-pink-300/10 hover:shadow-[0_2px_8px_rgba(196,123,180,0.15)]",
      "neon-cyan":
        "bg-purple-300/20 border border-purple-400 text-purple-700 hover:bg-purple-300/40 hover:shadow-[0_2px_8px_rgba(115,79,156,0.15)] hover:scale-105",
      "neon-pink":
        "bg-pink-300/20 border border-pink-400 text-pink-700 hover:bg-pink-300/40 hover:shadow-[0_2px_8px_rgba(196,123,180,0.15)] hover:scale-105",
      "neon-orange":
        "bg-purple-200/20 border border-purple-300 text-purple-600 hover:bg-purple-200/40 hover:shadow-[0_2px_8px_rgba(181,159,214,0.15)] hover:scale-105",
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
