import { clinicConfig } from "@/lib/config";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ background: "#2b1f51" }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-white-bg.jpeg"
                alt="Physiotouch Clinic Logo"
                width={80}
                height={80}
                className="object-contain w-16 h-16 md:w-20 md:h-20 rounded-full"
                // brightness-0 invert makes it white for the dark footer
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert physiotherapy in Sector 45, Gurugram. Healing pain,
              restoring movement.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={clinicConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                style={{ background: "#3d2d6e" }}
              >
                <Instagram size={16} />
              </a>
              <a
                href={clinicConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                style={{ background: "#3d2d6e" }}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4
              className="font-black mb-5 pb-2 border-b"
              style={{ color: "#85c226", borderColor: "#3d2d6e" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={15} style={{ color: "#85c226" }} />
                <div>
                  <a
                    href={`tel:${clinicConfig.contact.phone}`}
                    className="text-sm hover:text-white transition-colors block"
                  >
                    {clinicConfig.contact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${clinicConfig.contact.phone2}`}
                    className="text-sm hover:text-white transition-colors block mt-0.5"
                  >
                    {clinicConfig.contact.phoneDisplay2}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} style={{ color: "#85c226" }} />
                <a
                  href={`mailto:${clinicConfig.contact.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {clinicConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#85c226" }}
                />
                <p className="text-sm leading-relaxed">
                  {clinicConfig.contact.address}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} style={{ color: "#85c226" }} />
                <div>
                  <p className="text-sm">
                    {clinicConfig.timings.days}: {clinicConfig.timings.hours}
                  </p>
                  {/* <p className="text-xs text-gray-500 mt-0.5">
                    {clinicConfig.timings.sunday}
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Conditions */}
          <div>
            <h4
              className="font-black mb-5 pb-2 border-b"
              style={{ color: "#85c226", borderColor: "#3d2d6e" }}
            >
              We Treat
            </h4>
            <ul className="space-y-2">
              {clinicConfig.conditions.map((condition) => (
                <li
                  key={condition}
                  className="text-sm text-gray-400 flex items-center gap-2"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#85c226" }}
                  />
                  {condition}
                </li>
              ))}
            </ul>
          </div>
          {/* Col 4 — Google Map */}
          <div>
            <h4
              className="font-black mb-5 pb-2 border-b"
              style={{ color: "#85c226", borderColor: "#3d2d6e" }}
            >
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden h-48 bg-gray-800">
              <iframe
                src={clinicConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {clinicConfig.name}. All rights
            reserved.
          </p>
          <p>
            Designed & Developed by <span className="text-blue-400">Nitin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
