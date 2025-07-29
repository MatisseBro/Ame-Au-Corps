import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded bg-[#398195] text-white hover:bg-[#2d6b7a] transition",
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
