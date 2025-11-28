'use client'
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { FaBars, FaTimes, FaHome } from "react-icons/fa"; // Importing react-icons

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ]
  
  // Define the primary blue color (used for clarity and static classes below)
  const PRIMARY_BLUE_HEX = "#1E6091";

  return (
    <nav className="top-0 left-0 z-50 w-full bg-white font-sans">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image src="/logo.avif" alt="Logo" width={180} height={100} />
        </Link>

        {/* Toggle Button (UI FIX: Consistent color and hover state) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          // Use static Tailwind classes for better performance and reliability
          className={`p-2 rounded-lg text-2xl transition duration-200 text-[#1E6091] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1E6091]`}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } absolute w-full left-0 shadow-xl border-t border-gray-100`}
      >
        <div className="flex flex-col items-center bg-white py-4 space-y-2 px-4">
          
          {/* Nav Links */}
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center text-gray-700 hover:text-[#1E6091] font-medium text-lg transition w-full py-3 px-4 rounded-lg text-center justify-center hover:bg-gray-50" // UI FIX: Changed hover background to a lighter gray
            >
              {link.label}
            </Link>
          ))}
          
          {/* CTA Button */}
          <div className="pt-4 w-full px-4">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              // UI FIX: Added distinct shadow and hover effect
              className={`flex items-center gap-2 justify-center text-white font-bold text-lg transition bg-[#1E6091] hover:bg-[#164e78] w-full py-3 rounded-lg shadow-lg shadow-blue-500/50`}
            >
              Book your Appointment
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  )
}