"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinicConfig } from "@/lib/config";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit number";
    return e;
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      }
    } catch {
      setErrors({ name: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <Phone size={16} />,
      label: "Phone",
      value: `${clinicConfig.contact.phoneDisplay}`,
      href: `tel:${clinicConfig.contact.phone}`,
    },
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: clinicConfig.contact.email,
      href: `mailto:${clinicConfig.contact.email}`,
    },
    {
      icon: <MapPin size={16} />,
      label: "Address",
      value: clinicConfig.contact.address,
      href: clinicConfig.contact.mapUrl,
    },
    {
      icon: <Clock size={16} />,
      label: "Timings",
      value: `${clinicConfig.timings.days} ${clinicConfig.timings.hours}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 relative overflow-hidden"
      style={{ background: "#f8f7ff" }}>

      {/* Dotted background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #2b1f5110 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Section heading */}
        <div className="mb-10">
          <span className="flex items-center gap-2 font-bold text-sm mb-2"
            style={{ color: "#2b1f51" }}>
            <span className="w-1 h-5 rounded-full" style={{ background: "#85c226" }} />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#2b1f51" }}>
            Contact Us
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Col 1 — Contact Info */}
          <div className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "#2b1f51" }}>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-5 rounded-full" style={{ background: "#85c226" }} />
                <h3 className="text-white font-black text-lg">Contact Information</h3>
              </div>
              <p className="text-xs ml-3" style={{ color: "#d4ccf0" }}>
                Fill the form or reach us directly
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#85c22625", border: "1px solid #85c22640", color: "#85c226" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "#85c226" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-white text-xs leading-snug hover:text-green-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-xs leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/91${clinicConfig.contact.phone.replace(/\s/g, "")}`}
              target="_blank"
              className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#85c226", color: "#2b1f51" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.564 4.14 1.544 5.872L0 24l6.335-1.52A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.72.893.938-3.617-.234-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Col 2 — Form */}
          <div className="rounded-2xl p-6 bg-white shadow-sm border"
            style={{ borderColor: "#e8e4f5" }}>
            <h3 className="font-black text-lg mb-5" style={{ color: "#2b1f51" }}>
              Send us a Message
            </h3>

            {success ? (
              <div className="flex flex-col items-center justify-center h-48 gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "#f0ffd6" }}>✅</div>
                <p className="font-black text-center" style={{ color: "#2b1f51" }}>
                  Message Sent!
                </p>
                <p className="text-gray-500 text-sm text-center">
                  We'll call you back shortly.
                </p>
                <button onClick={() => setSuccess(false)}
                  className="text-xs font-bold mt-2 cursor-pointer"
                  style={{ color: "#85c226" }}>
                  Send another →
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {[
                  { field: "name", placeholder: "Your Name *", type: "text" },
                  { field: "phone", placeholder: "Phone Number * (10 digits)", type: "tel" },
                  { field: "email", placeholder: "Email (optional)", type: "email" },
                ].map(({ field, placeholder, type }) => (
                  <div key={field}>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
                      style={{
                        borderColor: errors[field] ? "#ef4444" : "#e8e4f5",
                        background: errors[field] ? "#fef2f2" : "#f8f7ff",
                        color: "#2b1f51",
                      }}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{errors[field]}</p>
                    )}
                  </div>
                ))}

                <textarea
                  placeholder="Your message (optional)"
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none"
                  style={{ borderColor: "#e8e4f5", background: "#f8f7ff", color: "#2b1f51" }}
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 rounded-xl font-black text-sm transition-all hover:opacity-90 cursor-pointer disabled:opacity-60"
                  style={{ background: "#2b1f51", color: "#ffffff", border: "2px solid #85c226" }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </div>

          {/* Col 3 — Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border"
            style={{ borderColor: "#e8e4f5", minHeight: "400px" }}>
            <div className="p-4 flex items-center gap-2"
              style={{ background: "#2b1f51" }}>
              <MapPin size={16} color="#85c226" />
              <p className="text-white font-bold text-sm">Find Us</p>
              <a
                href={clinicConfig.contact.mapUrl}
                target="_blank"
                className="ml-auto text-xs font-bold hover:opacity-80 transition-opacity"
                style={{ color: "#85c226" }}
              >
                Open in Maps ↗
              </a>
            </div>
            <iframe
              src={clinicConfig.googleMapsEmbed}
              title="Physiotouch Clinic location on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}