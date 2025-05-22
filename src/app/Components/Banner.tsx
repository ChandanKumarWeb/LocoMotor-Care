import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
interface BannerProps {
  pageName: string;
  pageNavigation1: string;
  pageNavigation2: string;
  src: string | StaticImageData;
  alt: string;

}
const Banner: React.FC<BannerProps> = ({ pageName, pageNavigation1, pageNavigation2, src, alt }) => {
  return (
<div
  className="relative w-full h-50 lg:h-96 flex items-center justify-center bg-cover bg-center"
>
  <Image
    src={src} alt={alt}
    fill
    className="h-full object-cover"
    style={{ filter: "brightness(0.5)" }}
  />
  {/* Stronger overlay for better contrast */}
  <div className="absolute inset-0 bg-black/40"></div>
  <motion.div
    className="w-full h-full text-center gap-0 lg:gap-2  lg:mt-4 mt-11 flex flex-col justify-center items-center"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1
      className="w-fit text-center text-2xl lg:text-6xl font-bold text-white  drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {pageName}
    </motion.h1>
      <motion.h1
      className="w-fit text-center text-lg lg:text-2xl font-bold text-white  drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {pageNavigation1} / {pageNavigation2}
    </motion.h1>
  </motion.div>
</div>
// ...existing code...
  );
};

export default Banner;