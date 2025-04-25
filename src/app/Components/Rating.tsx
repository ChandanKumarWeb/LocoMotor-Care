import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Rating() {
  return (
    <div>
            {/* STAR RATING SECTION */}
            <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container my-4"
      >
        <div className="flex mt-4 h-auto w-full lg:w-48  justify-center gap-2 ">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{ color: "#FFD43B" }}
              />
            ))}
        </div>
        <div className="flex flex-col w-full lg:w-48 items-center">
          <p className="font-bold">4.8 average rating</p>
          <p>Based on 268 reviews</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Rating
