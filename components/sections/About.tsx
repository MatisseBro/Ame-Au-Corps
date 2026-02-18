import Image from "next/image"
import { Heart } from "lucide-react"
import styles from "./About.module.css"

export function AboutSection() {
  return (
    <section
      id="a-propos"
      className="py-20 bg-gradient-to-br from-[#fef8f4] via-white to-[#f2f7f6]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#398195] mb-6">À propos</h2>
            <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Bonjour, je suis Blandine, praticienne en massages bien-être. Mon parcours
                vers cette reconversion professionnelle a été guidé par une expérience
                personnelle profonde.
              </p>
              <p>
                Après avoir traversé une épreuve douloureuse, j&apos;ai découvert
                l&apos;importance vitale du lien entre le corps et l&apos;esprit. Cette
                expérience m&apos;a menée vers l&apos;aromathérapie et les massages
                thérapeutiques, d&apos;abord pour m&apos;accompagner dans ma guérison.
              </p>
              <p>
                En prenant soin d&apos;une personne gravement malade durant ses derniers
                moments, j&apos;ai réalisé à quel point le toucher bienveillant peut
                apporter réconfort et apaisement. C&apos;est cette révélation qui
                m&apos;a poussée à me former professionnellement pour offrir ce même
                réconfort à d&apos;autres.
              </p>
              <p>
                Massages ciblés ou intuitifs, à domicile dans la région de
                Portes-lès-Valence, je vous accompagne avec sincérité et bienveillance
                dans votre quête de bien-être, en honorant cette connexion sacrée entre
                votre âme et votre corps.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-2 border-[#398195]/40">
                  <Image
                    src="/section-accueil.jpeg"
                    alt="Photo de Blandine"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div
                  className={`absolute -top-4 -right-4 w-16 h-16 bg-[#398195]/10 rounded-full flex items-center justify-center ${styles.pulseSlow}`}
                >
                  <Heart className="h-8 w-8 text-[#398195]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-40 flex flex-col md:flex-row justify-center items-center gap-20 w-full">
            <div className="rounded-lg border-2 border-[#398195]/30 p-2 shadow-md w-full max-w-[700px]">
              <Image
                src="/fleurs-lotus.jpeg"
                alt="Fleur de lotus"
                width={1200}
                height={600}
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>

            <div className="rounded-lg border-2 border-[#398195]/30 p-2 shadow-md w-full max-w-[700px]">
              <Image
                src="/institut.jpeg"
                alt="Institut de massage"
                width={1200}
                height={600}
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
