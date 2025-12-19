// src/components/common/Footer.jsx
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">
            Lemoncaps Health & Heal
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Global medical tourism excellence connecting international patients
            to India’s top medical facilities.
          </p>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className="hover:text-white">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/success-stories" className="hover:text-white">
                Success Stories
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Patients */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Patients</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/international-patients" className="hover:text-white">
                International Patients
              </NavLink>
            </li>
            <li>
              <NavLink to="/hospitals" className="hover:text-white">
                Hospital Network
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">📧 info@lemoncapshealth.com</p>
          <p className="text-sm mt-2">📞 +91 9XXXXXXXXX</p>
          <p className="text-sm mt-4 italic">
            Your health, our priority. Your trust, our responsibility.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400 px-6">
        © {new Date().getFullYear()} Lemoncaps Health & Heal. All rights reserved.
      </div>
    </footer>
  );
}
