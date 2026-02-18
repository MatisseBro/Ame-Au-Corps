import { Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavBar } from "@/components/client/NavBar"
import { HeroSection } from "@/components/sections/Hero"
import { AboutSection } from "@/components/sections/About"
import { MassagesSection } from "@/components/sections/Massages"
import { ReservationSection } from "@/components/sections/Reservation"
import { ContactForm } from "@/components/client/ContactForm"
import { BackToTop } from "@/components/client/BackToTop"
import { FooterSection } from "@/components/sections/Footer"

const massages = [
  {
    nom: "Massage Hypoténuse",
    duree: "60 min",
    prix: "65€",
    type: "À l'huile",
    description: "Massage relaxant complet du corps pour libérer les tensions",
    effets: "Détente profonde, amélioration de la circulation",
  },
  {
    nom: "Massage Balinais",
    duree: "75 min",
    prix: "80€",
    type: "À l'huile",
    description: "Massage traditionnel indonésien aux huiles essentielles",
    effets: "Relaxation intense, équilibre énergétique",
  },
  {
    nom: "Massage Lomi-Lomi",
    duree: "90 min",
    prix: "95€",
    type: "À l'huile",
    description: "Massage hawaïen fluide et enveloppant",
    effets: "Harmonie corps-esprit, lâcher-prise",
  },
  {
    nom: "Massage Amma",
    duree: "45 min",
    prix: "50€",
    type: "Habillé",
    description: "Massage japonais sur chaise, idéal en entreprise",
    effets: "Soulagement des tensions, regain d'énergie",
  },
  {
    nom: "Massages Ciblés",
    duree: "30 min",
    prix: "40€",
    type: "À l'huile ou habillé",
    description: "Massage spécifique selon vos besoins (dos, nuque, jambes...)",
    effets: "Soulagement ciblé, amélioration de la mobilité",
  },
]

export default function AmeAuCorpsLanding() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <NavBar />

      <HeroSection />
      <AboutSection />
      <MassagesSection massages={massages} />
      <ReservationSection />

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#398195] mb-6">Contact</h2>
              <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm massages={massages} />

              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#398195] flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Contact direct
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      <strong>Email :</strong>
                      <br />
                      <a href="mailto:desrousseaux.blandine@outlook.fr" className="text-[#398195] hover:underline">
                        desrousseaux.blandine@outlook.fr
                      </a>
                    </p>
                    <p className="text-gray-700 mt-4">
                      <strong>Téléphone :</strong>
                      <br />
                      <a href="tel:0769612946" className="text-[#398195] hover:underline">
                        07 69 61 29 46
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#398195] flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Zone d'intervention
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      <strong>Secteur :</strong> Portes-lès-Valence + 30 km autour
                    </p>
                    <p className="text-gray-700">
                      <strong>Déplacement :</strong> Gratuit dans la zone
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#398195]">Modalités de paiement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      <strong>Moyens acceptés :</strong>
                      <br />
                      • Espèces
                      <br />
                      • Virement bancaire
                      <br />• Chèques
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>Paiement par carte non accepté</em>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <BackToTop />
    </div>
  )
}
