import * as React from "react"

type BadgeProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export const Badge = ({ children, className = "", variant = "default" }: BadgeProps) => {
  const baseStyles = "inline-block px-3 py-1 text-sm font-medium rounded-full"
  const variants = {
    default: "bg-[#398195]/10 text-[#398195]",
    outline: "border border-[#398195] text-[#398195] bg-transparent"
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
