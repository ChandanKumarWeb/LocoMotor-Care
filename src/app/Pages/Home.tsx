"use client";

import homebg from "../../../public/Images/homebg.jpeg";
import homeAbsImg from "../../../public/Images/homeAbsImg.jpeg";
import Image from "next/image";
import Appointmentbtn from "../Components/Appointmentbtn";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <div className="relative w-full h-[100vh]">
        {/* Background Image */}
        <Image
          src={homebg}
          alt="home background img"
          fill
          className="h-full"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text content */}
        <div className="absolute top-80 left-20">
          <div className="w-full flex flex-col lg:flex-row">
            {/* Text Section with animation */}
            <motion.div
              className="w-3/4 order-2 lg:order-1 flex flex-col justify-center text-white gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-2xl font-bold"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Reclaim Your Life from Pain
              </motion.h1>
              <motion.p
                className="text-sm max-w-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At Locomotor Care, we empower you to regain your mobility and
                strength. Experience personalized physiotherapy tailored to your
                journey towards pain-free living.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Appointmentbtn />
              </motion.div>
            </motion.div>

            {/* Image Section with animation */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <Image
                className="h-96"
                src={homeAbsImg}
                width={600}
                height={600}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex mt-4 h-auto w-48 items-center justify-center gap-2">
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />          
        </div>
        <div className="flex flex-col w-48 items-center">
          <p className="font-bold">4.8 average rating</p>
          <p>Based on 268 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
