import { FaCheckCircle, FaWhatsapp, FaArrowRight, FaUserTie } from 'react-icons/fa';

export default function About() {
  const info = [
    {
      header: "Patient-Centered Care",
      desc: "We listen to your concerns and create personalized treatment plans.",
    },
    {
      header: "Comprehensive Services",
      desc: "Medical and dental care all in one convenient location",
    },
    {
      header: "Experienced Team",
      desc: "Skilled doctors, nurses, and dental professionals dedicated to excellence",
    },
  ];

  return (
    <div className="w-full py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Image */}
        <div className="relative">
          {/* Soft Blue Background Shape */}
          <div className="absolute -top-6 -left-6 w-3/4 h-full bg-[#0ea5e9] rounded-3xl opacity-10 blur-xl -z-10"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/image2.jpg"
              alt="Property Image"
              className="w-full h-auto object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-0 right-0 bg-[#0ea5e9] text-white p-6 rounded-tl-3xl shadow-xl">
              <span className="block text-4xl font-extrabold">20+</span>
              <span className="text-xs font-semibold uppercase tracking-wider">
                Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col items-start">
          
          {/* Top Tag */}
          <div className="inline-flex items-center bg-blue-100 text-[#0a3a5a] px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <FaUserTie className="mr-2" />
            Shorty Know About Us
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0e1b2b] mb-6 leading-tight">
            Your Health is Our Priority
          </h2>

          {/* Top Paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed text-base lg:text-lg text-justify">
            At Maranatha Medical & Dental Center, we believe that quality healthcare must be accessible, compassionate, and comprehensive. Our mission is to provide exceptional medical and dental services that improve lives and uplift our community.
          </p>

          {/* Bottom Paragraph */}
          <p className="text-gray-600 mb-10 leading-relaxed text-base lg:text-lg text-justify">
            With a dedicated team of experienced professionals and modern facilities, we offer a full range of medical and dental care under one roof. From routine check-ups to specialized treatments, we’re here every step of the way.
          </p>

          {/* Check List */}
          <div className="space-y-5 mb-12 w-full">
            {info.map((item, i) => (
              <div key={i} className="flex items-start text-gray-700">
                <FaCheckCircle className="text-[#0ea5e9] mr-4 text-xl mt-1" />
                <div>
                  <span className="block text-lg font-semibold">{item.header}</span>
                  <span className="block text-gray-500 text-base">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-3 py-2 lg:px-7 lg:py-3 rounded-xl font-bold text-base lg:text-lg shadow-lg transition-all duration-300">
              Learn More About Us
              <FaArrowRight className="ml-2" />
            </button>

            <button className="flex items-center border-2 border-[#0ea5e9] text-[#0ea5e9] hover:bg-blue-50 px-3 py-2 lg:px-7 lg:py-3 rounded-xl font-bold text-base lg:text-lg transition-all duration-300">
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Us
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
