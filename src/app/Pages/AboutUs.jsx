"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  Users,
  Target,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  UserPlus,
  Briefcase,
  Globe,
} from "lucide-react";
import { CustomAccordion } from "../Components/CustomAccordion";

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  );
}

// Hero Section with Parallax
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

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
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent mb-6">
            VedaMotion Care
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Healing Journey
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
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
  );
}

// Our Essence Section
function EssenceSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <motion.div whileHover={{ scale: 1.1 }} className="inline-block mb-6">
            <Heart className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Our Essence
          </h2>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              At VedaMotion Care, we believe that healing begins with
              motion—gentle, guided, purposeful motion. Rooted in the ancient
              wisdom of Veda and powered by modern physiotherapy techniques, we
              are more than just a physical therapy space.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are your partners in recovery, renewal, and resilience. Our
              journey began in the serene hills of Bomdila, West Kameng,
              Arunachal Pradesh with a simple idea: to create a place where
              people feel cared for, not just treated.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 shadow-xl">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Born in Bomdila
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From the peaceful hills of Arunachal Pradesh to serving all of
                India
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Vision & Mission Section
function VisionMissionSection() {
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true });
  const missionInView = useInView(missionRef, { once: true });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              visionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Target className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To build a nationwide healing network: effective, affordable,
              empathetic physiotherapy for every Indian. We aim to be a trusted
              household name in India, trusted for its natural philosophy,
              advanced techniques, and heart-led service.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-green-600" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Redefine physiotherapy: holistic, bridging rural-urban healthcare
              gaps. We empower people through movement, in body, spirit, life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const features = [
    {
      icon: Heart,
      title: "Personalized Healing",
      description: "Tailored plans to fit your life",
    },
    {
      icon: Users,
      title: "Holistic Approach",
      description: "Manual therapy, modern tools, mind-body practices",
    },
    {
      icon: Star,
      title: "Expert & Empathetic",
      description: "Skilled team, caring hearts",
    },
    {
      icon: CheckCircle,
      title: "Pain-Free Techniques",
      description: "Gentle, effective strategies",
    },
    {
      icon: Sparkles,
      title: "Calming Environment",
      description: "Safe, seen, supported",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Why Choose VedaMotion Care?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg text-center h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  <feature.icon className="w-12 h-12 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Partner & Career Section
function PartnerCareerSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join Our Movement
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you're a partner or looking for a career, we welcome you to
            be part of our healing mission
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Partner Section */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <Building className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Partner With Us
              </h3>
              <p className="text-blue-100 mb-6">
                Build a Healing Network, Together. Clinics, therapists,
                centers—join forces! Amplify care across India.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Affiliate Clinics",
                  "Home Visit Network",
                  "Specialist Partners",
                  "Tele-Physiotherapy",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                Become a Partner <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Career Section */}
          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <Briefcase className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Careers at VedaMotion Care
              </h3>
              <p className="text-blue-100 mb-6">
                Passion + Platform = Mission. Skilled hands, kind hearts,
                purposeful movement, welcome to VedaMotion Care!
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Physiotherapists",
                  "Clinical Assistants",
                  "Home Care Experts",
                  "Rehab Tech Innovators",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <UserPlus className="w-5 h-5 mr-3 text-green-300" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                Join Our Team <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <motion.div whileHover={{ scale: 1.1 }} className="inline-block mb-8">
            <Globe className="w-16 h-16 text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Make Every Move Matter
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Pan-India movement: care, community, clinical excellence. From
            Bomdila to Bengaluru, join our journey!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <motion.a
              href="mailto:vedamotioncare@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <Mail className="w-5 h-5 mr-3" />
              vedamotioncare@gmail.com
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-3" />
              Contact Us
            </motion.button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <p className="text-gray-400">Pan-India | Remote | On-field</p>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Main About Us Component
export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EssenceSection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <PartnerCareerSection />
      <ContactSection />
      <motion.div
        className="heading text-center my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions (FAQ)
      </motion.div>
      <CustomAccordion />
    </div>
  );
}
