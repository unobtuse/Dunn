"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassBadge } from "@/components/ui/glass-badge";
import { caseStudies } from "@/data/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturedWork() {
  const featuredCases = caseStudies.slice(0, 3);

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-background to-muted/20"
      aria-labelledby="work-heading"
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
            id="work-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real clients through strategic brand building
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredCases.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard
                  className="h-full bg-card/80 dark:bg-card/40 border-border/50 overflow-hidden group cursor-pointer"
                  glowEffect={false}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-dunn-purple/20 via-muted to-dunn-purple-light/20 overflow-hidden">
                    {/* Placeholder Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <pattern
                            id={`grid-${caseStudy.id}`}
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 10 0 L 0 0 0 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100"
                          height="100"
                          fill={`url(#grid-${caseStudy.id})`}
                        />
                      </svg>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-dunn-purple/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <span className="text-white font-medium flex items-center gap-2">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>

                    {/* Award Badge */}
                    {caseStudy.award && (
                      <div className="absolute top-4 right-4">
                        <GlassBadge className="bg-dunn-green/20 border-dunn-green/40 text-dunn-green-dark dark:text-dunn-green-light flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          {caseStudy.award}
                        </GlassBadge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Category */}
                    <span className="text-sm text-dunn-purple font-medium uppercase tracking-wide">
                      {caseStudy.category}
                    </span>

                    {/* Client */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-dunn-purple transition-colors duration-300">
                      {caseStudy.client}
                    </h3>

                    {/* Headline */}
                    <p className="text-muted-foreground">{caseStudy.headline}</p>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                      {caseStudy.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-dunn-purple">
                            {result.metric}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/work">
            <GlassButton
              variant="outline"
              size="lg"
              className="border-dunn-purple/30 text-dunn-purple hover:bg-dunn-purple/10 hover:border-dunn-purple/50"
            >
              View All Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </GlassButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
