"use client";

import { motion } from "framer-motion";
import {
  HeroSection,
  ServicesGrid,
  FeaturedWork,
  ProcessTeaser,
  TestimonialsSection,
  ClientLogos,
  CTASection,
} from "@/components/home";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesGrid />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Process Teaser Section */}
        <ProcessTeaser />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Client Logos Marquee */}
        <ClientLogos />

        {/* CTA Section */}
        <CTASection />
      </main>
    </motion.div>
  );
}
