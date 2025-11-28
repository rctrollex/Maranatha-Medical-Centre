import React from "react";
import { FaUserMd, FaHospital, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: FaUserMd,
    title: "Experienced & Caring Doctors",
    description:
      "Board-certified physicians with years of expertise who truly care about your health.",
  },
  {
    icon: FaHospital,
    title: "Modern Equipment",
    description:
      "State-of-the-art medical and dental technology for accurate diagnosis and treatment.",
  },
  {
    icon: FaClock,
    title: "Fast Service & Easy Booking",
    description:
      "Same-day appointments with minimal wait times and easy online booking.",
  },
  {
    icon: FaShieldAlt,
    title: "Clean, Safe Environment",
    description:
      "Spotless facilities with strict hygiene protocols for your safety and peace of mind.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20 md:py-32 text-white overflow-hidden">
      
      {/* Soft background shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full border border-white/20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full border border-white/20"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 leading-snug">
            Why Choose Maranatha Medical & Dental Center?
          </h2>
          <p className="text-base lg:text-lg text-blue-100 max-w-2xl mx-auto">
            Experience healthcare that puts you first with our commitment to excellence.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:bg-white/10"
              >
                {/* Icon wrapper */}
                <div className="bg-white text-blue-600 p-5 rounded-xl shadow-xl mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-blue-100 text-base lg:text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
