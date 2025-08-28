import { Linkedin, Ship } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#07254B] text-[#d4d4d4] px-4 sm:px-6 lg:px-20">
      <div className="mx-auto py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center max-w-md space-x-2  mb-4 text-white">
              <Ship/>
              <span className="text-lg font-bold text-white">Triple S Marine Services</span>
            </div>
            <p className="text-[#d4d4d4] mb-4 max-w-md font-semibold">
              Your trusted partner in the marine industry. We provide comprehensive
              solutions for all your maritime needs with commitment and excellence.
            </p>
            <div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#0A3251] p-2 hover:bg-[#0E5A6C] transition-colors duration-300 group"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-6 w-6 text-white group-hover:text-[#38d49c]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link to="/" className="text-[#d4d4d4] hover:text-[#38D49C] duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#d4d4d4] hover:text-[#38D49C] duration-300">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#d4d4d4] hover:text-[#38D49C] duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-[#d4d4d4] font-semibold">
              <li>Marine Equipment</li>
              <li>Technical Support</li>
              <li>Custom Solutions</li>
              <li>Maintenance</li>
            </ul>
          </div>
        </div>

        {/* The bottom copyright section */}
        <div className="border-t border-[#747d88] mt-8 pt-8">
          <div className="flex justify-center md:justify-start">
            <p className="text-[#e0dfdf] text-sm font-semibold">
              © 2025 Triple S Marine Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
