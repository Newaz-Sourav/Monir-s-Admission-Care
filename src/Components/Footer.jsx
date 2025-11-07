import React from "react";
import { Youtube, Facebook, Phone } from "lucide-react"; // npm install lucide-react

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo + Brand + Description */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
          {/* Logo Placeholder */}
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-xl">
            <img src="public/images/log.png" alt="" />
          </div>

          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
              Monir's Admission Care
            </h2>
            <p className="text-gray-600 mt-2 max-w-sm">
              Helping students with admissions, guidance, and free practice resources.
              Stay connected with us on our social media platforms for updates.
            </p>
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start mt-3 text-gray-700 gap-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span className="font-medium">+880 1876 644633</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.youtube.com/@MONIRSAdmissionCare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 transition-transform transform hover:scale-110"
          >
            <Youtube className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/monirsadmissioncare633"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <Facebook className="w-8 h-8" />
          </a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Monir's Admission Care. All rights reserved.
      </div>
    </footer>
  );
}
