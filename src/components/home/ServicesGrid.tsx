"use client";

import { motion, type Variants } from "framer-motion";
import {
  Palette,
  Target,
  FileText,
  Globe,
  Megaphone,
  Users,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription } from "@/components/ui/glass-card";
import { services } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Target,
  FileText,
  Globe,
  Megaphone,
  Users,
  BarChart3,
  Briefcase,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesGrid() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to fuel your success
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div key={service.id} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  <GlassCard
                    className="h-full bg-card/80 dark:bg-card/40 border-border/50 hover:border-dunn-purple/40 transition-all duration-300 group cursor-pointer"
                    glowEffect={false}
                  >
                    <GlassCardHeader className="space-y-4">
                      {/* Icon */}
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-dunn-purple/10 to-dunn-purple-light/10 border border-dunn-purple/20 flex items-center justify-center group-hover:border-dunn-purple/40 group-hover:shadow-lg group-hover:shadow-dunn-purple/20 transition-all duration-300"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-dunn-purple group-hover:text-dunn-purple-light transition-colors duration-300" />
                        )}
                      </motion.div>

                      {/* Title */}
                      <GlassCardTitle className="text-foreground text-xl group-hover:text-dunn-purple transition-colors duration-300">
                        {service.title}
                      </GlassCardTitle>

                      {/* Description */}
                      <GlassCardDescription className="text-muted-foreground">
                        {service.description}
                      </GlassCardDescription>

                      {/* Service Items */}
                      <ul className="pt-2 space-y-1.5">
                        {service.items.slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground/80 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-dunn-green/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCardHeader>
                  </GlassCard>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
