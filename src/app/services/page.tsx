"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Target,
  FileText,
  Globe,
  Megaphone,
  Users,
  BarChart3,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Award,
  Heart,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/content";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";

// Icon mapping for services
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

// Stats data
const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "100+", label: "Clients Served", icon: Heart },
  { value: "500%", label: "Avg. ROI Increase", icon: TrendingUp },
];

// Service Card Component
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[service.icon] || Palette;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div variants={cardHover} initial="rest" whileHover="hover">
        <GlassCard
          className={cn(
            "group cursor-pointer overflow-hidden transition-all duration-300",
            "hover:shadow-[0_8px_40px_var(--glow-primary)]",
            "bg-card/80 dark:bg-card/60"
          )}
          glowEffect={false}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
            aria-expanded={isExpanded}
            aria-controls={`service-content-${service.id}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Icon with glow effect */}
                <motion.div
                  className={cn(
                    "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl",
                    "bg-gradient-to-br from-primary/20 to-primary/10",
                    "border border-primary/20",
                    "transition-all duration-300",
                    "group-hover:shadow-[0_0_20px_var(--glow-primary)]"
                  )}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1"
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </div>

            {/* Expandable content */}
            <motion.div
              id={`service-content-${service.id}`}
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border/50">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  What we offer:
                </h4>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </button>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, var(--dunn-purple-light) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 100%, var(--dunn-green) 0%, transparent 40%),
              linear-gradient(to bottom, var(--background) 0%, var(--muted) 100%)
            `,
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              Full-Service Marketing Agency
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Marketing Services That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Drive Results
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We take an empathy-driven approach to every project, deeply understanding
              your audience to create marketing that truly connects, inspires, and converts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Dunn Marketing?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine strategic thinking with creative excellence to deliver
              measurable results that grow your business.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <GlassCard
                  className="text-center p-8 bg-card/60 dark:bg-card/40"
                  glowEffect={false}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4"
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <GlassCard className="p-8 lg:p-10 bg-card/70 dark:bg-card/50" glowEffect={false}>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">
                Empathy-Driven Brand Building
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Our proprietary approach puts your audience at the center of everything we do.
                We listen deeply, understand truly, and create marketing that resonates on a
                human level.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Deep audience research",
                  "Data-driven strategies",
                  "Award-winning creative",
                  "Measurable results",
                  "Transparent communication",
                  "Long-term partnerships",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Not sure where to start?
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
              Whether you need a complete marketing overhaul or help with a specific project,
              we&apos;re here to help you succeed.
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
    </main>
  );
}
