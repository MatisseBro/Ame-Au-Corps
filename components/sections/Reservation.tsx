import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, CreditCard, Sparkles } from "lucide-react";

export function ReservationSection() {
  const bookingLink = "https://tidycal.com/ameaucorps";

  return (
    <section
      id="reservation"
      className="py-20 bg-gradient-to-b from-white to-[#398195]/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#398195] mb-4">
              Réservation en ligne
            </h2>
            <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Réservez facilement votre massage en ligne et choisissez la
              prestation qui vous convient. Le paiement se fait uniquement le
              jour du rendez-vous.
            </p>
          </div>

          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#398195]/10 mb-6">
                    <CalendarDays className="h-8 w-8 text-[#398195]" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-[#398195] mb-4">
                    Prenez rendez-vous en quelques clics
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    Accédez à la page de réservation, choisissez votre type de
                    massage, sélectionnez le créneau disponible qui vous
                    convient, puis validez votre rendez-vous en ligne.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Sparkles className="h-5 w-5 text-[#398195]" />
                      </div>
                      <p className="text-gray-700">
                        Choix du massage directement sur la page de réservation
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <CalendarDays className="h-5 w-5 text-[#398195]" />
                      </div>
                      <p className="text-gray-700">
                        Créneaux mis à jour selon les disponibilités
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <CreditCard className="h-5 w-5 text-[#398195]" />
                      </div>
                      <p className="text-gray-700">
                        Paiement uniquement le jour du rendez-vous
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                  >
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver en ligne
                    </a>
                  </Button>
                </div>

                <div className="bg-[#398195]/5 rounded-3xl p-8 md:p-10 border border-[#398195]/10">
                  <h4 className="text-2xl font-medium text-[#398195] mb-6">
                    Comment ça fonctionne ?
                  </h4>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[#398195] font-semibold mb-1">
                        1. Choisissez votre massage
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Sélectionnez la prestation qui correspond à vos envies
                        et à vos besoins.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#398195] font-semibold mb-1">
                        2. Sélectionnez un créneau
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Consultez les disponibilités et réservez à l’horaire qui
                        vous convient.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#398195] font-semibold mb-1">
                        3. Réglez sur place
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Aucun paiement en ligne : le règlement se fait
                        directement le jour du rendez-vous.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-2xl bg-white shadow-sm border border-[#398195]/10">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Une fois votre réservation effectuée, vous recevrez une
                      confirmation avec les détails de votre rendez-vous.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
