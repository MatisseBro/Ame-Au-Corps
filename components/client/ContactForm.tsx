"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Massage = {
  nom: string
  duree: string
  prix: string
  type: string
  description: string
  effets: string
}

export function ContactForm({ massages }: { massages: Massage[] }) {
  const [errors, setErrors] = useState({ nom: "", telephone: "" })

  const validateNom = (value: string) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, nom: "" }))
      return
    }
    const isValid = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/.test(value.trim())
    setErrors((prev) => ({
      ...prev,
      nom: isValid ? "" : "Merci d'entrer uniquement des lettres (pas de chiffres).",
    }))
  }

  const validateTelephone = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "")
    if (!value) {
      setErrors((prev) => ({ ...prev, telephone: "" }))
      return
    }
    const isValid = digitsOnly.length === 10
    setErrors((prev) => ({
      ...prev,
      telephone: isValid ? "" : "Merci d'entrer uniquement des chiffres (format 07 69 61 29 46).",
    }))
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-[#398195]">Envoyez-moi un message</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action="https://formsubmit.co/desrousseaux.blandine@outlook.fr"
          method="POST"
          className="space-y-6"
        >
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ameaucorps.fr/merci" />

          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom et prénom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$"
              title="Veuillez entrer uniquement des lettres (pas de chiffres)"
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Merci d'entrer uniquement des lettres (pas de chiffres).")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              onBlur={(e) => validateNom(e.currentTarget.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
            />
            {errors.nom && <p className="text-sm text-red-600 mt-1">{errors.nom}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
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
                const input = e.currentTarget
                let value = input.value.replace(/\D/g, "").slice(0, 10)
                value = value.replace(/(\d{2})(?=\d)/g, "$1 ").trim()
                input.value = value
                input.setCustomValidity("")
                validateTelephone(input.value)
              }}
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Merci d'entrer uniquement des chiffres (format 07 69 61 29 46).")
              }
              onBlur={(e) => validateTelephone(e.currentTarget.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-[#398195] focus:border-transparent transition-colors"
            />
            {errors.telephone && <p className="text-sm text-red-600 mt-1">{errors.telephone}</p>}
          </div>

          <div>
            <label htmlFor="typeMassage" className="block text-sm font-medium text-gray-700 mb-2">
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

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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

          <Button
            type="submit"
            className="w-full bg-[#398195] hover:bg-[#2d6b7a] text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Envoyer le message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
