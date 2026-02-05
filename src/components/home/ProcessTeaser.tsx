"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { processSteps } from "@/data/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const stepVariants: Variants = {
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

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

export function ProcessTeaser() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-muted/20 via-background to-muted/30 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven approach to building brands that connect
          </p>
        </motion.div>

        {/* Desktop Process (Horizontal) */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Connecting Line */}
            <motion.div
              variants={lineVariants}
              className="absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-dunn-purple via-dunn-green to-dunn-purple origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number Circle */}
                  <motion.div
                    className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-dark flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-dunn-purple/50 blur-xl opacity-50" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Process (Vertical) */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Vertical Connecting Line */}
            <motion.div
              variants={lineVariants}
              className="absolute top-0 bottom-0 left-10 w-0.5 bg-gradient-to-b from-dunn-purple via-dunn-green to-dunn-purple origin-top"
              style={{ scaleY: 1 }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {processSteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="flex items-start gap-6 pl-4"
                >
                  {/* Number Circle */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-dark flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/process">
            <GlassButton
              variant="outline"
              size="lg"
              className="border-dunn-purple/30 text-dunn-purple hover:bg-dunn-purple/10 hover:border-dunn-purple/50"
            >
              Learn More About Our Approach
              <ArrowRight className="w-4 h-4 ml-2" />
            </GlassButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
