"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Users, Heart, Lightbulb, Target, Puzzle, Handshake, Brain, Sparkles, ArrowRight } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import { Header } from "@/components/layout/Header"
import { PageHeader } from "@/components/layout/PageHeader"
import { TeamMemberModal, type TeamMember } from "@/components/about/TeamMemberModal"
import { team, values, awards } from "@/data/content"

// Value icons mapping
const valueIcons: Record<string, React.ReactNode> = {
  Empathy: <Heart className="h-6 w-6" />,
  Integrity: <Target className="h-6 w-6" />,
  Strategic: <Brain className="h-6 w-6" />,
  Curiosity: <Lightbulb className="h-6 w-6" />,
  Creative: <Sparkles className="h-6 w-6" />,
  Collaborative: <Puzzle className="h-6 w-6" />,
  Invested: <Handshake className="h-6 w-6" />,
  Insightful: <Users className="h-6 w-6" />,
  Authenticity: <Award className="h-6 w-6" />,
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

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <PageHeader
          badge="About Us"
          title="About Dunn Marketing"
          titleAccent="Dunn Marketing"
          description="Our mission is to fuel the success of organizations making a positive impact on society through world-class, empathy-driven brand building."
        />

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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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
                  <div
                    onClick={() => setSelectedMember(member as TeamMember)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        setSelectedMember(member as TeamMember)
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-transparent bg-card/30 transition-all duration-300 hover:border-dunn-purple/20 hover:bg-card/60 hover:shadow-lg hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-dunn-purple focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-dunn-purple/30 to-dunn-purple-light/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dunn-purple/20 overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 96px"
                        />
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
                Ready to work with us?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  Let&apos;s connect.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
              >
                Start a conversation about how we can help your organization thrive
                through empathy-driven brand building.
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
                    Get in Touch
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

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  )
}
