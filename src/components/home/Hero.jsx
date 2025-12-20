import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hospitalImg from "../../assets/images/doctors.avif";
import { ArrowRight, Sparkles, Activity, ShieldCheck, HeartPulse } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden selection:bg-green-100">
      {/* Background Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 -z-10" />
      
      {/* Dynamic Glow Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          {/* Trust Badge with Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50/80 backdrop-blur-sm border border-green-100 text-green-700 text-[11px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <Sparkles size={14} className="text-green-500 animate-pulse" />
            Trusted Globally for Medical Excellence
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#062419] leading-[1.05] tracking-tight">
            Lemoncaps <br /> 
            <span className="text-green-600 relative inline-block">
              Health & Heal
              <svg className="absolute -bottom-2 left-0 w-full opacity-30" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C40 3 160 3 198 10" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="mt-10 text-xl md:text-2xl text-[#0a3d2e]/80 max-w-xl leading-relaxed font-medium">
            Premium healthcare facilitation connecting international patients
            to India’s top accredited hospitals and world-class doctors.
          </p>

          {/* CTA Buttons with Hover Scaling */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              to="/services"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-full font-black text-lg hover:bg-[#062419] transition-all duration-500 shadow-xl shadow-green-900/10 hover:shadow-green-900/20 transform hover:-translate-y-1"
            >
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center px-10 py-5 bg-white border-2 border-[#062419] text-[#062419] rounded-full font-black text-lg hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Free Consultation
            </Link>
          </div>

          {/* Stats Section with Glassmorphism */}
          <div className="mt-20 p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-green-100/50 flex flex-wrap gap-10 md:gap-16 shadow-sm">
              <StatItem value="500+" label="Partners" />
              <StatItem value="15+" label="Countries" />
              <StatItem value="24/7" label="Support" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:ml-auto group"
        >
          {/* Shifted Aesthetic Frame */}
          <div className="absolute inset-0 bg-green-500 rounded-[3rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 ease-out" />
          
          <div className="relative z-10 p-4 bg-white border border-green-50 rounded-[3.5rem] shadow-2xl">
            <div className="relative rounded-[2.8rem] overflow-hidden aspect-[4/5] lg:aspect-[3.8/5]">
              <img
                src={hospitalImg}
                alt="Partner Hospital Doctors"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062419]/30 to-transparent" />
            </div>

            {/* Floating Health Card Decoration */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-12 bottom-12 hidden md:flex items-center gap-4 bg-white p-5 rounded-3xl shadow-2xl border border-green-50"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <HeartPulse size={24} />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-black text-[#062419] tracking-tighter tabular-nums">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-green-600 font-black mt-1">{label}</span>
    </div>
  );
}