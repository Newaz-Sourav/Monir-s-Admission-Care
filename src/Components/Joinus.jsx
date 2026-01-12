import React from "react";
import { motion } from "framer-motion";
import {
  FaLink,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Joinus = () => {
  const platforms = [
  {
  title: "Official Facebook Group",
  description: "Join our official Facebook group to connect with the community, get updates, and share knowledge.",
  link: "https://www.facebook.com/share/g/1F2XYxEKUn/", // এখানে তোমার real group link বসাও
  gradient: "from-blue-600/20 to-indigo-600/20",
  text: "text-blue-700",
  icon: <FaFacebook />, // Facebook logo
}
,
    {
      title: "Free Playlist",
      description: "Watch free classes and learning resources anytime.",
      link: "https://www.youtube.com/@MONIRSAdmissionCare/playlists",
      gradient: "from-red-500/20 to-rose-500/20",
      text: "text-red-600",
      icon: <FaYoutube />,
    },
    {
      title: "Official Facebook",
      description: "Stay connected with updates and community posts.",
      link: "https://www.facebook.com/share/1C7o52Vr48/",
      gradient: "from-blue-600/20 to-indigo-600/20",
      text: "text-indigo-600",
      icon: <FaFacebook />,
    },
    {
      title: "Official Instagram",
      description: "Follow us for reels, tips, and behind-the-scenes content.",
      link: "https://www.instagram.com/monirsadmissioncare?igsh=dDQ5em1nZG94ZzA3",
      gradient: "from-pink-500/20 to-rose-500/20",
      text: "text-pink-600",
      icon: <FaInstagram />,
    }
    
  ];

  return (
    <section className="
      min-h-screen
      bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50
      px-4 sm:px-6 lg:px-12
      py-16 sm:py-20
      flex items-center justify-center
    ">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-slate-900">
            Join Our Community
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">
            Connect with us across platforms and get access to learning resources,
            updates, and exclusive content.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {platforms.map((data, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white rounded-2xl
                         p-6 sm:p-7 lg:p-8
                         border border-slate-200
                         shadow-sm hover:shadow-lg
                         transition overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${data.gradient}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Logo */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center
                  bg-slate-100 mb-5 text-xl ${data.text}
                `}>
                  {data.icon}
                </div>

                <h3 className={`text-lg sm:text-xl font-semibold ${data.text}`}>
                  {data.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed flex-grow">
                  {data.description}
                </p>

                <motion.a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    mt-6 sm:mt-8
                    inline-flex items-center justify-center
                    w-full
                    rounded-xl bg-slate-900 text-white
                    px-5 py-3 text-sm sm:text-base font-medium
                    hover:bg-slate-800 transition
                  "
                >
                  Join Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Joinus;
