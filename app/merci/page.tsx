"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MerciPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center space-y-8">
        <CheckCircle className="w-16 h-16 text-[#398195] mx-auto" />

        <h1 className="text-4xl font-semibold text-[#398195]">
          Merci pour votre message !
        </h1>

        <p className="text-gray-700 text-lg">
          Je vous répondrai dans les plus brefs délais. En attendant, prenez soin de vous 💆‍♀️
        </p>

        <Button
          onClick={() => router.push("/")}
          className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-6 py-3 rounded-full shadow-lg transition-all"
        >
          Retour à l’accueil
        </Button>
      </div>
    </div>
  )
}
