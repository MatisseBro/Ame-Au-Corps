import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export function ReservationSection() {
  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light text-[#398195] mb-6">
            Réservation
          </h2>
          <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full mb-8"></div>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-[#398195]/5 to-white">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Phone className="h-12 w-12 text-[#398195]" />
              </div>

              <h3 className="text-2xl font-medium text-[#398195] mb-4">
                Massages uniquement sur rendez-vous
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Pour garantir un moment de détente optimal et personnalisé, je
                vous invite à prendre contact avec moi avant votre première
                séance. Nous pourrons ainsi échanger sur vos besoins et choisir
                ensemble le massage le plus adapté.
              </p>

              {/* 🔥 ON FORCE LE DESCENTE ICI */}
              <div className="pt-5">
                <Button
                  asChild
                  className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#contact">Me contacter</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
