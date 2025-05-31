import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import ServiceBanner from "../../../public/Images/Banner Images/ServiceBanner.jpg";
import ServiceCard from "@/app/Components/ServicesCard";
import { CustomAccordion } from "@/app/Components/CustomAccordion";
function Services() {
  return (
    <div>
      <Banner
        pageName={"Services We Offer"}
        pageNavigation1="Home"
        pageNavigation2="Services"
        src={ServiceBanner}
        alt="Services Banner"
      />
      <motion.div
        className="heading text-center my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Comprehensive Care Solutions</h1>
      </motion.div>
      <ServiceCard
        services={[
          {
            title: "Musculoskeletal Physiotherapy",
            img: "/Images/leftImgSectionImage/1stImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Sports physiotherapy",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Ortho Rehabilitation",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Neuro Physiotherapy - Rehab",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Geriatric Physiotherapy",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Women's Health Physiotherapy",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Vestibular Rehabilitation (vr)",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
          {
            title: "Home Care Physiotherapy,",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "A chiropractic adjustment, also called spinal manipulation, is a procedure done by a chiropractor using the hands or small instruments to apply controlled force to a spinal joint. The goal is to improve spinal motion and the physical function of the entire body."
          },
        ]}
      />
      <motion.div
        className="heading text-center my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Specialized & Modern Approaches</h1>
      </motion.div>
      <ServiceCard
        services={[
          {
            title: "Manual Therapy",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "Pain-free mobilizations, manipulations, Spencer technique, GMI, MET, Mulligan, PRT, and ART."
          },
          {
            title: "Cupping Therapy",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "Myofascial release, deep tissue decompression, and improved circulation for musculoskeletal pain."
          },
          {
            title: "Strength & Conditioning Programs",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "Recovery-based strength training, muscle re-education, performance enhancement, eccentric/isometric loading."
          },
          {
            title: "Advanced Physiotherapy Techniques",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "IASTM, BFR (Blood Flow Restriction), electrotherapy, neurodynamics, needling & trigger point release."
          },
          {
            title: "Vestibular Rehabilitation (VR)",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "Balance disorders, vertigo, dizziness, and gaze stabilization training, to get body relief"
          },
          {
            title: "Workplace Ergonomics",
            img: "/Images/leftImgSectionImage/3rdImg.jpeg",
            defination: "Desk assessments, movement correction, and training to prevent occupational injuries."
          },
        ]}
      />
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

export default Services;
