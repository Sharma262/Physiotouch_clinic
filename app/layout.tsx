import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { clinicConfig } from "@/lib/config";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Physiotouch Clinic | Best Physiotherapy in Sector 45 Gurugram",
  description: "Physiotouch Clinic offers expert physiotherapy in Sector 45, Gurugram by Dr. Kavita Sharma (BPT, MPT). Treating back pain, knee pain, sports injuries & more. Book appointment: +91 83072 10468",
  keywords: [
    "physiotherapy gurgaon",
    "physiotherapy gurugram",
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
    "telephone": "+918307210468",
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
      "latitude": "28.4",
      "longitude": "77.0"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
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