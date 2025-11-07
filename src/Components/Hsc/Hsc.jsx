import { motion } from "framer-motion";
import { BookOpen, Book, PenTool } from "lucide-react";

const HSC = () => {
  const subjects = [
    {
      name: "English 1st Paper",
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      desc: "Grammar, Writing, and Reading Comprehension",
    },
    {
      name: "English 2nd Paper",
      icon: <Book className="w-8 h-8 text-blue-500" />,
      desc: "Literature and Composition",
    },
    {
      name: "Bangla 2nd Paper",
      icon: <PenTool className="w-8 h-8 text-rose-600" />,
      desc: "Bangla Literature and Grammar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          HSC Program
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Explore detailed subjects included in HSC program.
        </p>
      </motion.div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {subjects.map((subj, i) => (
          <motion.div
            key={subj.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="flex justify-center mb-4">{subj.icon}</div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
              {subj.name}
            </h2>
            <p className="text-center text-gray-500 text-sm">{subj.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HSC;
