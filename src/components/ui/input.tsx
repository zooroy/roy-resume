import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", type, ...props }, ref) => {
    const variants = {
      default:
        "border border-cyan-400/50 bg-cyan-400/5 text-cyan-100 placeholder:text-cyan-300/50 focus:border-cyan-400 focus:bg-cyan-400/10 focus:shadow-[0_0_12px_rgba(0,255,255,0.4)]",
      outline:
        "border border-pink-500/50 bg-transparent text-gray-100 placeholder:text-gray-500 focus:border-pink-500 focus:shadow-[0_0_12px_rgba(255,0,255,0.4)]",
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-base transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-mono",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
