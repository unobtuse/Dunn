"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, Users, Heart, Lightbulb, Target, Puzzle, Handshake, Brain, Sparkles } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { team, values, awards } from "@/data/content"

// Value icons mapping
const valueIcons: Record<string, React.ReactNode> = {
  Empathy: <Heart className="h-6 w-6" />,
  Integrity: <Target className="h-6 w-6" />,
  Strategic: <Brain className="h-6 w-6" />,
  Curious: <Lightbulb className="h-6 w-6" />,
  Creative: <Sparkles className="h-6 w-6" />,
  Collaborative: <Puzzle className="h-6 w-6" />,
  Invested: <Handshake className="h-6 w-6" />,
  Insightful: <Users className="h-6 w-6" />,
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

// Get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-dunn-purple/5 via-transparent to-dunn-purple/3" />
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-dunn-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-dunn-green/10 rounded-full blur-3xl" />

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
                About <span className="text-dunn-purple">Dunn Marketing</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Our mission is to fuel the success of organizations making a positive impact
                on society through world-class, empathy-driven brand building.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-dunn-purple/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group h-full">
                    <div className="relative h-full">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-dunn-purple/20 to-dunn-purple-light/20 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                      <div className="relative h-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-dunn-purple/30">
                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-dunn-purple/10 text-dunn-purple">
                          {valueIcons[value.title] || <Heart className="h-6 w-6" />}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented people behind our empathy-driven approach
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={scaleIn}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-transparent bg-card/30 transition-all duration-300 hover:border-dunn-purple/20 hover:bg-card/60 hover:shadow-lg hover:scale-105">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-dunn-purple/30 to-dunn-purple-light/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dunn-purple/20 bg-gradient-to-br from-dunn-purple/10 to-dunn-purple-light/10 flex items-center justify-center overflow-hidden">
                        <span className="text-xl md:text-2xl font-serif font-bold text-dunn-purple">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>

                    {/* Credentials badge */}
                    {member.credentials && (
                      <span className="inline-block px-2 py-0.5 mb-2 text-xs font-medium text-dunn-purple bg-dunn-purple/10 rounded-full">
                        {member.credentials}
                      </span>
                    )}

                    {/* Title */}
                    <p className="text-sm text-muted-foreground">
                      {member.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-dunn-green/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our work has been recognized by industry leaders
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {awards.map((award, index) => (
                <motion.div
                  key={`${award.year}-${award.title}-${index}`}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-dunn-purple/20 via-dunn-purple-light/20 to-dunn-purple/20 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                    <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-dunn-green/30">
                      <div className="flex items-start gap-4">
                        {/* Award icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-dunn-green/20 to-dunn-green-light/20 flex items-center justify-center">
                          <Award className="h-6 w-6 text-dunn-green" />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Year badge */}
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dunn-purple/10 text-dunn-purple mb-2">
                            {award.year}
                          </div>

                          {/* Title */}
                          <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                            {award.title}
                          </h3>

                          {/* Description */}
                          {award.description && (
                            <p className="text-sm text-muted-foreground">
                              {award.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-dunn-purple/20 via-dunn-purple-light/20 to-dunn-purple/20 blur-2xl" />

              <div className="relative rounded-3xl border border-dunn-purple/20 bg-gradient-to-br from-dunn-purple/5 to-dunn-purple-light/5 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to work with us?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let&apos;s start a conversation about how we can help your organization thrive
                  through empathy-driven brand building.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-dunn-purple to-dunn-purple-dark shadow-lg shadow-dunn-purple/25 hover:shadow-xl hover:shadow-dunn-purple/30 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
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
