// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Âme au Corps – Massages bien-être",
  description: "Massages bien-être à Portes-lès-Valence avec Blandine Desrousseaux.",
  keywords: [
    "massage Portes-lès-Valence",
    "massage bien-être",
    "massage relaxant",
    "Blandine Desrousseaux",
    "massothérapeute Drôme",
  ],
  authors: [{ name: "Blandine Desrousseaux" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Âme au Corps – Massages bien-être",
    description: "Praticienne certifiée en massages bien-être à Portes-lès-Valence.",
    url: "https://ame-au-corps.vercel.app",
    siteName: "Âme au Corps",
    type: "website",
    images: [
      {
        url: "https://ame-au-corps.vercel.app/ame-au-corps-blanc.png",
        width: 1200,
        height: 630,
        alt: "Logo Âme au Corps",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Âme au Corps",
              "image": "https://ame-au-corps.vercel.app/ame-au-corps-blanc.png",
              "email": "desrousseaux.blandine@outlook.fr",
              "telephone": "07 69 61 29 46",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Portes-lès-Valence",
                "addressCountry": "FR"
              },
              "url": "https://ame-au-corps.vercel.app",
              "description": "Massages bien-être à Portes-lès-Valence et ses alentours. Réservez votre moment de détente avec Blandine Desrousseaux."
            }),
          }}
        />
      </body>
    </html>
  )
}
