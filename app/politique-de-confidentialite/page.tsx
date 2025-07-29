export default function PolitiqueDeConfidentialite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold text-[#398195] mb-8">
        Politique de confidentialité
      </h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            1. Données personnelles collectées
          </h2>
          <p>
            Ce site ne collecte pas de données personnelles automatiquement. Les seules données collectées sont celles que
            vous fournissez volontairement via le formulaire de contact : nom, email, téléphone, type de massage et
            message.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            2. Utilisation des données
          </h2>
          <p>
            Les informations que vous soumettez sont utilisées uniquement pour vous répondre et échanger dans le cadre d’une
            demande de rendez-vous ou d’informations. Elles ne sont en aucun cas vendues ou cédées à des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            3. Durée de conservation
          </h2>
          <p>
            Les données envoyées via le formulaire peuvent être conservées le temps nécessaire à l’échange ou à la relation
            commerciale. Vous pouvez à tout moment demander leur suppression.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            4. Sécurité
          </h2>
          <p>
            Les données sont transmises via un service sécurisé (FormSubmit) et ne sont pas stockées sur ce site. Aucun
            compte client ou espace personnel n’est utilisé.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            5. Vos droits
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez demander à consulter, modifier
            ou supprimer vos données personnelles à tout moment en envoyant un email à{" "}
            <a
              href="mailto:desrousseaux.blandine@outlook.fr"
              className="text-[#398195] hover:underline"
            >
              desrousseaux.blandine@outlook.fr
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-[#398195] mb-2">
            6. Cookies
          </h2>
          <p>
            Ce site ne dépose aucun cookie à des fins de suivi, d’analyse ou de publicité. Aucun outil de mesure d’audience
            tel que Google Analytics n’est utilisé.
          </p>
        </div>
      </section>

      <div className="mt-12 text-sm text-gray-500 italic">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </div>
    </div>
  )
}
