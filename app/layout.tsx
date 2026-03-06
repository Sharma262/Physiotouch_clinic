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
  title: `${clinicConfig.name} | Best Physiotherapy in Sector 45 Gurugram`,
  description: `${clinicConfig.name} offers expert physiotherapy treatment in Gurugram. Specializing in back pain, joint pain, sports injuries & more. Book an appointment with ${clinicConfig.doctor.name} today.`,
  keywords: [
    "physiotherapy gurgaon",
    "physiotherapy gurugram",
    "physio sector 45 gurgaon",
    "back pain treatment gurgaon",
    "sports injury gurgaon",
    "physiotouch clinic",
    "Dr Kavita Sharma physiotherapist",
  ],
  openGraph: {
    title: `${clinicConfig.name} | Physiotherapy in Gurugram`,
    description: `Expert physiotherapy by ${clinicConfig.doctor.name}. Book your appointment today.`,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}