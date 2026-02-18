import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#398195]/10 via-white to-gray-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Image
              src="/logo-ame-au-corps.png"
              alt="Logo Âme au Corps"
              width={288}
              height={288}
              priority
              className="h-72 w-auto mx-auto mb-4 animate-pulse"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-[#398195] mb-8 tracking-wide">
            Âme au Corps
          </h1>
          <blockquote className="text-2xl md:text-3xl text-gray-600 font-light italic mb-12 leading-relaxed">
            "Chéris ton corps, l&apos;âme y fleurira."
          </blockquote>
          <Button
            asChild
            className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#reservation">Prendre rendez-vous</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
