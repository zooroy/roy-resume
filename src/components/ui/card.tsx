import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "pink" | "orange"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = "cyan", ...props }, ref) => {
    const glowStyles = {
      cyan: "border-cyan-400 shadow-neon-cyan",
      pink: "border-pink-500 shadow-neon-pink",
      orange: "border-orange-400 shadow-neon-orange",
    }

    return (
      <div
        className={cn(
          "border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl",
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
    className={cn("text-sm text-gray-400 font-mono", className)}
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
