"use client"

import type React from "react"
import Modal from "@/app/Components/ModalProps";

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Users,
  Heart,
  Send,
  CheckCircle,
  Star,
  Globe,
  MessageSquare,
} from "lucide-react"
import AppointmentForm from "@/app/Components/AppointmentForm";

// Animated Section Component
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hero Section with Parallax
function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <MessageCircle className="w-20 h-20 text-blue-600 mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Contact VedaMotion Care
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light"
          >
            Where Every Move Heals
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
        >
          At VedaMotion Care, we believe healing begins with connection. Whether you&#39;re looking to book a home visit,
          schedule a tele-rehab session, or simply want to ask a question, we&#39;re just a call or message away.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Location Section
function LocationSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <MapPin className="w-16 h-16 text-green-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Serving You from Bomdila, West Kameng
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Arunachal Pradesh</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 text-center shadow-lg"
            >
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Telerehabilitation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently offering telerehabilitation services across local areas
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 text-center shadow-lg"
            >
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Home Visits</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Home physiotherapy visits across local areas with personalized care
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 text-center shadow-lg"
            >
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clinic setup coming soon, expanding across rural and urban India
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Contact Methods Section
function ContactMethodsSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call or WhatsApp Us",
      content: "+91 8875115254",
      subtitle: "Available Monday to Saturday, 9:00 AM to 7:00 PM",
      color: "green",
      action: "tel:+918875115254",
    },
    {
      icon: Mail,
      title: "Email Us Anytime",
      content: "vedamotioncare@gmail.com",
      subtitle: "Whether it's questions, feedback, or future collaborations, we'd love to hear from you.",
      color: "blue",
      action: "mailto:vedamotioncare@gmail.com",
    },
    {
      icon: Calendar,
      title: "Book a Session Online",
      content: "Schedule Your Session",
      subtitle: "Prefer convenience? Fill out our online form to schedule your tele-rehab or home visit session.",
      color: "purple",
      modal: true,
    },
  ]
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Choose your preferred way to connect with us</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              {method.modal ? (
                <motion.button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6"
                  >
                    <method.icon
                      className={`w-12 h-12 ${
                        method.color === "green"
                          ? "text-green-600"
                          : method.color === "blue"
                            ? "text-blue-600"
                            : "text-purple-600"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{method.title}</h3>
                  <p
                    className={`text-xl font-semibold mb-4 ${
                      method.color === "green"
                        ? "text-green-600"
                        : method.color === "blue"
                          ? "text-blue-600"
                          : "text-purple-600"
                    }`}
                  >
                    {method.content}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{method.subtitle}</p>
                </motion.button>
              ) : (
                <motion.a
                  href={method.action}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6"
                  >
                    <method.icon
                      className={`w-12 h-12 ${
                        method.color === "green"
                          ? "text-green-600"
                          : method.color === "blue"
                            ? "text-blue-600"
                            : "text-purple-600"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{method.title}</h3>
                  <p
                    className={`text-xl font-semibold mb-4 ${
                      method.color === "green"
                        ? "text-green-600"
                        : method.color === "blue"
                          ? "text-blue-600"
                          : "text-purple-600"
                    }`}
                  >
                    {method.content}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{method.subtitle}</p>
                </motion.a>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
              <AppointmentForm />
            </Modal>
    </section>
  )
}

// Contact Form Section
function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    preferredResponse: "email",
    agreeToPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        preferredResponse: "email",
        agreeToPolicy: false,
      })
    }, 3000)
  }

  return (
    <section id="contact-form" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <motion.div whileHover={{ scale: 1.1 }} className="inline-block mb-6">
            <MessageSquare className="w-16 h-16 text-blue-600 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Tell Us How We Can Help</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your health story matters. Drop us a message, and we&#39;ll respond within 24 hours.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-6"
                >
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. We&#39;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Full Name */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                {/* Message */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                {/* Preferred Response */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Mode of Response
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["email", "call", "whatsapp"].map((option) => (
                      <motion.label
                        key={option}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="preferredResponse"
                          value={option}
                          checked={formData.preferredResponse === option}
                          onChange={(e) => handleInputChange("preferredResponse", e.target.value)}
                          className="mr-2 text-blue-600"
                        />
                        <span className="text-gray-700 dark:text-gray-300 capitalize">{option}</span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* Privacy Policy */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start"
                >
                  <motion.input
                    whileHover={{ scale: 1.1 }}
                    type="checkbox"
                    checked={formData.agreeToPolicy}
                    onChange={(e) => handleInputChange("agreeToPolicy", e.target.checked)}
                    required
                    className="mt-1 mr-3 text-blue-600"
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to VedaMotion Care&#39;s privacy policy. *
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center mx-auto ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            )}
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Join Network Section
function JoinNetworkSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <Users className="w-16 h-16 text-white mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Join Our Healing Network</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Are you a physiotherapist or wellness professional? Let&#39;s empower India together with accessible care.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Users className="w-6 h-6 mr-3" />
            Join the VedaMotion Network Today!
          </motion.button>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <p className="text-blue-100 mt-8">
            We&#39;re working behind the scenes on our digital platforms. Till then, reach us directly via email, WhatsApp,
            or our contact form.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Contact Us Component
export default function ContactUs() {

  return (
    <div className="min-h-screen">
      <HeroSection />
      <LocationSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <JoinNetworkSection />
      
    </div>
  )
}
