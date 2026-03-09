import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});
export const metadata: Metadata = {
  title: "Physiotouch Clinic | Best Physiotherapy in Sector 45 Gurugram",
  description: "Physiotouch Clinic is the best physiotherapy clinic in Sector 45, Gurugram. Expert treatment by Dr. Kavita Sharma (P.T). Treating back pain, knee pain, sports injuries & more. Call: +91 95605 79893",
  keywords: [
    "physiotherapy gurgaon",
    "physiotherapist gurgaon",
    "physiotherapy gurugram",
    "best physiotherapy clinic gurugram",
    "physiotherapist sector 45 gurgaon",
    "back pain treatment gurugram",
    "knee pain physiotherapy gurgaon",
    "sports injury treatment gurgaon",
    "best physiotherapist gurgaon",
    "physiotouch clinic",
    "Dr Kavita Sharma physiotherapist",
    "physiotherapy near me gurgaon",
    "neck pain treatment gurugram",
    "frozen shoulder treatment gurgaon",
  ],
  authors: [{ name: "Dr. Kavita Sharma" }],
  creator: "Physiotouch Clinic",
  metadataBase: new URL("https://physiotouch-clinic.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Physiotouch Clinic | Physiotherapy in Sector 45 Gurugram",
    description: "Expert physiotherapy by Dr. Kavita Sharma. Book your appointment today.",
    type: "website",
    locale: "en_IN",
    url: "https://physiotouch-clinic.vercel.app",
    siteName: "Physiotouch Clinic",
  },

  verification: {
    google: "G3baTjAQi0-Bq59FVjoTp6yG5JB6aL2PYqmf2oBJrvU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Physiotouch Clinic",
    "description": "Expert physiotherapy clinic in Sector 45, Gurugram specializing in pain relief and rehabilitation",
    "url": "https://physiotouch-clinic.vercel.app",
    "telephone": "+919560579893",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House No. 973, Behind Community Centre, Near Delhi Public School, Block C",
      "addressLocality": "Sector 45, Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4449",
      "longitude": "77.0653"
    },
    "openingHours": "Mo-Sa 09:00-20:00",
    "medicalSpecialty": "Physiotherapy",
    "priceRange": "₹₹"
  };

  return (
    <html lang="en">
        <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
 