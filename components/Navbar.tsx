import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
export default function Navbar(){
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact Us" },
    ];
    return(
        <nav className="z-50 sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm font-sans">
            <div className="max-w-7xl mx-auto px-4">
                <div className="hidden relative py-4 justify-between items-center text-base lg:flex">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/logo.avif" alt="Logo" width={240} height={100} />
                        {/* <div className="flex flex-col">
                            <h1 className="font-bold text-gray-700 text-3xl">Maranatha</h1>
                            <h3 className="text-xl font-bold text-gray-500">MEDICAL & DENTAL CENTER</h3>
                        </div> */}
                    </div>

                    <div className="flex flex-row gap-8">
                        {navLinks.map((link)=>(
                            <Link key={link.href} href={link.href} className="flex-row flex gap-x-1 justify-center items-center text-base font-semibold text-gray-700 hover:text-[#1E6091] transition duration-200">{link.label}</Link>
                        ))}

                        <Link 
                            href="BOOK" 
                            className="px-6 py-2.5  text-white font-bold rounded-lg  transition duration-300 shadow-md flex items-center gap-2 bg-blue-500 hover:bg-blue-700"
                        >
                            
                            Book Your Appointment
                        </Link>
                    </div>
                </div>

                <div className="flex lg:hidden">
                    {/* Replaced MobileNav with a styled placeholder since the component logic wasn't provided */}
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}