"use client"
import { motion } from "framer-motion"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ExternalLink, ArrowUp } from "lucide-react"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
    services: [
      { name: "Physiotherapy", href: "/services/physiotherapy" },
      { name: "Home Visits", href: "/services/home-visits" },
      { name: "Telerehabilitation", href: "/services/telerehab" },
      { name: "Subscription Plans", href: "/services/plans" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "FAQ", href: "/faq" },
    ],
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-sky-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      color: "hover:text-red-600",
    },
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "+91 8875115254",
      href: "tel:+918875115254",
    },
    {
      icon: Mail,
      text: "vedamotioncare@gmail.com",
      href: "mailto:vedamotioncare@gmail.com",
    },
    {
      icon: MapPin,
      text: "Bomdila, West Kameng, Arunachal Pradesh",
      href: "#",
    },
  ]

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-6">
              <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                VedaMotion Care
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Where Every Move Heals. Providing compassionate physiotherapy care from the hills of Arunachal Pradesh to
              all of India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <item.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section - Mobile: 3 columns, Desktop: original layout */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">Company</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm flex items-center group"
                    >
                      <span className="truncate">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">Services</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm flex items-center group"
                    >
                      <span className="truncate">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">Support</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm flex items-center group"
                    >
                      <span className="truncate">{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Stay Updated:</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} VedaMotion Care Pvt Ltd. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              Developed with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                className="inline-block"
              >
                ❤️
              </motion.span>{" "}
              by{" "}
              <motion.a
                href="https://its-chandan-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400"
              >
                Chandan Kumar
              </motion.a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-300 rounded-full filter blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer
