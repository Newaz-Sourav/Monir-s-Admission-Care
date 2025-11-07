import React from "react";
import { PlayCircle } from "lucide-react"; // npm install lucide-react

const playlists = [
  {
    id: 1,
    title: "General Knowledge Playlist",
    desc: "Boost your general awareness with simple and helpful lessons.",
    url: "https://youtube.com/playlist?list=PLiP2piWL_r6HQzyOyWT_N3fhRQbXRagLq&si=7YLCIRVwqLyQN0Go",
  },
  {
    id: 2,
    title: "English Learning Playlist",
    desc: "Learn everyday English in an easy and practical way.",
    url: "https://youtube.com/playlist?list=PLiP2piWL_r6Hx1rRWCS-jsDaXNbp0nUQj&si=8XO6acPDo2A-vctQ",
  },
];

export default function LearningPlaylists() {
  return (
    <div className="w-full py-14 bg-gradient-to-br from-violet-200 via-indigo-200 to-blue-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-700 drop-shadow-sm">
            Explore Learning Resources
          </h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Well-organized playlists to learn step-by-step in a structured way.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
                  <PlayCircle className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>

              <div className="mt-5 inline-block px-4 py-2 text-sm bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
                Visit Playlist →
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
