"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { GlassButton } from "@/components/ui/glass-button";
import { siteConfig } from "@/data/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const words = siteConfig.tagline.split(" ");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        {/* Primary gradient blob */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, var(--dunn-purple) 0%, var(--dunn-purple-light) 100%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        {/* Secondary gradient blob */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: "linear-gradient(135deg, var(--dunn-green) 0%, var(--dunn-green-light) 100%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        {/* Tertiary accent blob */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "linear-gradient(135deg, var(--dunn-purple-light) 0%, var(--dunn-green) 100%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-xl bg-dunn-purple/10 border border-dunn-purple/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 rounded-full bg-dunn-green/10 border border-dunn-green/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 rounded-2xl bg-dunn-purple/5 border border-dunn-purple/10"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-10 h-10 rounded-lg bg-dunn-green/15 border border-dunn-green/25"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-20 w-8 h-8 rounded-full bg-dunn-purple/20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 0.5,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading with Word-by-Word Animation */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle with Fade Up */}
          <motion.p
            variants={wordVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            {siteConfig.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link href="/work">
              <GlassButton
                variant="outline"
                size="lg"
                className="min-w-[180px] border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
              >
                See Our Work
              </GlassButton>
            </Link>
            <Link href="/contact">
              <GlassButton
                size="lg"
                className="min-w-[180px] bg-gradient-to-r from-dunn-purple to-dunn-purple-light text-white border-dunn-purple-light/30 hover:shadow-lg hover:shadow-dunn-purple/30"
                glowEffect
              >
                Let&apos;s Talk
              </GlassButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-dunn-purple"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
