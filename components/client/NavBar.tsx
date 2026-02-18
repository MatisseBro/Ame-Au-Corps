"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"

const links = [
  { id: "accueil", label: "accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "massages", label: "massages" },
  { id: "reservation", label: "Réservation" },
  { id: "contact", label: "contact" },
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-[#398195]" />
            <span className="text-xl font-bold text-[#398195]">Âme au Corps</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-[#398195] transition-colors duration-200 capitalize font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="text-gray-700 hover:text-[#398195] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#398195] hover:bg-gray-50 transition-colors capitalize"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
