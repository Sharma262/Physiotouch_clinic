"use client";

import { useState } from "react";
import { clinicConfig } from "@/lib/config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = async () => {
    setServerError("");
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setServerError(data.error || "Something went wrong.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1d4ed820 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="flex items-center justify-center gap-2 text-blue-700 font-bold text-sm mb-3">
            <span className="w-1 h-5 bg-blue-700 rounded-full inline-block" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Contact Us
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left — dark panel with dot pattern */}
            <div className="flex-1 bg-gray-900 p-10 relative overflow-hidden">
              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #ffffff18 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-7">
                <div>
                  <h3 className="text-white font-black text-2xl mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Fill the form or reach us directly
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <a
                      href={`tel:${clinicConfig.contact.phone}`}
                      className="text-white font-bold hover:text-yellow-300 transition-colors"
                    >
                      {clinicConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Email</p>
                    <a
                      href={`mailto:${clinicConfig.contact.email}`}
                      className="text-white font-bold hover:text-yellow-300 transition-colors"
                    >
                      {clinicConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Address</p>
                    <p className="text-white font-bold leading-relaxed text-sm">
                      {clinicConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Timings</p>
                    <p className="text-white font-bold">
                      {clinicConfig.timings.days}: {clinicConfig.timings.hours}
                    </p>
                    {/* <p className="text-gray-400 text-sm">
                      {clinicConfig.timings.sunday}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex-1 p-10 bg-white">
              {success ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500">
                    We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black text-gray-800 mb-8">
                    Send us a Message
                  </h3>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name)
                            setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-blue-700"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number * (10 digits)"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone)
                            setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-blue-700"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email)
                            setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50"
                            : "border-gray-200 focus:border-blue-700"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 ml-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <textarea
                      placeholder="Your message (optional)"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-700 transition-colors resize-none"
                    />
                  </div>

                  {serverError && (
                    <p className="text-red-500 text-sm mt-3">{serverError}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-5 w-full bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
