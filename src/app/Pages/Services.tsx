import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import ServiceBanner from "../../../public/Images/Banner Images/ServiceBanner.jpg";
import ServiceCard from "@/app/Components/ServicesCard";
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
      title: "Orthopedic",
      img: "/Images/leftImgSectionImage/3rdImg.jpeg",
      price: "2023"
    },
    {
      title: "Neuro Rehab",
      img: "/Images/leftImgSectionImage/3rdImg.jpeg",
      price: "2024"
    }
  ]}
/>
    </div>
  );
}

export default Services;
  