import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Yr2425 = () => {
  const students = [
    {
      id: 1,
      name: "MD Tanvir Khan",
      college: "EX Gahira Aliya Madrasa",
      university: "University of Chittagong",
      image: "images/achivers/tanvir.png",
    },
    {
      id: 2,
      name: "MD Rakib Hasan Sajib",
      college: "Ex Hathazari Govt College",
      university: "University of Chittagong",
      image: "images/achivers/rakib.png",
    },
    {
      id: 3,
      name: "Abul Fayez Rejbi",
      college: "Ex Katirhat Mufidul Islami Fazil Madrasa",
      university: "University of Chittagong",
      image: "images/achivers/foyez.png",
    },
    {
      id: 4,
      name: "Ashpia Sultana",
      college: "Ex Hathazari Govt College",
      university: "University of Chittagong",
      image: "images/achivers/ashfia.png",
    },

    {
      id: 5,
      name: "Sayeda Jannatul Mawa",
      college: "Ex Chittagong Govt Girls College",
      university: "University of Chittagong",
      image: "images/achivers/jannatul.png",
    },

    {
      id: 6,
      name: "Sadia Alam",
      college: "Ex Nanupur Girls Alim Madrasa",
      university: "University of Chittagong",
      image: "images/achivers/sadia.png",
    },

     {
      id: 7,
      name: "Afsara Nur Anisha",
      college: "Ex Hathazari Govt College",
      university: "University of Chittagong",
      image: "images/achivers/tanisha.png",
    },
  ];

  useEffect(() => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 py-20 font-sans">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center font-extrabold mb-16 text-transparent bg-clip-text 
                   bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-500 drop-shadow-lg
                   text-[clamp(1.6rem,4vw,3.5rem)] px-3 leading-snug tracking-tight font-[cursive]"
      >
        🌟 Celebrating the Bright Minds & Shining Stars of Our Coaching – 2024–2025 🌟
      </motion.h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.04] 
                       transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden bg-gray-100 flex-shrink-0">
              <div
                className="absolute inset-0 bg-center bg-cover filter blur-xl scale-105"
                style={{ backgroundImage: `url(${student.image})` }}
              ></div>
              <img
                src={student.image}
                alt={student.name}
                className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Colorful Info Section */}
            <div className="relative z-20 flex-1 flex flex-col justify-between p-5 text-center 
                            bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100 
                            backdrop-blur-xl rounded-b-3xl group-hover:from-purple-200 
                            group-hover:via-pink-100 group-hover:to-blue-200 
                            transition-all duration-700">
              <div>
                <h3
                  className="text-[10px] sm:text-xl md:text-2xl font-bold 
                             bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-500 
                             bg-clip-text text-transparent drop-shadow-sm 
                             font-[cursive] group-hover:tracking-wide transition-all duration-500"
                >
                  {student.name}
                </h3>

                <p
                  className="text-[11px] sm:text-base font-semibold mt-2 
                             text-purple-700 group-hover:text-fuchsia-600 transition-colors duration-500"
                >
                  {student.college}
                </p>

                <p
                  className="text-[14px] sm:text-sm md:text-base mt-1 
                             text-indigo-600 font-medium italic tracking-wide group-hover:text-purple-800 transition-all duration-500"
                >
                  {student.university}
                </p>
              </div>

              {/* Perfectly aligned underline */}
              <div className="mt-4 w-12 mx-auto h-[3px] bg-gradient-to-r from-fuchsia-400 to-indigo-400 rounded-full group-hover:w-20 transition-all duration-700"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Yr2425;
