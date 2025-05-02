import React from 'react'
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
interface LeftImgSectionProps {
    img: StaticImageData | string;
    head: string;
    heading: string;
    pera: string;
  }
  
  const LeftImgSection: React.FC<LeftImgSectionProps> = ({ img, head, heading, pera }) => {
  return (
    <div>
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
            src={img}
            alt="intro image"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center w-full lg:w-1/2">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
            {head}
          </h1>
          <p className="heading text-blue-900 dark:text-blue-100 md:text-base ">
            {heading}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {pera}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LeftImgSection
