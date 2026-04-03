import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  CheckCircle2,
  CreditCard,
  HandHeart,
  Home,
  MapPin,
  Sparkles,
} from "lucide-react";
import { NavBar } from "@/components/client/NavBar";
import { FooterSection } from "@/components/sections/Footer";

const bookingLink = "https://tidycal.com/ameaucorps";
const phone = "07 69 61 29 46";
const email = "desrousseaux.blandine@outlook.fr";

const accentColor = "#B88C6A";

const massageList = [
  {
    title: "Massage Amma assis",
    description:
      "Massage rythmé et efficace, idéal pour relâcher rapidement les tensions du dos, de la nuque et des épaules.",
    benefit:
      "Retrouver de l'énergie et soulager les tensions du haut du corps.",
  },
  {
    title: "Massage balinais",
    description:
      "Massage enveloppant et profond qui associe détente, relâchement musculaire et meilleure circulation de l'énergie.",
    benefit:
      "Apaiser le corps en profondeur et retrouver une vraie sensation de lâcher-prise.",
  },
  {
    title: "Massage lomi-lomi",
    description:
      "Massage fluide et harmonieux inspiré des traditions hawaïennes, réalisé avec de longs mouvements enveloppants.",
    benefit:
      "Se recentrer, se détendre profondément et retrouver une sensation d'équilibre.",
  },
  {
    title: "Massage personnalisé",
    description:
      "Séance adaptée à vos besoins du moment : stress, fatigue, tensions ciblées ou envie d'un moment de détente sur-mesure.",
    benefit:
      "Profiter d'un massage ajusté à votre état physique et émotionnel.",
  },
];

const faqItems = [
  {
    question: "Proposez-vous des massages à domicile à Portes-lès-Valence ?",
    answer:
      "Oui, selon la prestation choisie, il est possible d'organiser un massage à domicile à Portes-lès-Valence et dans les environs. Nous validons ensemble le lieu, l'espace disponible et les modalités pratiques.",
  },
  {
    question: "Intervenez-vous uniquement à Portes-lès-Valence ?",
    answer:
      "Non, les rendez-vous peuvent aussi être envisagés à Valence, dans plusieurs communes proches, et plus largement selon le secteur en Drôme et en Ardèche. Le plus simple est d'échanger pour vérifier la faisabilité du déplacement.",
  },
  {
    question: "Comment réserver un massage bien-être ?",
    answer:
      "Vous pouvez réserver directement en ligne en choisissant votre prestation et votre créneau, ou me contacter si vous souhaitez d'abord échanger.",
  },
  {
    question: "Peut-on choisir son créneau en ligne ?",
    answer:
      "Oui, la page de réservation permet de consulter les disponibilités et de sélectionner le créneau qui vous convient le mieux.",
  },
  {
    question: "Le paiement se fait-il en ligne ?",
    answer:
      "Non, le règlement se fait simplement le jour du rendez-vous. Cela permet de garder une réservation plus souple et plus humaine.",
  },
  {
    question: "Dans quelles zones intervenez-vous autour de Valence ?",
    answer:
      "L'activité est principalement orientée autour de Portes-lès-Valence, Valence et des communes voisines, avec possibilité d'élargir selon les demandes en Drôme ou en Ardèche.",
  },
];

const faqLeft = faqItems.slice(0, 3);
const faqRight = faqItems.slice(3, 6);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ameaucorps.fr/massage-portes-les-valence",
  name: "Âme au Corps",
  image: "https://www.ameaucorps.fr/ame-au-corps-blanc.png",
  telephone: phone,
  email,
  url: "https://www.ameaucorps.fr/massage-portes-les-valence",
  description:
    "Âme au Corps propose des massages bien-être à Portes-lès-Valence, Valence et alentours, avec possibilité de déplacement à domicile selon la prestation. Réservation en ligne et paiement le jour du rendez-vous.",
  areaServed: [
    {
      "@type": "City",
      name: "Portes-lès-Valence",
    },
    {
      "@type": "City",
      name: "Valence",
    },
    {
      "@type": "AdministrativeArea",
      name: "Drôme",
    },
    {
      "@type": "AdministrativeArea",
      name: "Ardèche",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "[ADRESSE_SI_NECESSAIRE]",
    addressLocality: "Portes-lès-Valence",
    addressCountry: "FR",
  },
  sameAs: ["https://www.ameaucorps.fr/"],
  serviceType: "Massages bien-être",
};

