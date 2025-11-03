"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Leaf,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AmeAuCorpsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeMassage: "",
    message: "",
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Votre message a été envoyé ! Je vous recontacterai rapidement.");
  };

  const massages = [
    {
      nom: "Massage Hypoténuse",
      duree: "60 min",
      prix: "60€",
      type: "À l'huile",
      description:
        "Massage relaxant complet du corps pour libérer les tensions",
      effets: "Détente profonde, amélioration de la circulation",
    },
    {
      nom: "Massage Balinais",
      duree: "Entre 60 et 75 min",
      prix: "Entre 60 et 75€",
      type: "À l'huile",
      description: "Massage traditionnel indonésien aux huiles essentielles",
      effets: "Relaxation intense, équilibre énergétique",
    },
    {
      nom: "Massage Lomi-Lomi",
      duree: "Entre 60 et 75 min",
      prix: "Entre 60 et 75€",
      type: "À l'huile",
      description: "Massage hawaïen fluide et enveloppant",
      effets: "Harmonie corps-esprit, lâcher-prise",
    },
    {
      nom: "Massage Amma",
      duree: "Entre 30 et 45 min",
      prix: "Entre 30 et 45€",
      type: "Habillé",
      description: "Massage japonais sur chaise, idéal en entreprise",
      effets: "Soulagement des tensions, regain d'énergie",
    },
    {
      nom: "Massage ONAVI",
      duree: "60 min",
      prix: "70€",
      type: "À l'huile",
      description: "Technique innovante alliant douceur et efficacité",
      effets: "Bien-être global, apaisement du système nerveux",
    },
    {
      nom: "Massages Ciblés",
      duree: "30 min",
      prix: "40€",
      type: "À l'huile ou habillé",
      description:
        "Massage spécifique selon vos besoins (dos, nuque, jambes...)",
      effets: "Soulagement ciblé, amélioration de la mobilité",
    },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation fixe */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-[#398195]" />
              <span className="text-xl font-bold text-[#398195]">
                Âme au Corps
              </span>
            </div>

            {/* Navigation desktop */}
            <div className="hidden md:flex space-x-8">
              {[
                "accueil",
                "a-propos",
                "massages",
                "reservation",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-[#398195] transition-colors duration-200 capitalize font-medium"
                >
                  {item === "a-propos"
                    ? "À propos"
                    : item === "reservation"
                    ? "Réservation"
                    : item}
                </button>
              ))}
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#398195] transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Menu mobile ouvert */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              {[
                "accueil",
                "a-propos",
                "massages",
                "reservation",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#398195] hover:bg-gray-50 transition-colors capitalize"
                >
                  {item === "a-propos"
                    ? "À propos"
                    : item === "reservation"
                    ? "Réservation"
                    : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Section Accueil (Hero) */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#398195]/10 via-white to-gray-50 pt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              {" "}
              {/* ↓ marge réduite pour remonter le logo */}
              <img
                src="/logo-ame-au-corps.png"
                alt="Logo Âme au Corps"
                className="h-72 mx-auto mb-4 animate-pulse"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-[#398195] mb-8 tracking-wide">
              Âme au Corps
            </h1>
            <blockquote className="text-2xl md:text-3xl text-gray-600 font-light italic mb-12 leading-relaxed">
              "Chéris ton corps, l'âme y fleurira."
            </blockquote>
            <Button
              onClick={() => scrollToSection("reservation")}
              className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section
        id="a-propos"
        className="py-20 bg-gradient-to-br from-[#fef8f4] via-white to-[#f2f7f6]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#398195] mb-6">
                À propos
              </h2>
              <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Bonjour, je suis Blandine, praticienne en massages bien-être.
                  Mon parcours vers cette reconversion professionnelle a été
                  guidé par une expérience personnelle profonde.
                </p>
                <p>
                  Après avoir traversé une épreuve douloureuse, j'ai découvert
                  l'importance vitale du lien entre le corps et l'esprit. Cette
                  expérience m'a mené vers l'aromathérapie et les massages
                  thérapeutiques, d'abord pour m'accompagner dans ma guérison.
                </p>
                <p>
                  En prenant soin d'une personne gravement malade durant ses
                  derniers moments, j'ai réalisé à quel point le toucher
                  bienveillant peut apporter réconfort et apaisement. C'est
                  cette révélation qui m'a poussée à me former
                  professionnellement pour offrir ce même réconfort à d'autres.
                </p>
                <p>
                  Massages ciblés ou intuitifs, à domicile dans la région de
                  Portes-lès-Valence, je vous accompagne avec sincérité et
                  bienveillance dans votre quête de bien-être, en honorant cette
                  connexion sacrée entre votre âme et votre corps.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  {/* Photo circulaire */}
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-2 border-[#398195]/40">
                    <img
                      src="/section-accueil.jpeg"
                      alt="Photo de Blandine"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Cœur animé */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#398195]/10 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Heart className="h-8 w-8 text-[#398195]" />
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes pulse-slow {
                  0%,
                  100% {
                    transform: scale(1);
                    opacity: 1;
                  }
                  50% {
                    transform: scale(1.15);
                    opacity: 0.8;
                  }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 2.5s infinite ease-in-out;
                }
              `}</style>
            </div>

            {/* Images décoratives */}
            <div className="mt-40 flex flex-col md:flex-row justify-center items-center gap-20 w-full">
              {/* Lotus */}
              <div className="rounded-lg border-2 border-[#398195]/30 p-2 shadow-md w-full max-w-[700px]">
                <img
                  src="/fleurs-lotus.jpeg"
                  alt="Fleur de lotus"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>

              {/* Institut */}
              <div className="rounded-lg border-2 border-[#398195]/30 p-2 shadow-md w-full max-w-[700px]">
                <img
                  src="/institut.jpeg"
                  alt="Institut de massage"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Massages */}
      <section id="massages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-[#398195] mb-6">
              Massages proposés
            </h2>
            <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez mes différentes techniques de massage, chacune adaptée à
              vos besoins spécifiques pour votre bien-être et votre détente.
            </p>
          </div>

          {(() => {
            const accents = [
              {
                bar: "bg-[#398195]",
                dot: "bg-[#398195]",
                border: "border-[#398195]/10",
              },
              {
                bar: "bg-amber-500",
                dot: "bg-amber-500",
                border: "border-amber-200",
              },
              {
                bar: "bg-violet-500",
                dot: "bg-violet-500",
                border: "border-violet-200",
              },
              {
                bar: "bg-sky-500",
                dot: "bg-sky-500",
                border: "border-sky-200",
              },
              {
                bar: "bg-rose-500",
                dot: "bg-rose-500",
                border: "border-rose-200",
              },
              {
                bar: "bg-emerald-500",
                dot: "bg-emerald-500",
                border: "border-emerald-200",
              },
            ];

            const isUnavailable = (massage) =>
              /onavi/i.test(massage?.nom ?? "") ||
              massage?.disponible === false;

            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {massages.map((massage, index) => {
                  const a = accents[index % accents.length];
                  const unavailable = isUnavailable(massage);

                  return (
                    <Card
                      key={index}
                      aria-disabled={unavailable}
                      className={[
                        "relative overflow-hidden border",
                        a.border,
                        "shadow-md transition-shadow duration-300 bg-white",
                        unavailable
                          ? "opacity-85 grayscale-[40%] cursor-not-allowed"
                          : "hover:shadow-lg",
                      ].join(" ")}
                    >
                      {/* Barre d’accent en haut */}
                      <span
                        className={`absolute inset-x-0 top-0 h-1 ${a.bar}`}
                      />

                      {/* Contenu principal */}
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={[
                                "inline-block w-2.5 h-2.5 rounded-full",
                                a.dot,
                                unavailable
                                  ? ""
                                  : "animate-[pulse_2.4s_ease-in-out_infinite]",
                              ].join(" ")}
                            />
                            <CardTitle className="text-xl text-[#398195] font-medium">
                              {massage.nom}
                            </CardTitle>
                          </div>

                          <Badge
                            variant="outline"
                            className={[
                              "border",
                              "text-[#398195]",
                              "border-[#398195]",
                              unavailable
                                ? "line-through border-gray-300 text-gray-400"
                                : "",
                            ].join(" ")}
                          >
                            {massage.type}
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {massage.duree}
                          </div>
                          <div className="font-semibold text-[#398195]">
                            {massage.prix}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent
                        className={
                          unavailable ? "pointer-events-none select-none" : ""
                        }
                      >
                        <CardDescription className="text-gray-700 mb-3">
                          {massage.description}
                        </CardDescription>
                        <div className="text-sm text-gray-600">
                          <strong>Effets :</strong> {massage.effets}
                        </div>
                      </CardContent>

                      {/* Overlay adouci */}
                      {unavailable && (
                        <div className="absolute inset-0 grid place-items-center">
                          {/* voile plus léger */}
                          <div className="absolute inset-0 bg-white/50 backdrop-blur-[0.5px]" />

                          {/* croix adoucie */}
                          <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <line
                              x1="0"
                              y1="0"
                              x2="100"
                              y2="100"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-gray-300"
                            />
                            <line
                              x1="100"
                              y1="0"
                              x2="0"
                              y2="100"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-gray-300"
                            />
                          </svg>

                          <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-gray-900/70 text-white shadow-lg">
                              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
                              Indisponible
                            </span>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            );
          })()}
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.85;
            }
          }
        `}</style>
      </section>

      {/* Section Réservation */}
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
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pour garantir un moment de détente optimal et personnalisé, je
                  vous invite à prendre contact avec moi avant votre première
                  séance. Nous pourrons ainsi échanger sur vos besoins et
                  choisir ensemble le massage le plus adapté.
                </p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Me contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-[#398195] mb-6">
                Contact
              </h2>
              <div className="w-24 h-1 bg-[#398195] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulaire */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#398195]">
                    Envoyez-moi un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/desrousseaux.blandine@outlook.fr"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Anti-spam (honeypot) */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://ameaucorps.fr/merci"
                    />

                    {/* Nom et prénom */}
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom et prénom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        pattern="^[A-Za-zÀ-ÿ\s\-']+$"
                        title="Veuillez entrer uniquement des lettres (pas de chiffres)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        inputMode="numeric"
                        maxLength={14}
                        pattern="^(\d{2}\s){4}\d{2}$"
                        title="Format attendu : 07 69 61 29 46"
                        placeholder="07 69 61 29 46"
                        onInput={(e) => {
                          const input = e.currentTarget;
                          let value = input.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          value = value.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
                          input.value = value;
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
                      />
                    </div>

                    {/* Type de massage */}
                    <div>
                      <label
                        htmlFor="typeMassage"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Type de massage souhaité
                      </label>
                      <select
                        id="typeMassage"
                        name="typeMassage"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez un massage</option>
                        {massages.map((massage, index) => (
                          <option key={index} value={massage.nom}>
                            {massage.nom}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors resize-none"
                        placeholder="Décrivez vos besoins, vos attentes ou posez vos questions..."
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-[#398195] hover:bg-[#2d6b7a] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Informations pratiques */}
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
                      <a
                        href="mailto:desrousseaux.blandine@outlook.fr"
                        className="text-[#398195] hover:underline"
                      >
                        desrousseaux.blandine@outlook.fr
                      </a>
                    </p>
                    <p className="text-gray-700 mt-4">
                      <strong>Téléphone :</strong>
                      <br />
                      <a
                        href="tel:0769612946"
                        className="text-[#398195] hover:underline"
                      >
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
                      <strong>Secteur :</strong> Portes-lès-Valence + 30 km
                      autour
                    </p>
                    <p className="text-gray-700">
                      <strong>Déplacement :</strong> Gratuit dans la zone
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#398195]">
                      Modalités de paiement
                    </CardTitle>
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
        {showBackToTop && (
          <button
            onClick={scrollToTop}
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
        )}
      </section>

      {/* Footer / Mentions légales */}
      <footer className="bg-[#398195] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            {/* Bloc 1 : Présentation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Âme au Corps</h3>
              <p className="text-white/90 leading-relaxed">
                Praticienne certifiée en massages bien-être à Portes-lès-Valence
                et ses alentours, je vous accompagne avec bienveillance dans
                votre quête d’harmonie entre le corps et l’esprit.
              </p>
            </div>

            {/* Bloc 2 : Coordonnées */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="text-white/90 space-y-2 text-sm">
                <li>
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:desrousseaux.blandine@outlook.fr"
                    className="text-white hover:text-gray-200 underline underline-offset-2"
                  >
                    desrousseaux.blandine@outlook.fr
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href="tel:0769612946"
                    className="text-white hover:text-gray-200 underline underline-offset-2"
                  >
                    07 69 61 29 46
                  </a>
                </li>
                <li>
                  <strong>Zone :</strong> Portes-lès-Valence + 30 km
                </li>
              </ul>
            </div>

            {/* Bloc 3 : Légal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Informations légales
              </h4>
              <ul className="text-white/90 text-sm space-y-2">
                <li>
                  <strong>Praticienne :</strong> Blandine Desrousseaux
                </li>
                <li>
                  <strong>Activité :</strong> Massages bien-être (non médicaux)
                </li>
                <li>
                  <a
                    href="/mentions-legales"
                    className="text-white hover:text-gray-200 underline underline-offset-2"
                  >
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a
                    href="/politique-de-confidentialite"
                    className="text-white hover:text-gray-200 underline underline-offset-2"
                  >
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
            © {new Date().getFullYear()} Âme au Corps — Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
