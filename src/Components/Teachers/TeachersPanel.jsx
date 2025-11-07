import React from "react";
import { motion } from "framer-motion";

const teachers = [
  {
    id: 1,
    name: "Monirul Islam",
    degree: "BA, MA",
    subject: "Department of Islamic History & Culture",
    university: "University of Chittagong",
    image: "images/teachers/monir.png",
  },

  {
    id: 2,
    name: "Kayem Muktar Nipu",
    subject: "Department of English",
    university: "University of Dhaka",
    image: "images/teachers/nipu.png",
  },

  {
    id: 3,
    name: "Rifat Hossen",
    degree: "BSS",
    subject: "Department of Sociology",
    university: "University of Chittagong",
    image: "images/teachers/rifat.png",
  },
  
  {
    id: 4,
    name: "S.A Rifat",
    subject: "Department of Banking And Insurance",
    university: "University of Chittagong",
    image: "images/teachers/sa rifat.png",
  },
  {
    id: 5,
    name: "Jahed Hasan Sakib",
    subject: "Department of Psychology",
    university: "University of Chittagong",
    image: "images/teachers/sakib.png",
  },
  {
    id: 6,
    name: "Maruf Abedin Mahi",
    subject: "Department of Chemistry",
    university: "University of Chittagong",
    image: "images/teachers/maruf abedin.png",
  },

   {
    id: 7,
    name: "Jahidul Islam",
    subject: "Department of History",
    university: "University of Chittagong",
    image: "images/teachers/Jahidul.jpeg",
  },
];

const TeachersPanel = () => {
  const renderCard = (teacher) => (
    <motion.div
      key={teacher.id}
      whileHover={{ y: -10, scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group flex-shrink-0 flex flex-col items-center bg-white/70 backdrop-blur-xl border border-indigo-100 
      rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 
      p-6 w-64 sm:w-full max-w-xs relative overflow-hidden h-[380px]"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-indigo-100 via-blue-100 to-transparent blur-2xl"></div>

      {/* Image */}
      <div className="relative w-40 h-44 sm:w-48 sm:h-52 rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-indigo-50 to-blue-50 flex justify-center items-center">
        <motion.img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="mt-4 text-center z-10 space-y-1 flex-1 flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight leading-snug">
          {teacher.name}
        </h3>

        {teacher.degree && (
          <p className="text-sm sm:text-base text-gray-700 font-medium tracking-wide">
            {teacher.degree}
          </p>
        )}

        <p className="text-sm sm:text-base text-indigo-600 font-semibold leading-tight">
          {teacher.subject}
        </p>

        <p className="text-xs sm:text-sm text-gray-500 italic">{teacher.university}</p>
      </div>
    </motion.div>
  );

  const GradientHeading = ({ text }) => (
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-10 
      bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-[length:200%_auto] 
      animate-gradient-x text-transparent bg-clip-text drop-shadow-sm tracking-tight"
    >
      {text}
    </motion.h2>
  );

  return (
    <div className="relative sm:min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-100 py-16 px-4 sm:px-8 md:px-14 lg:px-20 overflow-hidden mt-6">
      {/* Background Animation */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/40 blur-3xl rounded-full -z-10"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full -z-10"
      ></motion.div>

      {/* Title */}
      <GradientHeading text="Our Teachers' Panel" />

      {/* 💻 Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
        {teachers.map((t) => renderCard(t))}
      </div>

      {/* 📱 Mobile Horizontal Scroll */}
      <div className="sm:hidden flex gap-6 overflow-x-auto pb-6 px-1 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-transparent snap-x snap-mandatory">
        {teachers.map((t) => (
          <div key={t.id} className="snap-center">
            {renderCard(t)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPanel;
