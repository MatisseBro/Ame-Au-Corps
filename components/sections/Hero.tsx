import Image from "next/image";
import { CalendarDays } from "lucide-react";

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
            Âme au Corps Portes-lès-Valence
          </h1>
          <blockquote className="text-2xl md:text-3xl text-gray-600 font-light italic mb-12 leading-relaxed">
            "Chéris ton corps, l&apos;âme y fleurira."
          </blockquote>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800">
            <CalendarDays className="h-5 w-5 shrink-0" />
            <p className="text-sm font-medium">
              La réservation en ligne est momentanément indisponible.{" "}
              <span className="font-semibold">Réouverture à partir du 21 juillet.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
