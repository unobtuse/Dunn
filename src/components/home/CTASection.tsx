"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 100%, var(--dunn-purple) 0%, transparent 60%),
            linear-gradient(to bottom, var(--background), var(--muted))
          `,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Ready to fuel your success?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Let&apos;s talk.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
          >
            Let&apos;s start a conversation about how Empathy-Driven Brand Building
            can transform your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <GlassButton
                size="lg"
                className={cn(
                  "bg-gradient-to-r from-primary to-primary/80",
                  "hover:from-primary/90 hover:to-primary/70",
                  "text-primary-foreground font-semibold",
                  "shadow-[0_4px_20px_var(--glow-primary)]",
                  "hover:shadow-[0_8px_30px_var(--glow-primary)]",
                  "transition-all duration-300"
                )}
                glowEffect
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </GlassButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
