import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { hospitalMenu } from "../../data/hospitalMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hospitalOpen, setHospitalOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

     <NavLink to="/" className="group flex items-center gap-1.5">
  <div className="flex items-baseline">
    <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
      Lemon
    </span>
    <span className="text-2xl font-light tracking-tighter text-emerald-600">
      caps
    </span>
    {/* Decorative medical "plus" or dot */}
    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
  </div>
</NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8 text-sm relative">

          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>

 {/* SERVICES */}
<NavLink to="/services" className={linkClass}>
  Services
</NavLink>



          {/* HOSPITAL MEGA MENU */}
  <div
  className="relative"
  onMouseEnter={() => setHospitalOpen(true)}
  onMouseLeave={() => setHospitalOpen(false)}
>
  <NavLink
    to="/hospitals"
    className="flex items-center gap-1 text-gray-700 hover:text-green-600"
  >
    Hospital Network <ChevronDown size={16} />
  </NavLink>

  {hospitalOpen && (
    <div className="absolute left-0 top-full mt-4 w-[720px] bg-white shadow-xl border rounded-xl p-6 grid grid-cols-3 gap-6">
      {hospitalMenu.map((section) => (
        <div key={section.title}>
          <h4 className="font-semibold text-gray-900 mb-3">
            {section.title}
          </h4>

          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/hospitals/${item.slug}`}
                  className="text-gray-600 hover:text-green-600 text-sm block"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )}
</div>

          <NavLink to="/international-patients" className={linkClass}>
            International Patients
          </NavLink>
          <NavLink to="/success-stories" className={linkClass}>
            Success Stories
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
      <a
  href="https://calendly.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
>
  Free Consultation
</a>


        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
{open && (
  <div className="md:hidden fixed inset-0 z-50 bg-black/40">
    
    {/* Drawer */}
    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <span className="text-xl font-bold text-green-600">Lemoncaps</span>
        <button onClick={() => setOpen(false)}>
          <X size={26} />
        </button>
      </div>

      {/* Menu Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-base">

        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="block font-medium"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className="block font-medium"
        >
          About
        </NavLink>

    <NavLink
  to="/services"
  onClick={() => setOpen(false)}
  className="block font-medium"
>
  Services
</NavLink>


     

        {/* HOSPITAL NETWORK */}
        <div   className="relative"
  onMouseEnter={() => setHospitalOpen(true)}
  onMouseLeave={() => setHospitalOpen(false)}>
          <NavLink
    to="/hospitals"
    className="flex items-center gap-1 text-gray-700 hover:text-green-600"
  >
    Hospital Network <ChevronDown size={16} />
  </NavLink>

          {hospitalOpen && (
            <div className="mt-4 pl-3 space-y-3 text-gray-600">
              {hospitalMenu.flatMap(s => s.items).map(item => (
                <NavLink
                  key={item.slug}
                  to={`/hospitals/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/international-patients"
          onClick={() => setOpen(false)}
          className="block font-medium"
        >
          International Patients
        </NavLink>

        <NavLink
          to="/success-stories"
          onClick={() => setOpen(false)}
          className="block font-medium"
        >
          Success Stories
        </NavLink>
         <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className="block font-medium"
        >
          Contact
        </NavLink>
      </div>

      {/* CTA */}
      <div className="px-6 py-5 border-t">
            <a
  href="https://calendly.com/"
  target="_blank"
  rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block text-center w-full py-3 bg-green-600 text-white rounded-full font-semibold"
        >
          Free Consultation
        </a>
      </div>
    </div>
  </div>
)}
    </header>
  );
}