"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Award, TrendingUp, Users, Target, BarChart3 } from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardHeader } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassBadge } from "@/components/ui/glass-badge"
import { PageHeader } from "@/components/layout/PageHeader"
import { siteConfig } from "@/data/content"
import { fetchCaseStudies, CaseStudy } from "@/lib/case-studies"

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

// Case study card component for WordPress case studies
function CaseStudyCard({
  study,
  index
}: {
  study: CaseStudy
  index: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  // Parse display title - remove project type prefix if present
  const displayTitle = study.title.includes("|")
    ? study.title.split("|").slice(1).join("|").trim()
    : study.title

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
      <Link href={`/work/${study.slug}`}>
        <div
          className="relative h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <GlassCard
            className="h-full overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
            glowEffect={isHovered}
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              {study.featuredImage ? (
                <>
                  <Image
                    src={study.featuredImage}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-dunn-purple via-dunn-purple-dark to-dunn-purple-light opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--dunn-green)_0%,_transparent_60%)] opacity-20" />
                </>
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

              {/* Project type badge */}
              {study.projectType && (
                <div className="absolute bottom-4 left-4 z-20">
                  <GlassBadge variant="primary" className="bg-white/20">
                    {study.projectType}
                  </GlassBadge>
                </div>
              )}
            </div>

            <GlassCardHeader className="pb-2">
              {study.client && (
                <p className="text-sm font-medium text-dunn-green">{study.client}</p>
              )}
              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-dunn-purple transition-colors">
                {displayTitle}
              </h3>
            </GlassCardHeader>

            <GlassCardContent>
              {/* Excerpt */}
              {study.excerpt && (
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {study.excerpt}
                </p>
              )}
              {/* Tags */}
              {study.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-dunn-purple/10 text-dunn-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </GlassCardContent>
          </GlassCard>
        </div>
      </Link>
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
  const [caseStudies, setCaseStudies] = React.useState<CaseStudy[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadCaseStudies() {
      const studies = await fetchCaseStudies()
      setCaseStudies(studies)
      setLoading(false)
    }
    loadCaseStudies()
  }, [])

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageHeader
        badge="Portfolio"
        title="Our Work"
        description="See the power of Empathy-Driven Brand Building in action"
      />

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

          {loading ? (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted/50 rounded-xl h-64 mb-4" />
                  <div className="h-4 bg-muted/50 rounded w-1/3 mb-2" />
                  <div className="h-6 bg-muted/50 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          )}
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
      <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="cta-heading">
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
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Ready to see results like these?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Let&apos;s make it happen.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
            >
              Let us show you how Empathy-Driven Brand Building can transform your marketing and grow your business.
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
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-[0_4px_20px_var(--glow-primary)] hover:shadow-[0_8px_30px_var(--glow-primary)] transition-all duration-300"
                  glowEffect
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GlassButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
