import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Brain, Star } from "lucide-react";

const UniAdmission = () => {
  const units = [
    {
      name: "B Unit",
      desc: "For Arts & Humanities background students.",
      subjects: ["English", "Bangla", "General Knowledge"],
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50",
    },
    {
      name: "D Unit",
      desc: "For all faculty students with analytical aptitude.",
      subjects: ["English", "Bangla","General Knowledge", "Economics", "Math","IQ"],
      icon: <Brain className="w-8 h-8 text-green-600" />,
      bg: "bg-green-50",
    },
    {
      name: "C Unit",
      desc: "For Business Studies background students.",
      subjects: ["Math", "English","Critical Reasoning"],
      icon: <GraduationCap className="w-8 h-8 text-rose-600" />,
      bg: "bg-rose-50",
    },
    {
      name: "Especial DU Written Course",
      desc: "Special preparation course for DU written exams.",
      subjects: [], // No subjects
      icon: <Star className="w-10 h-10 text-white" />,
      highlight: true,
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
          University Admission <span className="text-indigo-600">Program</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Explore admission details and subject requirements for each unit below.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {units.map((unit, i) => (
          <motion.div
            key={unit.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-lg transition-all duration-300 p-8 border flex flex-col justify-between
              ${unit.highlight 
                ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-white hover:scale-105" 
                : `${unit.bg} border-gray-200 hover:shadow-2xl`}`}
            style={{ minHeight: "360px" }} // fixed height for all cards
          >
            <div>
              <div className="flex justify-center mb-4">{unit.icon}</div>
              <h2 className={`text-2xl font-semibold text-center mb-2 ${unit.highlight ? "text-white" : "text-gray-800"}`}>
                {unit.name}
              </h2>
              <p className={`text-center text-sm mb-6 ${unit.highlight ? "text-white/90" : "text-gray-700"}`}>
                {unit.desc}
              </p>

              {/* Subjects list only if available */}
              {unit.subjects.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium text-gray-700 text-center mb-3">
                    Subjects Included
                  </h3>
                  <ul className="space-y-2 text-center text-gray-600 font-medium">
                    {unit.subjects.map((subject) => (
                      <motion.li
                        key={subject}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {subject}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UniAdmission;
