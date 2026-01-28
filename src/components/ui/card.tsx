import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "pink" | "orange"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = "cyan", ...props }, ref) => {
    const glowStyles = {
      cyan: "border-purple-300 shadow-[0_2px_8px_rgba(115,79,156,0.15)]",
      pink: "border-pink-300 shadow-[0_2px_8px_rgba(196,123,180,0.15)]",
      orange: "border-purple-200 shadow-[0_2px_8px_rgba(181,159,214,0.15)]",
    }

    return (
      <div
        className={cn(
          "border rounded-2xl p-6 bg-white/50 transition-all duration-300 hover:shadow-lg",
          glowStyles[glow],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("space-y-1.5", className)} ref={ref} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h3
    className={cn("text-xl font-bold tracking-wider", className)}
    ref={ref}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn("text-sm text-gray-600 font-mono", className)}
    ref={ref}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("pt-0", className)} ref={ref} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex items-center pt-4", className)}
    ref={ref}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
