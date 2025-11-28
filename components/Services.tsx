import React from 'react';
import { FaTooth, FaClinicMedical, FaCheckCircle } from 'react-icons/fa';

export default function FeaturedServices() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 font-sans">
      <div className="container mx-auto px-2 lg:px-8 text-center">

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e1b2b] mb-5">
          Featured Services
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">
          Discover our specialized medical and dental services designed to keep you healthy.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Medical Services */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl mr-4 shadow-md">
                <FaClinicMedical className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0e1b2b]">Medical Services</h3>
            </div>

            <ul className="text-left space-y-6">
              {[
                ["Primary Care", "Routine check-ups, preventive care, and health maintenance"],
                ["Chronic Disease Management", "Diabetes, hypertension, asthma, and more"],
                ["Minor Procedures", "Wound care, suturing, and minor surgical procedures"],
                ["Vaccinations & Immunizations", "Flu shots, travel vaccines, and childhood immunizations"],
                ["Health Screenings", "Blood pressure, cholesterol, diabetes, and cancer screenings"],
              ].map(([title, desc], i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="text-[#0ea5e9] w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className=" text-[#0e1b2b] text-lg">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Dental Services */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl mr-4 shadow-md">
                <FaTooth className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0e1b2b]">Dental Services</h3>
            </div>

            <ul className="text-left space-y-6">
              {[
                ["Teeth Cleaning & Checkups", "Professional cleaning and oral examinations"],
                ["Dental Fillings", "Cavity treatment with modern composite restorations"],
                ["Tooth Extractions", "Safe and comfortable tooth removal when needed"],
                ["Root Canal Treatment", "Specialized endodontic care"],
                ["Dental X-Rays", "Digital imaging for accurate diagnosis and treatment planning"],
              ].map(([title, desc], i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="text-[#0ea5e9] w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="f text-[#0e1b2b] text-lg">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
