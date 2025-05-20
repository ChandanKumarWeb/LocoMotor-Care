import React from "react";
import { motion } from "framer-motion";

interface BannerProps {
  pageName: string;
}
const Banner: React.FC<BannerProps> = ({ pageName }) => {
  return (
    <div>
      <div className="relative h-18 w-full"> </div>
      <motion.div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md items-center lg:max-w-[35vw] flex flex-col justify-center lg:items-start text-white mx-4 gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl lg:text-6xl font-bold text-[#404040] dark:text-white border-b-4 border-b-[#c7d2fe]" 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {pageName}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Banner;
