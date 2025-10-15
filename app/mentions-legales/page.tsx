export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold text-[#398195] mb-8">Mentions légales</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">Éditeur du site</h2>
          <p>
            <strong>Nom :</strong> Blandine Desrousseaux <br />
            <strong>Activité :</strong> Praticienne en massages bien-être (non thérapeutiques) <br />
            <strong>SIRET :</strong> 934189499 <br/>
            <strong>Email :</strong>{' '}
            <a
              href="mailto:desrousseaux.blandine@outlook.fr"
              className="text-[#398195] hover:underline"
            >
              desrousseaux.blandine@outlook.fr
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">Hébergement</h2>
          <p>
            <strong>Fournisseur :</strong> Vercel Inc. <br />
            <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA <br />
            <strong>Site :</strong>{' '}
            <a
              href="https://vercel.com"
              className="text-[#398195] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">Conditions d’utilisation</h2>
          <p>
            Le présent site a pour objet de fournir des informations sur les prestations de massage bien-être proposées
            par Blandine Desrousseaux. Les informations sont données à titre indicatif et peuvent évoluer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">Données personnelles</h2>
          <p>
            Aucune donnée personnelle n’est collectée sans votre consentement. Les données fournies via le formulaire
            de contact ne sont utilisées que dans le cadre de l’échange avec vous. Aucune information personnelle
            n’est vendue ou cédée à des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">Responsabilité</h2>
          <p>
            Les massages proposés sont des pratiques de bien-être et de relaxation. Ils ne remplacent en aucun cas un
            acte médical, thérapeutique ou kinésithérapeutique. Toute consultation ou traitement médical doit être
            effectué par un professionnel de santé.
          </p>
        </div>
      </section>

      <div className="mt-12 text-sm text-gray-500 italic">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </div>
    </div>
  )
}
