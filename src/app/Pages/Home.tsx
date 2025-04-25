"use client";
import "../Css/Home.css";
import Image from "next/image";
import Appointmentbtn from "../Components/Appointmentbtn";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import LeftImgSection from "../Components/LeftImgSection";
import RightImgSection from "../Components/RightImgSection";
import homebg from "../../../public/Images/homebg.jpeg";
import introImg from "../../../public/Images/introImg.jpeg";
function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <Image
            src={homebg}
            alt="home background img"
            fill
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="HomeBannerAbsContent absolute top-80 left-0 lg:top-80 px-0 lg:px-10">
            <div className="HomeBannerText w-full flex  gap-5">
              <motion.div
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[35vw] flex flex-col justify-end text-white gap-4"
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
                  strength. Experience personalized physiotherapy tailored to
                  your journey towards pain-free living.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Appointmentbtn btnName={"Book Appointment"} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <motion.div
        className="heading text-center my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Journey Towards Healing and Health</h1>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row justify-evenly items-center gap-6 my-8 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-[4/3]">
          <Image
            src={introImg}
            alt="intro image"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Founded by Dr. Yash Pratihasta, Locomotor Care aims to bring
            cutting-edge physiotherapy services to your doorstep. Our dedicated
            approach focuses on individual patient needs.
          </h1>
          <p className="text-sm md:text-base">
            We believe that recovery is possible for everyone. With a
            combination of expert knowledge and compassionate care, we support
            our patients every step of the way.
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#3267ff", paddingRight: "10px" }}
              />
              Personalized treatment plans for everyone
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#3267ff", paddingRight: "10px" }}
              />
              Experienced team dedicated to your recovery
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#3267ff", paddingRight: "10px" }}
              />
              Focus on improving quality of life
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="heading text-center my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Comprehensive Care Solutions</h1>
      </motion.div>
      <LeftImgSection
        img="/Images/leftImgSectionImage/1stImg.jpeg"
        head="01."
        heading="Orthopedic"
        pera="Our orthopedic physiotherapy services target musculoskeletal issues to alleviate pain and enhance function. We work with you to develop a personalized recovery plan."
      />

      <RightImgSection
        img="/Images/RightImgSectionImage/2ndImg.jpeg"
        head="02."
        heading="Sports Rehab"
        pera="Our sports injury rehab services are designed for athletes of all levels, focusing on rehabilitation and on-field management. We ensure you get back in the game safely and effectively."
      />

      <LeftImgSection
        img="/Images/leftImgSectionImage/3rdImg.jpeg"
        head="03."
        heading="Neuro Rehab"
        pera="Our neuro rehabilitation services aim to improve quality of life for individuals with neurological conditions. We focus on recovery through targeted interventions and compassionate support."
      />
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <Appointmentbtn btnName={"See More"} />
      </motion.div>
    </div>
  );
}

export default Home;
