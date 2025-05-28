"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

// Individual Accordion Item Component
function AccordionItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1, // Stagger delay based on index
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className=" mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <motion.button
        className="flex justify-between items-center w-full text-left px-6 py-5 text-lg font-semibold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        onClick={toggleItem}
        whileTap={{ scale: 0.98 }}
        initial={{ backgroundColor: "rgba(255,255,255,0)" }}
        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
        transition={{ duration: 0.2 }}
      >
        <span className="pr-4">{item.question}</span>
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${item.value}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <motion.div
              className="px-6 pb-5 text-gray-700 dark:text-gray-200 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function CustomAccordion() {
  const items = [
    {
      value: "item-1",
      question: "What services does LocoMotor Care offer?",
      answer:
        "We provide in-clinic and home-based physiotherapy, tele-rehabilitation, exercise therapy, electrotherapy, manual therapy, and digital education materials.",
    },
    {
      value: "item-2",
      question: "How do I give consent for treatment?",
      answer:
        "Consent can be given verbally, in writing, or through digital acknowledgment before starting any therapy session, including tele-rehabilitation.",
    },
    {
      value: "item-3",
      question: "What if I need to cancel or reschedule an appointment?",
      answer: "Please inform us at least 24 hours in advance. Late cancellations may be subject to a fee.",
    },
    {
      value: "item-4",
      question: "How is my personal data protected?",
      answer:
        "We use industry-standard security measures to protect your data from unauthorized access, loss, or misuse. We do not share your data with third parties without your consent, except as required by law.",
    },
    {
      value: "item-5",
      question: "What communication channels do you use, and are they secure?",
      answer:
        "We use WhatsApp, SMS, email, and secure online platforms. While we encrypt communications where possible, we advise caution when sharing sensitive information online.",
    },
    {
      value: "item-6",
      question: "What if I have a complaint or concern about the service I received?",
      answer:
        "Please submit your complaint in writing with proof to our official contact point. We will acknowledge it within 3 business days and aim to resolve it within 15 business days.",
    },
    {
      value: "item-7",
      question: "Can I get a refund if I'm not satisfied with the service?",
      answer:
        "Refunds are considered on a case-by-case basis for valid reasons, excluding the cost of materials already used (e.g., tapes, needles).",
    },
    {
      value: "item-8",
      question: "What if I have a medical emergency during or after a session?",
      answer:
        "Our therapy services are not a substitute for emergency medical care. Please seek immediate professional help if you have a medical emergency.",
    },
    {
      value: "item-9",
      question: "What are my rights regarding my personal data?",
      answer: "You have the right to access, correct, or request the deletion of your personal data by contacting us.",
    },
    {
      value: "item-10",
      question: "What happens if I violate the Terms & Conditions?",
      answer: "Violations, such as abusive behavior or misuse of services, may lead to termination of services.",
    },
    {
      value: "item-11",
      question: "How do I contact LocoMotor Care for further questions or support?",
      answer: "You can reach us at vedamotioncare@gmail.com. We're here to help!",
    },
  ]

  return (
    <div className="w-full  mx-auto space-y-4 p-4">
      {items.map((item, index) => (
        <AccordionItem key={item.value} item={item} index={index} />
      ))}
    </div>
  )
}
