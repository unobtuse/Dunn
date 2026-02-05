"use client";

import { motion } from "framer-motion";
import { GlassBadge } from "@/components/ui/glass-badge";
import { clientLogos } from "@/data/content";

export function ClientLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="clients-heading"
            className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
          >
            Trusted By
          </h2>
          <p className="text-muted-foreground">
            Organizations we are proud to partner with
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * clientLogos.length],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <GlassBadge
                  size="lg"
                  className="bg-card/60 dark:bg-card/30 border-border/40 text-foreground px-6 py-3 text-base font-medium hover:border-dunn-purple/40 hover:bg-dunn-purple/5 transition-all duration-300 cursor-default"
                >
                  {logo}
                </GlassBadge>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Optional - scrolling opposite direction) */}
        <div className="relative mt-6">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6"
            animate={{
              x: [-50 * clientLogos.length, 0],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedLogos].reverse().map((logo, index) => (
              <motion.div
                key={`reverse-${logo}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <GlassBadge
                  size="lg"
                  className="bg-card/60 dark:bg-card/30 border-border/40 text-foreground px-6 py-3 text-base font-medium hover:border-dunn-green/40 hover:bg-dunn-green/5 transition-all duration-300 cursor-default"
                >
                  {logo}
                </GlassBadge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
