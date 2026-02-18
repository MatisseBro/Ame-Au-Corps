import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/merci" },
  title: "Merci | Âme au Corps",
}

export default function MerciPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center space-y-8">
        <CheckCircle className="w-16 h-16 text-[#398195] mx-auto" />

        <h1 className="text-4xl font-semibold text-[#398195]">
          Merci pour votre message !
        </h1>

        <p className="text-gray-700 text-lg">
          Je vous répondrai dans les plus brefs délais. En attendant, prenez soin de vous.
        </p>

        <Button asChild className="bg-[#398195] hover:bg-[#2d6b7a] text-white px-6 py-3 rounded-full shadow-lg transition-all">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>
    </div>
  )
}
