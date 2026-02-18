import { Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import styles from "./Massages.module.css"

type Massage = {
  nom: string
  duree: string
  prix: string
  type: string
  description: string
  effets: string
}

export function MassagesSection({ massages }: { massages: Massage[] }) {
  // Couleurs d'accent (5 pour 5 cartes)
  const accents = [
    { bar: "bg-[#398195]", dot: "bg-[#398195]", border: "border-[#398195]/10" },
    { bar: "bg-amber-500", dot: "bg-amber-500", border: "border-amber-200" },
    { bar: "bg-violet-500", dot: "bg-violet-500", border: "border-violet-200" },
    { bar: "bg-sky-500", dot: "bg-sky-500", border: "border-sky-200" },
    { bar: "bg-emerald-500", dot: "bg-emerald-500", border: "border-emerald-200" },
  ]

  const visibleMassages = (massages || []).filter((m) => !/onavi/i.test(m?.nom ?? ""))

  const cardBase =
    "relative overflow-hidden border shadow-md transition-shadow duration-300 bg-white hover:shadow-lg " +
    "w-full md:w-[420px] flex flex-col h-full md:min-h-[240px] lg:min-h-[260px]"

  return (
    <section id="massages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#398195] mb-6">Massages proposés</h2>
          <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes différentes techniques de massage, chacune adaptée à vos besoins spécifiques pour votre
            bien-être et votre détente.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <div className="grid md:grid-cols-3 gap-10 place-items-center w-full">
            {visibleMassages.slice(0, 3).map((massage, index) => {
              const a = accents[index % accents.length]
              return <CardBlock key={index} massage={massage} accent={a} cardBase={cardBase} />
            })}
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 w-full">
            {visibleMassages.slice(3).map((massage, index) => {
              const a = accents[(index + 3) % accents.length]
              return <CardBlock key={index} massage={massage} accent={a} cardBase={cardBase} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CardBlock({
  massage,
  accent,
  cardBase,
}: {
  massage: Massage
  accent: { bar: string; dot: string; border: string }
  cardBase: string
}) {
  return (
    <Card className={`${cardBase} ${accent.border}`}>
      <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} />

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <span
              className={["inline-block w-2.5 h-2.5 rounded-full", accent.dot, styles.pulseDot].join(" ")}
            />
            <CardTitle className="text-xl text-[#398195] font-medium">{massage.nom}</CardTitle>
          </div>

          <Badge variant="outline" className="border text-[#398195] border-[#398195]">
            {massage.type}
          </Badge>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {massage.duree}
          </div>
          <div className="font-semibold text-[#398195]">{massage.prix}</div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-gray-700 mb-3">{massage.description}</CardDescription>
        <div className="text-sm text-gray-600">
          <strong>Effets :</strong> {massage.effets}
        </div>
      </CardContent>
    </Card>
  )
}
