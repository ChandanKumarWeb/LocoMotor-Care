import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CustomAccordion() {
  const [open, setOpen] = useState("");


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
      answer:
        "Please inform us at least 24 hours in advance. Late cancellations may be subject to a fee.",
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
      answer:
        "You have the right to access, correct, or request the deletion of your personal data by contacting us.",
    },
    {
      value: "item-10",
      question: "What happens if I violate the Terms & Conditions?",
      answer:
        "Violations, such as abusive behavior or misuse of services, may lead to termination of services.",
    },
    {
      value: "item-11",
      question: "How do I contact LocoMotor Care for further questions or support?",
      answer:
        "You can reach us at vedamotioncare@gmail.com. We're here to help!",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      value={open}
      onValueChange={setOpen}
      className="w-full"
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b last:border-b-0"
        >
          <AccordionTrigger className="text-lg font-semibold px-4 py-3 hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-gray-700 dark:text-gray-200">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}