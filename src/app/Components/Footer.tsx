import logo from "../../../public/Images/Logo.png";
import Image from "next/image";


function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                              <Image src={logo} alt="Logo" width={40} height={40} className="logo" />
                
              </div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">VedaMotion Care</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Where Every Move Heals. Providing compassionate physiotherapy care from the hills of Arunachal Pradesh to
              all of India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+918875115254"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-sm">+91 8875115254</span>
              </a>
              <a
                href="mailto:vedamotioncare@gmail.com"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm">vedamotioncare@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Section - Mobile: 3 columns, Desktop: original layout */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/physiotherapy"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Physiotherapy
                  </a>
                </li>
                <li>
                  <a
                    href="/services/home-visits"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Home Visits
                  </a>
                </li>
                <li>
                  <a
                    href="/services/telerehab"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Telerehabilitation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/plans"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Subscription Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/help" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm transition-colors duration-200">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-600 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Stay Updated:</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} VedaMotion Care Pvt Ltd. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-right">
              Developed with <span className="veda-heart inline-block text-red-500">❤️</span> by{" "}
              <a
                href="https://its-chandan-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Chandan Kumar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SimpleFooter

       