"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react"
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { GlassTextarea } from "@/components/glass-textarea"
import { GlassBadge } from "@/components/ui/glass-badge"
import { GlassRippleButton } from "@/components/glass-ripple"
import { siteConfig, testimonials } from "@/data/content"

// Form field wrapper with label and error handling
interface FormFieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: React.ReactNode
}

function FormField({ label, htmlFor, required, error, children }: FormFieldProps) {
  const errorId = `${htmlFor}-error`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            id={errorId}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm text-red-500 flex items-center gap-1"
            role="alert"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Contact info item component
interface ContactInfoItemProps {
  icon: React.ElementType
  label: string
  value: string
  href?: string
  delay?: number
}

function ContactInfoItem({ icon: Icon, label, value, href, delay = 0 }: ContactInfoItemProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${href ? 'hover:bg-muted/50 cursor-pointer' : ''}`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dunn-purple/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-dunn-purple" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}

// Social link component
interface SocialLinkProps {
  href: string
  icon: React.ElementType
  label: string
  delay?: number
}

function SocialLink({ href, icon: Icon, label, delay = 0 }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-xl bg-dunn-purple/10 hover:bg-dunn-purple hover:text-white flex items-center justify-center transition-colors"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </motion.a>
  )
}

// Form state type
interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = React.useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")
  const formRef = React.useRef<HTMLFormElement>(null)
  const statusRef = React.useRef<HTMLDivElement>(null)

  // Featured testimonial
  const featuredTestimonial = testimonials[1] // Jim Zahansky testimonial

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Focus first field with error
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        element?.focus()
      }
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission (will connect to backend later)
    console.log("Form submitted:", formData)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Announce success to screen readers
      statusRef.current?.focus()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-dunn-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-dunn-green/10 rounded-full blur-3xl" />
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
                Get in Touch
              </GlassBadge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let&apos;s Talk
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We&apos;re always excited to meet new people and take on new adventures together.
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

      {/* Two-Column Layout: Form + Info */}
      <section className="py-16 md:py-24" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 md:p-10 bg-card/80">
                <GlassCardHeader className="p-0 mb-8">
                  <GlassCardTitle className="text-2xl md:text-3xl font-heading text-foreground">
                    <h2 id="contact-form-heading">Send Us a Message</h2>
                  </GlassCardTitle>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </GlassCardHeader>

                <GlassCardContent className="p-0">
                  {/* Status message (ARIA live region) */}
                  <div
                    ref={statusRef}
                    tabIndex={-1}
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                  >
                    {submitStatus === "success" && "Your message has been sent successfully. We will get back to you soon."}
                    {submitStatus === "error" && "There was an error sending your message. Please try again."}
                  </div>

                  <AnimatePresence mode="wait">
                    {submitStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                          <CheckCircle2 className="h-10 w-10 text-green-500" />
                        </motion.div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We&apos;ll be in touch soon.
                        </p>
                        <GlassButton
                          variant="outline"
                          onClick={() => setSubmitStatus("idle")}
                          className="border-dunn-purple/30 text-dunn-purple hover:bg-dunn-purple/10"
                        >
                          Send Another Message
                        </GlassButton>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                        noValidate
                      >
                        {/* Name Field */}
                        <FormField
                          label="Name"
                          htmlFor="name"
                          required
                          error={errors.name}
                        >
                          <GlassInput
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            aria-required="true"
                            aria-invalid={errors.name ? "true" : undefined}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-dunn-purple"
                            glowOnFocus={false}
                          />
                        </FormField>

                        {/* Email Field */}
                        <FormField
                          label="Email"
                          htmlFor="email"
                          required
                          error={errors.email}
                        >
                          <GlassInput
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            aria-required="true"
                            aria-invalid={errors.email ? "true" : undefined}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-dunn-purple"
                            glowOnFocus={false}
                          />
                        </FormField>

                        {/* Phone Field (Optional) */}
                        <FormField
                          label="Phone"
                          htmlFor="phone"
                        >
                          <GlassInput
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-dunn-purple"
                            glowOnFocus={false}
                          />
                        </FormField>

                        {/* Message Field */}
                        <FormField
                          label="Message"
                          htmlFor="message"
                          required
                          error={errors.message}
                        >
                          <GlassTextarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project or how we can help..."
                            rows={5}
                            required
                            aria-required="true"
                            aria-invalid={errors.message ? "true" : undefined}
                            aria-describedby={errors.message ? "message-error" : undefined}
                            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-dunn-purple min-h-[140px]"
                            glowOnFocus={false}
                          />
                        </FormField>

                        {/* Error state message */}
                        <AnimatePresence>
                          {submitStatus === "error" && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                              role="alert"
                            >
                              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                              <p className="text-sm text-red-600">
                                There was an error sending your message. Please try again.
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Submit Button with Ripple Effect */}
                        <motion.div
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                          <GlassRippleButton
                            type="submit"
                            disabled={isSubmitting}
                            variant="primary"
                            rippleColor="purple"
                            className="w-full bg-gradient-to-r from-dunn-purple to-dunn-purple-light hover:from-dunn-purple-light hover:to-dunn-purple text-white shadow-lg shadow-dunn-purple/25 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </GlassRippleButton>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </GlassCardContent>
              </GlassCard>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-2">
                  <ContactInfoItem
                    icon={Phone}
                    label="Phone"
                    value={siteConfig.phone}
                    href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                    delay={0}
                  />

                  <ContactInfoItem
                    icon={Mail}
                    label="Email"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                    delay={0.1}
                  />

                  <ContactInfoItem
                    icon={MapPin}
                    label="Address"
                    value={siteConfig.address}
                    delay={0.2}
                  />
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Follow Us
                </h3>

                <div className="flex gap-4">
                  <SocialLink
                    href={siteConfig.social.facebook}
                    icon={Facebook}
                    label="Follow us on Facebook"
                    delay={0}
                  />
                  <SocialLink
                    href={siteConfig.social.instagram}
                    icon={Instagram}
                    label="Follow us on Instagram"
                    delay={0.1}
                  />
                  <SocialLink
                    href={siteConfig.social.linkedin}
                    icon={Linkedin}
                    label="Connect with us on LinkedIn"
                    delay={0.2}
                  />
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Our Location
                </h3>

                <div className="relative h-64 rounded-2xl overflow-hidden border border-border">
                  {/* Map placeholder with gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dunn-purple/20 via-muted to-dunn-purple-light/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-dunn-purple/20 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-dunn-purple" />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {siteConfig.address.split(',')[0]}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {siteConfig.address.split(',').slice(1).join(',')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, var(--dunn-purple) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--dunn-purple) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-24 md:py-32 bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden"
        aria-labelledby="testimonial-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-dunn-purple/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-dunn-green/5 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 id="testimonial-heading" className="sr-only">Client Testimonial</h2>

            <GlassBadge variant="primary" className="mb-8">
              What Our Clients Say
            </GlassBadge>

            <GlassCard className="p-10 md:p-16 bg-card/80">
              {/* Quote mark */}
              <div className="mb-8">
                <svg
                  className="w-12 h-12 mx-auto text-dunn-purple/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-heading text-foreground leading-relaxed mb-8"
              >
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dunn-purple to-dunn-purple-light mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {featuredTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <p className="text-lg font-semibold text-foreground">
                  {featuredTestimonial.author}
                </p>
                <p className="text-muted-foreground">
                  {featuredTestimonial.title}
                </p>
                <p className="text-sm text-dunn-purple font-medium">
                  {featuredTestimonial.company}
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
