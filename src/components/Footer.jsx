import React from "react";
import { Mail, MapPin } from "lucide-react";

// Footer Component
function Footer() {
  return (
    <footer className="bg-teal-700 text-white">
      {/* Toll Plaza Illustration Banner */}
      <div className="w-full h-48 bg-gradient-to-b from-sky-300 to-sky-400 relative overflow-hidden">
        {/* Sky and Buildings Background */}
        <div className="absolute inset-0">
          {/* Buildings */}
          <div className="absolute bottom-0 left-20 w-24 h-32 bg-gray-600"></div>
          <div className="absolute bottom-0 left-48 w-32 h-40 bg-gray-700">
            <div className="absolute top-4 left-4 w-4 h-4 bg-orange-500"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-orange-500"></div>
          </div>

          {/* Highway */}
          <div className="absolute bottom-0 w-full h-20 bg-gray-800">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 border-t-2 border-dashed border-gray-400"></div>
          </div>

          {/* Toll Booth */}
          <div className="absolute bottom-20 left-1/4 w-24 h-28 bg-red-700">
            <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-orange-600"></div>
          </div>

          {/* Traffic Cones */}
          <div className="absolute bottom-20 left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-orange-500"></div>
          <div className="absolute bottom-20 right-1/3 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-orange-500"></div>

          {/* Bus */}
          <div className="absolute bottom-20 right-32">
            <div className="w-32 h-16 bg-red-600 rounded-lg">
              <div className="absolute top-2 left-2 w-6 h-4 bg-sky-200"></div>
              <div className="absolute top-2 right-2 w-6 h-4 bg-sky-200"></div>
              <div className="absolute -bottom-2 left-4 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-300"></div>
              <div className="absolute -bottom-2 right-4 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>

          {/* Car */}
          <div className="absolute bottom-20 right-1/4">
            <div className="w-20 h-10 bg-yellow-400 rounded">
              <div className="absolute top-1 left-2 w-4 h-3 bg-sky-200"></div>
              <div className="absolute -bottom-1 left-2 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="absolute -bottom-1 right-2 w-4 h-4 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-teal-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Side - Logo & Description */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-9 h-9 bg-teal-700 rounded-lg"></div>
                </div>
                <span className="text-3xl font-bold">Logiclead</span>
              </div>
              <p className="text-teal-100 leading-relaxed text-sm">
                Your trusted platform for quick and secure FASTag recharge.
                Making highway travel hassle-free for millions of users across
                India.
              </p>
            </div>

            {/* Middle - Quick Links */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">
                      →
                    </span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">
                      →
                    </span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">
                      →
                    </span>
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-teal-100 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">
                      →
                    </span>
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Side - Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-white">Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <a
                      href="mailto:ops@logiclead.in"
                      className="text-teal-100 hover:text-white transition-colors block"
                    >
                      ops@logiclead.in
                    </a>
                    <a
                      href="mailto:tech@logiclead.in"
                      className="text-teal-100 hover:text-white transition-colors block mt-1"
                    >
                      tech@logiclead.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-teal-100 leading-relaxed">
                    Office No 15, Ground Floor, D-29, Sector 3, Noida, Gautam
                    Buddha Nagar Uttar Pradesh, 201301.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-teal-600">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-teal-100 text-sm">
                © 2025 Logiclead. All rights reserved
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Terms & Conditions
                </a>
                <span className="text-teal-500">|</span>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </a>
                <span className="text-teal-500">|</span>
                <a
                  href="#"
                  className="text-teal-100 hover:text-white transition-colors text-sm font-medium"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
