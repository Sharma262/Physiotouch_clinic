"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import BookingModal from "@/components/BookingModal";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideosSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <Header onBookClick={openModal} />
      <main>
        <Banner onBookClick={openModal} />
        <AboutSection />
        <ReviewsSection />
        <VideosSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      <BookingModal isOpen={modalOpen} onClose={closeModal} />
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919560579893"
        aria-label="Chat with Physiotouch Clinic on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.031 7.807L0 32l8.418-2.008A15.926 15.926 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.785-1.858l-.486-.29-5.007 1.194 1.232-4.88-.317-.502A13.226 13.226 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.357-1.162-2.722-1.295-.365-.133-.631-.199-.897.199-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.2-1.681-.619-3.202-1.973-1.183-1.054-1.982-2.356-2.214-2.754-.232-.398-.025-.613.175-.811.179-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.778-.653-.672-.897-.685-.232-.012-.498-.015-.764-.015s-.697.1-.1063.498c-.365.398-1.394 1.362-1.394 3.322s1.427 3.853 1.627 4.119c.199.266 2.808 4.286 6.802 6.012.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.357-.964 2.689-1.895.332-.93.332-1.728.232-1.895-.099-.166-.365-.266-.763-.465z" />
        </svg>
      </a>
    </>
  );
}