export const metadata: Metadata = {
  title: "Massage à Portes-lès-Valence, Valence et alentours | Âme au Corps",
  description:
    "Massages bien-être à Portes-lès-Valence, Valence et alentours. Réservation en ligne, déplacement possible à domicile en Drôme et Ardèche selon la prestation, paiement le jour du rendez-vous.",
  alternates: {
    canonical: "/massage-portes-les-valence",
  },
  openGraph: {
    title: "Massage à Portes-lès-Valence, Valence et alentours | Âme au Corps",
    description:
      "Massages bien-être à Portes-lès-Valence, Valence et alentours, avec possibilité de déplacement à domicile selon la prestation. Réservation simple et paiement le jour du rendez-vous.",
    url: "https://www.ameaucorps.fr/massage-portes-les-valence",
    siteName: "Âme au Corps",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.ameaucorps.fr/ame-au-corps-blanc.png",
        width: 1200,
        height: 630,
        alt: "Logo Âme au Corps",
      },
    ],
  },
};

function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-[#398195]/15 bg-white shadow-sm overflow-hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
            <span className="text-lg font-medium text-[#398195]">
              {item.question}
            </span>
            <span className="shrink-0 text-2xl leading-none text-[#398195] transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function MassagePortesLesValencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar basePath="/" />

      <section id="accueil" className="bg-gradient-to-br from-[#398195]/10 via-white to-[#f6f3ef] pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#398195]">
              Âme au Corps
            </p>

            <h1 className="text-4xl md:text-5xl font-light text-[#398195] leading-tight">
              Massage bien-être à Portes-lès-Valence, Valence et alentours
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Offrez-vous un moment pour ralentir, relâcher les tensions et
              retrouver un meilleur équilibre. Âme au Corps propose des massages
              bien-être à Portes-lès-Valence, sur Valence et dans les environs,
              avec possibilité de déplacement à domicile selon la prestation et
              le secteur.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="px-6 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition bg-[#398195] hover:bg-[#2d6b7a]"
              >
                <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                  Réserver en ligne
                </a>
              </Button>

              <a
                href="https://www.ameaucorps.fr/#massages"
                className="inline-flex items-center px-6 py-3 rounded-full border transition"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
              >
                Voir les massages
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#398195]" />
                <span>
                  Portes-lès-Valence, Valence, Drôme et Ardèche selon secteur
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#398195]" />
                <span>Paiement le jour du rendez-vous</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#398195]" />
                <span>Massages bien-être personnalisés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="a-propos" className="bg-gradient-to-br from-[#398195]/10 via-white to-[#f6f3ef] pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p
                className="text-sm uppercase tracking-[0.18em]"
                style={{ color: accentColor }}
              >
                Massage à domicile
              </p>

              <h2 className="text-3xl font-light text-[#398195]">
                Massage à domicile : comment ça se passe ?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Selon la prestation et la zone, il est possible d'organiser un
                massage à domicile à Portes-lès-Valence, à Valence ou dans
                d'autres communes proches en Drôme et en Ardèche.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Le rendez-vous est préparé avec vous en amont afin de vérifier
                le lieu, l'espace disponible et les conditions d'installation.
                L'objectif est de vous proposer une expérience simple,
                confortable et sereine.
              </p>

              <p className="text-gray-700 leading-relaxed">
                La réservation permet de bloquer votre créneau, puis les détails
                pratiques sont confirmés ensemble. Le règlement se fait
                directement le jour du rendez-vous.
              </p>
            </div>

            <Card className="border-[#398195]/15 shadow-lg bg-white">
              <CardContent className="space-y-6 p-6 text-gray-700">
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-[#398195] mt-0.5" />
                  <div>
                    <p className="text-[#398195] font-semibold">
                      1. Vous choisissez votre créneau
                    </p>
                    <p>
                      Réservez en ligne ou contactez-moi directement pour
                      trouver le moment qui vous convient.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Home className="h-5 w-5 text-[#398195] mt-0.5" />
                  <div>
                    <p className="text-[#398195] font-semibold">
                      2. Nous validons le lieu
                    </p>
                    <p>
                      Selon la prestation, le massage peut être prévu à domicile
                      ou selon les modalités convenues ensemble.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-[#398195] mt-0.5" />
                  <div>
                    <p className="text-[#398195] font-semibold">
                      3. Paiement le jour du rendez-vous
                    </p>
                    <p>
                      Aucun paiement en ligne : le règlement se fait simplement
                      sur place le jour J.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: accentColor }}
            >
              Présence locale
            </p>

            <h2 className="text-3xl font-light text-[#398195]">
              Une approche locale, humaine et sur-mesure
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Basée autour de Portes-lès-Valence, l'activité s'adresse aux
              personnes qui recherchent un véritable moment de détente, de
              recentrage et d'écoute. Chaque séance est pensée pour s'adapter à
              votre état du moment, à vos tensions et à vos besoins.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Que vous soyez à Portes-lès-Valence, à Valence ou dans une commune
              voisine, l'objectif reste le même : vous proposer un massage
              bien-être de qualité, dans une ambiance douce, rassurante et
              personnalisée.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Certaines prestations peuvent également être réalisées à domicile,
              en Drôme ou en Ardèche selon la zone et l'organisation du
              rendez-vous. Cela permet de profiter d'un moment de relaxation
              directement chez vous, dans un cadre familier et confortable.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#massages"
                className="text-[#398195] font-medium hover:underline"
              >
                Découvrir les massages sur la page d'accueil
              </a>
              <span className="text-gray-400">·</span>
              <a
                href="/#reservation"
                className="font-medium hover:underline"
                style={{ color: accentColor }}
              >
                Accéder à la réservation
              </a>
            </div>
          </div>

          <Card className="border-[#398195]/15 shadow-lg bg-white">
            <CardHeader className="mb-6">
              <CardTitle className="text-2xl text-[#398195]">
                Pour qui ?
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#398195] mt-0.5" />
                <p>
                  Pour les personnes stressées, fatiguées ou en recherche d'un
                  vrai moment de relâchement.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#398195] mt-0.5" />
                <p>
                  Pour celles et ceux qui ressentent des tensions dans le dos,
                  la nuque, les épaules ou les jambes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#398195] mt-0.5" />
                <p>
                  Pour les personnes qui souhaitent prendre soin d'elles avec un
                  massage bien-être adapté à leur rythme.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#398195] mt-0.5" />
                <p>
                  Pour les habitants de Portes-lès-Valence, Valence et des
                  alentours qui recherchent une praticienne à l'écoute.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="massages" className="py-16 bg-gradient-to-b from-[#f8fafb] to-[#f6f3ef]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-[0.18em] mb-3"
              style={{ color: accentColor }}
            >
              Prestations
            </p>
            <h2 className="text-3xl font-light text-[#398195] mb-4">
              Massages proposés
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Différentes prestations bien-être pour répondre à vos envies de
              détente, de relâchement musculaire ou de recentrage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {massageList.map((massage) => (
              <Card
                key={massage.title}
                className="h-full shadow-md border border-[#398195]/10 bg-white"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-[#398195]">
                    {massage.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 text-gray-700">
                  <p>{massage.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#398195]">
                    <Sparkles className="h-4 w-4" />
                    <span>{massage.benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fcfcfb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-[0.18em] mb-3"
              style={{ color: accentColor }}
            >
              Vos avantages
            </p>
            <h2 className="text-3xl font-light text-[#398195] mb-4">
              Pourquoi choisir Âme au Corps ?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Une approche bienveillante, une organisation simple et des
              prestations pensées pour votre confort, à Portes-lès-Valence,
              Valence et dans les environs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <HandHeart className="h-5 w-5" />
                  Approche personnalisée
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Chaque séance est adaptée à votre besoin du moment, à votre
                niveau de fatigue et à vos zones de tension.
              </CardContent>
            </Card>

            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <MapPin className="h-5 w-5" />
                  Présence locale
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Une activité développée autour de Portes-lès-Valence, Valence et
                des secteurs proches, avec possibilité de déplacement selon les
                demandes.
              </CardContent>
            </Card>

            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <Sparkles className="h-5 w-5" />
                  Expérience apaisante
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Une ambiance douce, un rythme respectueux et une vraie attention
                portée à votre confort.
              </CardContent>
            </Card>

            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <CalendarDays className="h-5 w-5" />
                  Réservation simple
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Réservation en ligne rapide avec possibilité de contact direct
                pour organiser le rendez-vous plus facilement.
              </CardContent>
            </Card>

            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <CheckCircle2 className="h-5 w-5" />
                  Relation de confiance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Un accompagnement humain, sans surpromesse, avec une volonté de
                vous proposer un vrai moment pour vous.
              </CardContent>
            </Card>

            <Card className="border-[#398195]/15 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#398195]">
                  <Sparkles className="h-5 w-5" />
                  Organisation claire
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Les modalités du rendez-vous sont précisées simplement pour vous
                offrir une expérience fluide et rassurante.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reservation" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-[#398195]/10 via-white to-[#f6f3ef] border-[#398195]/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <p
                  className="text-sm uppercase tracking-[0.18em]"
                  style={{ color: accentColor }}
                >
                  Réservation
                </p>

                <h2 className="text-3xl font-light text-[#398195]">
                  Prêt pour votre moment de détente ?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Réservez simplement votre créneau en ligne, puis nous validons
                  ensemble les derniers détails du rendez-vous selon la
                  prestation choisie.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#398195]" />
                    Paiement sur place
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#398195]" />
                    Créneaux mis à jour
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#398195]" />
                    Portes-lès-Valence et proximité
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <Button
                    asChild
                    className="px-8 py-3 text-base rounded-full shadow-lg hover:shadow-xl transition bg-[#398195] hover:bg-[#2d6b7a]"
                  >
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver en ligne
                    </a>
                  </Button>

                  <a
                    href="https://www.ameaucorps.fr/#massages"
                    className="inline-flex justify-center px-6 py-3 rounded-full border transition"
                    style={{
                      borderColor: accentColor,
                      color: accentColor,
                    }}
                  >
                    Retour pour voir les massages à la page d’accueil
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p
                className="text-sm uppercase tracking-[0.18em]"
                style={{ color: accentColor }}
              >
                Contact
              </p>
              <h2 className="text-3xl font-light text-[#398195]">
                Une question avant de réserver ?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez m&apos;envoyer un message ou m&apos;appeler pour préciser votre besoin, la zone d&apos;intervention ou le type de prestation.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email :</strong>{" "}
                  <a href={`mailto:${email}`} className="text-[#398195] hover:underline">
                    {email}
                  </a>
                </p>
                <p>
                  <strong>Téléphone :</strong>{" "}
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#398195] hover:underline">
                    {phone}
                  </a>
                </p>
              </div>
            </div>
            <Card className="border-[#398195]/15 shadow-lg bg-white">
              <CardContent className="space-y-4 p-6">
                <p className="text-gray-700">
                  Prêt·e à réserver directement ? Choisissez votre créneau en ligne ou revenez vers moi pour valider ensemble le rendez-vous.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="px-6 py-3 text-sm rounded-full shadow-md hover:shadow-lg transition bg-[#398195] hover:bg-[#2d6b7a]"
                  >
                    <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                      Réserver en ligne
                    </a>
                  </Button>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center px-4 py-3 rounded-full border transition"
                    style={{
                      borderColor: accentColor,
                      color: accentColor,
                    }}
                  >
                    Envoyer un email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-[#f8fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm uppercase tracking-[0.18em] mb-3"
              style={{ color: accentColor }}
            >
              Questions fréquentes
            </p>
            <h2 className="text-3xl font-light text-[#398195] mb-4">
              FAQ massage Portes-lès-Valence et alentours
            </h2>
            <p className="text-gray-700">
              Des réponses simples pour vous aider à réserver sereinement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            <FaqAccordion items={faqLeft} />
            <FaqAccordion items={faqRight} />
          </div>
        </div>
      </section>

      <FooterSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
