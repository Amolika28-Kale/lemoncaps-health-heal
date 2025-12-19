// src/components/common/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-600">
          Lemoncaps
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/hospitals" className={linkClass}>Hospital Network</NavLink>
          <NavLink to="/international-patients" className={linkClass}>
            International Patients
          </NavLink>
          <NavLink to="/success-stories" className={linkClass}>
            Success Stories
          </NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </nav>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden md:inline-block px-6 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
        >
          Free Consultation
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/hospitals" onClick={() => setOpen(false)} className={linkClass}>
              Hospital Network
            </NavLink>
            <NavLink
              to="/international-patients"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              International Patients
            </NavLink>
            <NavLink
              to="/success-stories"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Success Stories
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-3 bg-green-600 text-white text-center rounded-full font-medium"
            >
              Free Consultation
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
