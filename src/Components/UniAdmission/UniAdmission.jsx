import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Brain } from "lucide-react";

const UniAdmission = () => {
  const units = [
    {
      name: "B Unit",
      desc: "For Arts & Humanities background students.",
      subjects: ["English", "Bangla", "General Knowledge"],
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    },
    {
      name: "D Unit",
      desc: "For all faculty students with analytical aptitude.",
      subjects: ["English", "Bangla", "General Knowledge", "IQ", "Math"],
      icon: <Brain className="w-8 h-8 text-green-600" />,
    },
    {
      name: "C Unit",
      desc: "For Business Studies background students.",
      subjects: ["Math", "English"],
      icon: <GraduationCap className="w-8 h-8 text-rose-600" />,
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {units.map((unit, i) => (
          <motion.div
            key={unit.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="flex justify-center mb-4">{unit.icon}</div>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
              {unit.name}
            </h2>
            <p className="text-center text-gray-500 text-sm mb-6">
              {unit.desc}
            </p>

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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UniAdmission;
