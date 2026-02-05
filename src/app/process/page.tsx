"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { Ear, BookOpen, PenTool, MessageSquare, Users, BarChart3, Quote } from "lucide-react"
import { Header } from "@/components/layout/Header"
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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-dunn-purple/5 via-transparent to-dunn-purple/3" />
          <div className="absolute top-1/3 -left-32 w-64 h-64 bg-dunn-purple/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-32 w-64 h-64 bg-dunn-green/10 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Our <span className="text-dunn-purple">Process</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
              >
                The 6-Step <span className="font-semibold text-dunn-purple">Empathy-Driven Brand Building</span>&#8482; Process
              </motion.p>

              {/* Visual indicator */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center gap-2"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="w-3 h-3 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-light opacity-60"
                    style={{ animationDelay: `${num * 0.1}s` }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

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
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-dunn-green/20 via-dunn-green-light/20 to-dunn-green/20 blur-2xl" />

              <div className="relative rounded-3xl border border-dunn-green/20 bg-gradient-to-br from-dunn-green/5 to-dunn-green-light/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to get started?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let us guide you through our empathy-driven process and discover how we can
                  help build a brand that truly connects with your audience.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-dunn-purple to-dunn-purple-dark shadow-lg shadow-dunn-purple/25 hover:shadow-xl hover:shadow-dunn-purple/30 transition-all duration-300"
                    >
                      Start a Conversation
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-foreground border border-border bg-card/50 hover:bg-card hover:border-dunn-purple/30 transition-all duration-300"
                    >
                      See Our Work
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer spacer */}
        <div className="h-20" />
      </main>
    </>
  )
}
