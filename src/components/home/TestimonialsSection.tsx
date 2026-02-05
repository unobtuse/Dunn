"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { testimonials } from "@/data/content";

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function TestimonialsSection() {
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-muted/30 via-background to-background"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from the good people we partner with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedTestimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard
                  className="h-full bg-card/80 dark:bg-card/40 border-border/50 hover:border-dunn-purple/30 transition-all duration-300"
                  glowEffect={false}
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Quote Icon */}
                    <motion.div
                      className="mb-6"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dunn-purple/20 to-dunn-purple-light/20 flex items-center justify-center">
                        <Quote className="w-6 h-6 text-dunn-purple" />
                      </div>
                    </motion.div>

                    {/* Quote Text */}
                    <blockquote className="flex-grow">
                      <p className="text-foreground leading-relaxed italic text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-4">
                        {/* Avatar Placeholder */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-light flex items-center justify-center text-white font-bold">
                          {testimonial.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <cite className="not-italic font-semibold text-foreground block">
                            {testimonial.author}
                          </cite>
                          <span className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </span>
                          <span className="text-sm text-dunn-purple block">
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
