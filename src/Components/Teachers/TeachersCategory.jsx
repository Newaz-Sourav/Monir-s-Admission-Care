import React from "react";
import { motion } from "framer-motion";

const teachers = [
  { id: 1, name: "Monirul Islam", degree: "BA, MA", subject: "Islamic History & Culture", university: "University of Chittagong", image: "images/teachers/monir.png", category: "english" },
  { id: 2, name: "Kayem Muktar Nipu", subject: "English", university: "University of Dhaka", image: "images/teachers/nipu.png", category: "english" },
  { id: 3, name: "Rifat Hossen", degree: "BSS", subject: "Sociology", university: "University of Chittagong", image: "images/teachers/rifat.png", category: "bangla" },
  { id: 4, name: "S.A Rifat", subject: "Banking & Insurance", university: "University of Chittagong", image: "images/teachers/sa rifat.png", category: "bangla" },
  { id: 5, name: "Jahed Hasan Sakib", subject: "Psychology", university: "University of Chittagong", image: "images/teachers/sakib.png", category: "math" },
  { id: 6, name: "Maruf Abedin Mahi", subject: "Chemistry", university: "University of Chittagong", image: "images/teachers/maruf abedin.png", category: "math" },
  { id: 7, name: "Jahidul Islam", subject: "History", university: "University of Chittagong", image: "images/teachers/Jahidul.jpeg", category: "iq" },
];

const floatingVariants = {
  float1: {
    y: [0, -20, 0],
    x: [0, 15, 0],
    transition: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
  float2: {
    y: [0, 25, 0],
    x: [0, -20, 0],
    transition: { duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
  float3: {
    y: [0, -15, 0],
    x: [0, 20, 0],
    transition: { duration: 12, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
  },
};

const TeachersCategory = () => {

  const renderCard = (teacher) => (
    <motion.div
      key={teacher.id}
      whileHover={{ y: -12, scale: 1.06 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group flex flex-col items-center bg-white backdrop-blur-xl border border-indigo-100 
      rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_45px_rgba(99,102,241,0.25)] 
      transition-all duration-500 p-7 w-64 sm:w-full max-w-xs relative overflow-hidden h-[390px]"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 
      bg-gradient-to-br from-indigo-200/40 via-blue-200/40 to-transparent blur-2xl"></div>

      <div className="relative w-40 h-44 sm:w-48 sm:h-52 rounded-2xl overflow-hidden shadow bg-gradient-to-br from-white to-indigo-50 flex justify-center items-center">
        <motion.img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-110"
        />
      </div>

      <div className="mt-5 text-center z-10 space-y-1 flex-1 flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">{teacher.name}</h3>
        {teacher.degree && <p className="text-sm text-gray-700 font-medium">{teacher.degree}</p>}
        <p className="text-sm text-indigo-600 font-semibold">{teacher.subject}</p>
        <p className="text-xs sm:text-sm text-gray-500 italic">{teacher.university}</p>
      </div>

    </motion.div>
  );

  const Section = ({ title, category }) => (
    <div className="mt-6 sm:mt-12 md:mt-24 relative">
      <h2 className="text-center font-semibold text-3xl md:text-4xl mb-12 text-gray-900 tracking-tight relative z-10">
        {title}
      </h2>

      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
        {teachers.filter(t => t.category === category).map(renderCard)}
      </div>

      <div className="sm:hidden flex gap-6 overflow-x-auto pb-6 px-1 snap-x snap-mandatory">
        {teachers.filter(t => t.category === category).map(t => (
          <div key={t.id} className="snap-center">{renderCard(t)}</div>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent mt-20"></div>
    </div>
  );

  return (
    <div className="py-24 px-6 sm:px-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">

      {/* Floating Colorful Background Shapes */}
      <motion.div variants={floatingVariants.float1} animate="float1"
        className="absolute top-0 -left-16 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl"></motion.div>
      <motion.div variants={floatingVariants.float2} animate="float2"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full opacity-25 blur-3xl"></motion.div>
      <motion.div variants={floatingVariants.float3} animate="float3"
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-2xl"></motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h1 className="text-xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Meet Our <span className="text-indigo-600">Subject–Specialized Mentors</span>
        </h1>
        <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
          Each academic division is guided by highly qualified, dedicated, and student-focused mentors. 
          They not only teach, but also ensure personalized support from academic growth to mental guidance 
          providing complete care throughout the learning journey.
        </p>
      </motion.div>

      {/* ✅ Responsive YouTube Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-24 px-4 sm:px-0 relative z-10"
      >
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_12px_45px_rgba(99,102,241,0.25)] border border-indigo-100">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/skKic9SHhb0?rel=0&modestbranding=1"
            title="Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Sections */}
      <Section title="English Mentors" category="english" />
      <Section title="Mathematics Mentors" category="math" />
      <Section title="Bangla Mentors" category="bangla" />
      <Section title="IQ & Analytical Mentor" category="iq" />

    </div>
  );
};

export default TeachersCategory;
