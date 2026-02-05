"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Award, TrendingUp, Users, Target, BarChart3 } from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardHeader } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassBadge } from "@/components/ui/glass-badge"
import { caseStudies, siteConfig } from "@/data/content"

// Animated counter component for metrics
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const displayValue = useTransform(springValue, (latest) => Math.round(latest))

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplay(latest)
    })
    return () => unsubscribe()
  }, [displayValue])

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  )
}

// Case study card component
function CaseStudyCard({
  study,
  index
}: {
  study: typeof caseStudies[0]
  index: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group"
    >
      <div
        className="relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GlassCard
          className="h-full overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          glowEffect={isHovered}
        >
          {/* Image placeholder with gradient */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dunn-purple via-dunn-purple-dark to-dunn-purple-light opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--dunn-green)_0%,_transparent_60%)] opacity-20" />

            {/* Award badge */}
            {study.award && (
              <motion.div
                className="absolute top-4 right-4 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <GlassBadge
                  variant="warning"
                  className="flex items-center gap-1.5 bg-amber-500/30 border-amber-400/50"
                >
                  <Award className="h-3 w-3" />
                  {study.award}
                </GlassBadge>
              </motion.div>
            )}

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-dunn-purple/80 backdrop-blur-sm flex items-center justify-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center gap-2 text-white font-medium"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-4 z-20">
              <GlassBadge variant="primary" className="bg-white/20">
                {study.category}
              </GlassBadge>
            </div>
          </div>

          <GlassCardHeader className="pb-2">
            <p className="text-sm font-medium text-dunn-green">{study.client}</p>
            <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-dunn-purple transition-colors">
              {study.headline}
            </h3>
          </GlassCardHeader>

          <GlassCardContent>
            {/* Results metrics */}
            <div className="grid grid-cols-2 gap-3">
              {study.results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="p-3 rounded-lg bg-muted/50 border border-border/50"
                >
                  <p className="text-2xl font-bold text-dunn-purple">{result.metric}</p>
                  <p className="text-xs text-muted-foreground">{result.label}</p>
                </motion.div>
              ))}
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </motion.div>
  )
}

// Results metrics data
const aggregateResults = [
  {
    icon: TrendingUp,
    value: 75,
    suffix: "%",
    label: "Average increase in brand awareness",
    description: "Measured across all client campaigns"
  },
  {
    icon: BarChart3,
    value: 200,
    suffix: "%",
    label: "ROI on campaigns",
    description: "Return on marketing investment"
  },
  {
    icon: Users,
    value: 500,
    suffix: "%",
    label: "Participation rate increase",
    description: "Community engagement growth"
  },
  {
    icon: Target,
    value: 73,
    suffix: "%",
    label: "Enrollment increase",
    description: "Lead generation improvement"
  },
]

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-dunn-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dunn-green/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GlassBadge variant="primary" className="mb-6">
                Portfolio
              </GlassBadge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Our Work
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Results that prove the power of empathy in action
            </p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-dunn-purple to-dunn-purple-light mx-auto mt-8 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="case-studies-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how we have helped organizations connect with their audiences and achieve measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Highlight Section */}
      <section
        className="py-24 md:py-32 bg-gradient-to-br from-dunn-purple to-dunn-purple-dark relative overflow-hidden"
        aria-labelledby="results-heading"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <GlassBadge variant="default" className="mb-6 bg-white/10 border-white/20 text-white">
              Results
            </GlassBadge>
            <h2 id="results-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Proven Impact Across Every Campaign
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our Empathy-Driven Brand Building approach consistently delivers measurable results
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aggregateResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <GlassCard
                  className="text-center p-8 h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                  glowEffect={false}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 mx-auto mb-6 rounded-xl bg-dunn-green/20 flex items-center justify-center"
                  >
                    <result.icon className="h-7 w-7 text-dunn-green" />
                  </motion.div>

                  <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                    <AnimatedCounter value={result.value} suffix={result.suffix} />
                  </p>

                  <p className="text-white font-medium mb-2">{result.label}</p>
                  <p className="text-sm text-white/60">{result.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-dunn-purple/5 to-dunn-purple-light/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <GlassCard className="p-10 md:p-16 bg-card/80">
              <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Ready to see results like these?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Let us show you how Empathy-Driven Brand Building can transform your marketing and grow your business.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact">
                  <GlassButton
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-dunn-purple to-dunn-purple-light hover:from-dunn-purple-light hover:to-dunn-purple text-white px-10 py-6 text-lg shadow-lg shadow-dunn-purple/25"
                    glowEffect
                  >
                    Start a Conversation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </GlassButton>
                </Link>
              </motion.div>

              {/* Contact info */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Or reach out directly</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                    className="text-dunn-purple hover:text-dunn-purple-light transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="hidden sm:inline text-border">|</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-dunn-purple hover:text-dunn-purple-light transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
