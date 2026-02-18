import * as React from "react"
import { cn } from "@/lib/utils"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

type ChildWithClassName = React.ReactElement<{ className?: string }>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, children, ...props }, ref) => {
    const baseClasses = cn(
      "px-4 py-2 rounded bg-[#398195] text-white hover:bg-[#2d6b7a] transition",
      className
    )

    if (asChild && React.isValidElement(children)) {
      const child = children as ChildWithClassName
      return React.cloneElement(child, {
        className: cn(baseClasses, child.props.className),
      })
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
