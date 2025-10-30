import React from "react";

// About Section Component
function AboutSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-gray-900">Logiclead</span>,
                your trusted platform for FASTag recharge. We make it easy for
                vehicle owners to recharge their FASTag quickly and securely
                from anywhere.
              </p>

              <p>
                Our goal is to save your time at toll plazas by providing a
                smooth recharge experience with multiple payment options. With
                reliable service, exciting offers, and dedicated support, we are
                here to make your travel easier and more convenient.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for FASTag card image */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 aspect-video flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="bg-white text-teal-700 rounded-lg p-6 inline-block shadow-xl transform rotate-3">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="text-2xl font-bold text-orange-500">
                        FASTag
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Drive Hassle-Free with FASTag
                    </div>
                    <div className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
                      Linked Vehicle DL 19 ES 9XXX
                    </div>
                    <div className="mt-3 flex justify-end">
                      <div className="w-12 h-12 bg-black border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* You can replace above div with actual image: */}
              {/* <img 
                src="your-fastag-image-url.jpg" 
                alt="FASTag Card" 
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
