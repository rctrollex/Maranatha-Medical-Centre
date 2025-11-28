// Importing icons from react-icons
import { FaHandshake } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsCalendarCheckFill, BsCheckCircleFill, BsClockFill } from 'react-icons/bs';

const image1 = "/image2.jpg";

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden font-sans">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1b2b]/90 via-[#0e1b2b]/80 to-[#0a3a5a]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
        
        {/* Top Tag */}
        <div className="inline-flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white/90 shadow-lg mb-8">
          <MdOutlineHealthAndSafety className="mr-2 text-lg text-blue-300" />
          Trusted Healthcare Since 1995
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg max-w-3xl">
          Complete Medical <br/> & Dental Care <br/> Under One Roof
        </h1>

        {/* Sub-text */}
        <p className="text-base md:text-xl text-blue-100/90 lg:max-w-2xl w-full mb-10 leading-relaxed">
          Receive compassionate, high-quality healthcare from experienced doctors in a modern, clean environment. Same-day appointments available.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          
          {/* Primary Button */}
          <button className="flex items-center bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-2 px-3 lg:px-8 lg:py-3 rounded-xl font-semibold text-base lg:text-lg shadow-md hover:shadow-lg transition-all duration-300">
            <BsCalendarCheckFill className="mr-3 text-xl" />
            Book Appointment
          </button>

          {/* Secondary Button */}
          <button className="flex items-center bg-white/90 hover:bg-white text-[#0a3a5a] py-2 px-3 lg:px-8 lg:py-3 rounded-xl font-semibold text-base lg:text-lg shadow-md hover:shadow-lg transition-all duration-300">
            <IoCallOutline className="mr-3 text-xl" />
            Call the Clinic
          </button>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center gap-10 text-white/90 font-medium">
          <div className="flex items-center space-x-2">
            <BsCheckCircleFill className="text-[#38bdf8]" />
            <span>Fast Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsClockFill className="text-[#38bdf8]" />
            <span>Professional Care</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHandshake className="text-[#38bdf8]" />
            <span>Personalized Attention</span>
          </div>
        </div>

      </div>
    </div>
  );
}
