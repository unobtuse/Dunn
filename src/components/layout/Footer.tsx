"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { navigation, siteConfig } from "@/data/content"

const Footer = () => {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")
  const currentYear = new Date().getFullYear()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate newsletter signup - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setEmail("")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: siteConfig.social.facebook,
      icon: Facebook,
      label: "Follow us on Facebook",
    },
    {
      name: "Instagram",
      href: siteConfig.social.instagram,
      icon: Instagram,
      label: "Follow us on Instagram",
    },
    {
      name: "LinkedIn",
      href: siteConfig.social.linkedin,
      icon: Linkedin,
      label: "Connect with us on LinkedIn",
    },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={cn(
        "relative mt-auto",
        "glass border-t border-border"
      )}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About/Tagline */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
              aria-label={`${siteConfig.name} - Home`}
            >
              <Image
                src="/dunn-logo.svg"
                alt={siteConfig.name}
                width={180}
                height={24}
                className="h-8 w-auto"
              />
            </Link>

            {/* Tagline */}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline} {siteConfig.subTagline}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    "bg-dunn-purple/10 dark:bg-dunn-purple/20 text-dunn-purple dark:text-dunn-purple-light",
                    "hover:bg-dunn-purple hover:text-white dark:hover:bg-dunn-purple-light dark:hover:text-dunn-purple-dark",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-3">
                {navigation.footer.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-foreground",
                        "transition-colors inline-flex items-center gap-1 group",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                      )}
                    >
                      <span className="h-0.5 w-0 bg-dunn-green transition-all duration-300 group-hover:w-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className={cn(
                    "flex items-start gap-3 text-sm text-muted-foreground",
                    "hover:text-foreground transition-colors group",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  )}
                >
                  <Phone className="h-5 w-5 shrink-0 text-dunn-green" aria-hidden="true" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn(
                    "flex items-start gap-3 text-sm text-muted-foreground",
                    "hover:text-foreground transition-colors group",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  )}
                >
                  <Mail className="h-5 w-5 shrink-0 text-dunn-green" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-dunn-green" aria-hidden="true" />
                  <address className="not-italic">
                    {siteConfig.address}
                  </address>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-bold text-foreground">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for marketing insights and updates.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-4"
              aria-label="Newsletter signup form"
            >
              <div className="flex flex-col gap-3">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <GlassInput
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby="newsletter-status"
                  className="bg-background/50 dark:bg-background/30 text-foreground placeholder:text-muted-foreground"
                />
                <GlassButton
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Subscribe
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                </GlassButton>
              </div>

              {/* Status messages */}
              <div id="newsletter-status" aria-live="polite" className="mt-2">
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-dunn-green"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-destructive"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        variants={itemVariants}
        className="border-t border-border"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 text-center sm:text-right">
              Empathy-Driven Brand Building&trade;
            </p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export { Footer }
