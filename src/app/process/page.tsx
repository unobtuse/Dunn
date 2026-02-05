"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { Ear, BookOpen, PenTool, MessageSquare, Users, BarChart3, Quote, ArrowRight } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import { Header } from "@/components/layout/Header"
import { PageHeader } from "@/components/layout/PageHeader"
import { processSteps } from "@/data/content"

// Step icons mapping
const stepIcons: Record<number, React.ReactNode> = {
  1: <Ear className="h-6 w-6" />,
  2: <BookOpen className="h-6 w-6" />,
  3: <PenTool className="h-6 w-6" />,
  4: <MessageSquare className="h-6 w-6" />,
  5: <Users className="h-6 w-6" />,
  6: <BarChart3 className="h-6 w-6" />,
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Timeline Step Component
function TimelineStep({
  step,
  index,
  isLast
}: {
  step: typeof processSteps[0]
  index: number
  isLast: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-6 md:gap-8"
    >
      {/* Timeline line and node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
          className="relative z-10"
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 rounded-full bg-dunn-purple/30 blur-md animate-pulse" />

          {/* Circle with number */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-dark border-4 border-background shadow-lg flex items-center justify-center">
            <span className="text-xl md:text-2xl font-serif font-bold text-white">
              {step.number}
            </span>
          </div>
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
            style={{ originY: 0 }}
            className="w-0.5 flex-1 min-h-[120px] bg-gradient-to-b from-dunn-purple via-dunn-purple/50 to-dunn-purple-light/30"
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        className="flex-1 pb-12 md:pb-16"
      >
        <div className="group relative">
          {/* Card glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-dunn-purple/20 to-dunn-purple-light/20 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

          <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-dunn-purple/30">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-dunn-purple/10 text-dunn-purple mb-4">
              {stepIcons[step.number] || <div className="w-6 h-6" />}
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProcessPage() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <PageHeader
          badge="Our Methodology"
          title="Our Process"
          titleAccent="Process"
          description="The 6-Step Empathy-Driven Brand Building™ Process that drives meaningful results for our clients."
        />

        {/* Process Timeline Section */}
        <section ref={containerRef} className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Progress indicator */}
            <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
              <div className="relative w-1 h-64 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-dunn-purple to-dunn-purple-light rounded-full"
                  style={{
                    height: "100%",
                    scaleY: smoothProgress,
                    transformOrigin: "top"
                  }}
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {processSteps.map((step, index) => (
                <TimelineStep
                  key={step.number}
                  step={step}
                  index={index}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Empathy Definition Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-dunn-purple/5 to-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-dunn-purple/10 via-transparent to-dunn-purple-light/10 blur-2xl" />

              <blockquote className="relative rounded-3xl border border-dunn-purple/20 bg-card/30 backdrop-blur-sm p-8 md:p-12 lg:p-16">
                {/* Quote icon */}
                <div className="absolute -top-6 left-8 md:left-12">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-dark flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Definition header */}
                <div className="mb-6">
                  <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dunn-purple italic">
                    empathy
                  </span>
                  <span className="ml-3 text-muted-foreground italic">
                    (n.)
                  </span>
                </div>

                {/* Definition text */}
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed">
                  Real progress cannot come without real understanding.
                </p>

                {/* Decorative line */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-dunn-purple/50 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-dunn-green" />
                  <div className="h-px flex-1 bg-gradient-to-l from-dunn-green/50 to-transparent" />
                </div>

                {/* Additional context */}
                <p className="mt-6 text-muted-foreground text-center">
                  With that understanding, we can make real progress to benefit us all.
                </p>
              </blockquote>
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
                Ready to get started?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  Let&apos;s begin.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
              >
                Let us guide you through our empathy-driven process and discover how we can
                build a brand that truly connects with your audience.
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

        {/* Footer spacer */}
        <div className="h-20" />
      </main>
    </>
  )
}
