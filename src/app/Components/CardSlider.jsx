import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const CardSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Explore the majestic peaks and valleys of the Himalayas",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      link: "#"
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax on pristine beaches with crystal clear waters",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      link: "#"
    },
    {
      id: 3,
      title: "Urban Exploration",
      description: "Discover hidden gems in vibrant city landscapes",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      link: "#"
    },
    {
      id: 4,
      title: "Forest Retreat",
      description: "Find peace and tranquility in ancient woodland",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      link: "#"
    },
    {
      id: 5,
      title: "Desert Safari",
      description: "Experience the magic of endless sand dunes",
      imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      link: "#"
    }
  ];

const CARD_WIDTH = 300;
const GAP = 24; // gap-x-6 = 1.5rem = 24px

const scroll = (direction) => {
  if (sliderRef.current) {
    const scrollAmount = direction === "left" ? -(CARD_WIDTH + GAP) : (CARD_WIDTH + GAP);
    const newScrollPosition = sliderRef.current.scrollLeft + scrollAmount;
    if (newScrollPosition >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth && direction === "right") {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (newScrollPosition <= 0 && direction === "left") {
      sliderRef.current.scrollTo({ left: sliderRef.current.scrollWidth, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};

  // Animation variants for cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 60, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.25, duration: 0.7 }
    }
  };

  const Card = ({ title, description, imageUrl, link, index }) => (
    <motion.div
  className="min-w-[300px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 }}
    >
      <div className="relative h-1/2 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1609743522653-52354461eb27";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <button 
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => window.location.href = link}
        >
          Explore
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
      <div 
  className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-x-6 pl-3.5"
        ref={sliderRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, idx) => (
          <Card key={card.id} {...card} index={idx} />
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default CardSlider;