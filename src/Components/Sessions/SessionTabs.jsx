import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// ✅ Structured array (with route slug)
const sessions = [
  { id: 1, title: "2024-2025", path: "/yr2425" },
  { id: 2, title: "2023-2024", path: "" },
  { id: 3, title: "2022-2023", path: "" },
  { id: 4, title: "2021-2022", path: "" },
];

const StudentAchievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // 🎉 Confetti effect
  React.useEffect(() => {
    if (inView) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: Math.random() * 60 + 60,
          spread: 55,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ["#6366F1", "#3B82F6", "#EC4899", "#FBBF24"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-indigo-100 via-white to-blue-100 py-16 sm:py-20 px-4 sm:px-8 md:px-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12 bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 0.8 }}
      >
        Honouring the Achievements of Our Students
      </motion.h2>

      {/* Session Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {sessions.map(({ id, title, path }) => (
          <motion.div key={id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={path}
              className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              {title}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-2xl sm:max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Here, we proudly recognize the outstanding achievements of our students
        who have successfully earned placements in esteemed universities through
        our coaching. Each year, they demonstrate commitment, perseverance, and
        remarkable success  setting inspiring examples for aspiring students to
        follow.
      </motion.p>
    </section>
  );
};

export default StudentAchievements;
