"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Remonter en haut"
      title="Remonter en haut"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
         bg-[#398195]/80 text-white shadow-lg backdrop-blur-sm
         border-2 border-white
         flex items-center justify-center
         transition-all duration-200
         hover:bg-[#398195] hover:shadow-xl hover:scale-105
         focus:outline-none focus:ring-2 focus:ring-white/60"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
