import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-teal-900 py-20 md:py-28 text-white relative overflow-hidden">

      {/* Soft background circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl top-10 left-0"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Icon */}
        <div className="bg-white text-blue-600 p-5 rounded-2xl shadow-2xl mb-10">
          <FaCalendarAlt className="w-8 h-8" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight drop-shadow">
          Ready for Better Care?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-blue-100 max-w-2xl mb-12 leading-relaxed">
          Book your appointment today and experience modern, compassionate healthcare.
          Same-day appointments available!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-10">
          
          {/* Book Appointment Button */}
          <button className="text-base lg:text-lg flex items-center justify-center bg-white text-blue-700 font-semibold py-2 px-4 lg:py-3 lg:px-10 rounded-full shadow-xl hover:bg-blue-50 transition-transform duration-300 hover:-translate-y-1">
            <FaCalendarAlt className="mr-3 w-5 h-5" />
            Book Appointment
          </button>

          {/* Call Now Button */}
          <button className="text-base lg:text-lg flex items-center justify-center border-2 border-white text-white font-semibold py-2 px-4 lg:py-3 lg:px-10 rounded-full shadow-xl hover:bg-white hover:text-blue-700 transition-transform duration-300 hover:-translate-y-1">
            <FaPhoneAlt className="mr-3 w-5 h-5" />
            Call Now
          </button>
        </div>

        {/* Small Info */}
        <p className="text-sm text-blue-200 flex items-center">
          <FaClock className="mr-2 opacity-75" />
          Fast service • Walk-ins welcome • Most insurance accepted
        </p>

      </div>
    </section>
  );
}
