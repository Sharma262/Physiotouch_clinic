"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    if (!form.name || !form.phone) {
      setError("Name and phone number are required.");
      return;
    }
    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

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
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={24} />
        </button>

        {success ? (
          /* Success State */
          <div className="text-center py-8">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
            <h3 className="text-2xl font-black text-gray-800 mb-2">
              Appointment Requested!
            </h3>
            <p className="text-gray-500">
              We'll call you shortly to confirm your appointment.
            </p>
            <button
              onClick={handleClose}
              aria-label="Close booking modal"
              className="mt-6 bg-blue-700 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <h3 className="text-2xl font-black text-gray-800 mb-1">
              Book Appointment
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details and we'll call you to confirm.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-700 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number * (10 digits)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-700 transition-colors"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-700 transition-colors"
              />
              <textarea
                placeholder="Describe your problem (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-700 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-5 w-full bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Booking..." : "Confirm Appointment"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}