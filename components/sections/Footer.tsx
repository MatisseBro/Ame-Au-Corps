export function FooterSection() {
  return (
    <footer className="bg-[#398195] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Âme au Corps</h3>
            <p className="text-white/90 leading-relaxed">
              Praticienne certifiée en massages bien-être à Portes-lès-Valence et ses alentours, je vous accompagne avec
              bienveillance dans votre quête d&apos;harmonie entre le corps et l&apos;esprit.
            </p>
          </div>

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

          <div>
            <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
            <ul className="text-white/90 text-sm space-y-2">
              <li>
                <strong>Praticienne :</strong> Blandine Desrousseaux
              </li>
              <li>
                <strong>Activité :</strong> Massages bien-être (non médicaux)
              </li>
              <li>
                <a href="/mentions-legales" className="text-white hover:text-gray-200 underline underline-offset-2">
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
  )
}
