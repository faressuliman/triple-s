import { Linkedin, Ship } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#07254B] text-[#d4d4d4] md:px-12 px-6">
      <div className="mx-auto px-4 sm:px-6 md:px-0 lg:px-8 py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-4  gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center max-w-md space-x-2 mb-4">
              <Ship />
              <span className="text-xl font-bold text-white">Triple S Marine Services</span>
            </div>
            <p className="text-[#d4d4d4] mb-4 max-w-md">
              Your trusted partner in the marine industry. We provide comprehensive
              solutions for all your maritime needs with commitment and excellence.
            </p>
            <div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-6 w-6 text-[#d4d4d4] text-blue-200 hover:text-[#38D49C] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-[#d4d4d4]">
              <li>Marine Equipment</li>
              <li>Technical Support</li>
              <li>Custom Solutions</li>
              <li>Maintenance</li>
            </ul>
          </div>
        </div>

        {/* The bottom copyright section */}
        <div className="border-t border-[#38506E] mt-8 pt-8">
          <div className="flex justify-center md:justify-start">
            <p className="text-[#d4d4d4] text-sm">
              © 2025 Triple S Marine Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer