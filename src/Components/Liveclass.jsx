import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Liveclass = () => {
  const actions = [
    {
      title: "Live Class",
      description:
        "Join real-time interactive sessions with professional instructors.",
      link: "https://example.com/live",
      accent: "from-blue-500/25 to-blue-600/25",
      text: "text-blue-600",
    },
    {
      title: "Materials",
      description:
        "Access structured study materials, notes, and downloadable resources.",
      link: "https://example.com/materials",
      accent: "from-emerald-500/25 to-emerald-600/25",
      text: "text-emerald-600",
    },
    {
      title: "Result",
      description:
        "View performance analytics, evaluations, and academic progress.",
      link: "https://example.com/result",
      accent: "from-violet-500/25 to-violet-600/25",
      text: "text-violet-600",
    },
  ];

  return (
    <section className="
  py-4 md:py-0 min-h-screen
  flex items-center justify-center
  px-4 sm:px-6 lg:px-12
  bg-gradient-to-br from-slate-100 via-indigo-50 to-sky-50
">

      <div className="w-full max-w-7xl ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Class Dashboard
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            A unified workspace designed for seamless learning, content access,
            and academic performance tracking.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
        >
          {actions.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl sm:rounded-3xl bg-white 
                         p-6 sm:p-8 lg:p-12
                         border border-slate-200 
                         shadow-[0_12px_30px_-15px_rgba(0,0,0,0.15)]
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.accent}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight ${item.text}`}
                >
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-8 sm:mt-10 lg:mt-14 flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-slate-700">
                    Open Module
                  </span>
                  <motion.span
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="text-xl sm:text-2xl text-slate-400"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Liveclass;
