import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageScroller = () => {
  const images = [
    "images/IMG_20231016_005819.jpg",

    "images/IMG-20250927-WA0003.jpg",

    "images/IMG_20231016_005819.jpg",

    "images/IMG-20250927-WA0003.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full mt-[55px] md:mt-[70px] lg:mt-[68px] relative overflow-hidden rounded-b-2xl shadow-lg">
      <div className="relative w-full h-[230px] sm:h-[300px] md:h-[420px] lg:h-[520px] xl:h-[580px]">
        <AnimatePresence custom={direction}>
          {/* Background layer (blur + cover) */}
          <motion.img
            key={`bg-${current}`}
            src={images[current]}
            className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
            alt="background"
          />

          {/* Foreground main image (no crop, fully visible) */}
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 w-full h-full object-contain z-10"
            alt="main"
          />
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-110" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
