"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { siteConfig } from "@/data/content";

export function CTASection() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--dunn-purple) 0%, var(--dunn-purple-light) 100%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-15 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--dunn-green) 0%, var(--dunn-green-light) 100%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard
            className="bg-gradient-to-br from-card/90 via-card/80 to-muted/60 dark:from-card/50 dark:via-card/40 dark:to-muted/30 border-dunn-purple/20 hover:border-dunn-purple/40 transition-all duration-500"
            glowEffect
          >
            <div className="p-8 sm:p-12 text-center">
              {/* Heading */}
              <motion.h2
                id="cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to fuel your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dunn-purple to-dunn-purple-light">
                  success
                </span>
                ?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let&apos;s start a conversation about how Empathy-Driven Brand Building
                can transform your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact">
                  <GlassButton
                    size="lg"
                    className="min-w-[200px] bg-gradient-to-r from-dunn-purple to-dunn-purple-light text-white border-dunn-purple-light/30 hover:shadow-lg hover:shadow-dunn-purple/30"
                    glowEffect
                  >
                    Let&apos;s Talk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </GlassButton>
                </Link>
                <Link href="/services">
                  <GlassButton
                    variant="outline"
                    size="lg"
                    className="min-w-[200px] border-dunn-green/40 text-foreground hover:bg-dunn-green/10 hover:border-dunn-green/60"
                  >
                    Explore Services
                  </GlassButton>
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-dunn-purple transition-colors duration-300 group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-dunn-purple/10 flex items-center justify-center group-hover:bg-dunn-purple/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone className="w-4 h-4 text-dunn-purple" />
                  </motion.div>
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-dunn-purple transition-colors duration-300 group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-dunn-purple/10 flex items-center justify-center group-hover:bg-dunn-purple/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="w-4 h-4 text-dunn-purple" />
                  </motion.div>
                  <span>{siteConfig.email}</span>
                </a>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
