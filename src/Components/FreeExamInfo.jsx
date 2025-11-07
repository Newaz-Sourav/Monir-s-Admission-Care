import React from "react";
import { Users } from "lucide-react"; // npm install lucide-react

export default function FreeExamInfo() {
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700">
          Free Online Exam + Daily Practice Support
        </h2>
        
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
  Our students get <span className="font-semibold text-indigo-600">
  completely free Online Exams and Daily Practice Sessions
  </span>.  
  Watch the video below to understand all the details.
</p>


        {/* Video Box */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-indigo-200 mt-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cqLmMTXSCGM?rel=0&modestbranding=1"
            title="Free Exam Info Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Button */}
        <a
          href="https://www.facebook.com/share/g/1APDarFB1Z/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:shadow-indigo-300 transition-all duration-300"
        >
          <Users className="w-5 h-5" />
          Join Our Official Facebook Group
        </a>

      </div>
    </div>
  );
}
