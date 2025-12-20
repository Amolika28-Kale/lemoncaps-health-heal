// src/components/common/Footer.jsx
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">
              Lemoncaps <span className="text-green-500">Health & Heal</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Global medical tourism excellence connecting international patients 
              to India’s premier medical facilities with transparency and compassion.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/10">
              <Heart size={12} className="text-green-500" fill="currentColor" /> Accredited Care
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 border-l-2 border-green-500 pl-3">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Services", "Success Stories"].map((item) => (
                <li key={item}>
                  <NavLink 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="group text-sm text-slate-400 hover:text-white transition-all flex items-center gap-2 font-light"
                  >
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 border-l-2 border-green-500 pl-3">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: "International Patients", path: "/international-patients" },
                { name: "Hospital Network", path: "/hospital-network" },
                { name: "Contact Support", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path} 
                    className="group text-sm text-slate-400 hover:text-white transition-all flex items-center gap-2 font-light"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 border-l-2 border-green-500 pl-3">Contact</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-green-500 group-hover:text-black transition-all border border-white/10">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Email Us</span>
                    <span className="text-sm text-slate-300 font-light group-hover:text-white transition-colors">info@lemoncapshealth.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-green-500 group-hover:text-black transition-all border border-white/10">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Call Support</span>
                    <span className="text-sm text-slate-300 font-light group-hover:text-white transition-colors">+91 7350767410</span>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-green-500 group-hover:text-black transition-all border border-white/10">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Location</span>
                    <span className="text-sm text-slate-300 font-light group-hover:text-white transition-colors">Pune, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-light tracking-wide">
            © {currentYear} Lemoncaps Health & Heal. Carefully curated for global wellness.
          </p>
          <div className="flex gap-10">
            <NavLink to="/privacy" className="text-xs text-slate-500 hover:text-green-500 transition-colors font-light">Privacy Policy</NavLink>
            <NavLink to="/terms" className="text-xs text-slate-500 hover:text-green-500 transition-colors font-light">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}