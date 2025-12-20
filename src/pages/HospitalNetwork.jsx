import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import { ShieldCheck, Activity, Award, CheckCircle2, ArrowRight, UserCheck, Microscope, Building2 } from "lucide-react";

import meetingImg from "../assets/images/hospital-meeting.png";
import hospitalWardImg from "../assets/images/ward.png";
import operationTheatreImg from "../assets/images/operation-theatre.png";
import patientCareImg from "../assets/images/pateint-care.png";
import bedsImg from "../assets/images/patients-beds.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HospitalNetwork() {
  return (
    <section className="bg-white overflow-x-hidden">
      <SEO
        title="Hospital Network | Top Hospitals & Doctors in India"
        description="Partner hospitals with world-class infrastructure, top specialists, and internationally accredited facilities."
        keywords="India hospitals, best doctors India, hospital network medical tourism"
        canonical="https://lemoncapshealth.com/hospital-network"
      />

      {/* HERO SECTION */}
      <div className="relative pt-40 pb-32 border-b border-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-[0.2em] border border-green-100 shadow-sm"
          >
            <ShieldCheck size={14} className="text-green-600 animate-pulse" /> Accredited Medical Network
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold text-[#062419] tracking-tight leading-[1.05]"
          >
            Hospital <span className="relative inline-block text-green-600">
              Network
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 3 160 3 198 10" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-10 text-xl md:text-2xl text-[#0a3d2e]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Collaborating with India’s most trusted and internationally accredited hospitals to deliver global standards of care.
          </motion.p>
        </div>
      </div>

        {/* PARTNERSHIPS - Premium Image Grid */}
      <div className="py-24 border-b border-green-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Hospital Partnerships <br /> & Medical Excellence
            </h2>
            <p className="mt-6 text-lg text-[#0a3d2e] font-medium leading-relaxed opacity-80">
              Strategic partnerships with India’s leading hospital chains, 
              providing access to advanced infrastructure and expert doctors.
            </p>
          </motion.div>

  <motion.div
  className="grid grid-cols-2 gap-4"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[meetingImg, hospitalWardImg, operationTheatreImg, patientCareImg].map(
    (img, i) => (
      <div
        key={i}
        className="relative group overflow-hidden rounded-2xl border border-green-100 bg-green-50"
      >
        <img
          src={img}
          alt="Hospital facility"
          className="
            h-48 w-full object-cover
            transition-transform duration-700 ease-out
            scale-105 group-hover:scale-110
          "
        />
      </div>
    )
  )}
</motion.div>

        </div>
      </div>


      {/* ACCREDITATIONS CARDS */}
      <div className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Multi-Specialty Tertiary Care", icon: <Activity size={28}/>, desc: "Comprehensive treatment across all major specialties with cutting-edge medical technology." },
              { title: "NABH & JCI Accredited Facilities", icon: <ShieldCheck size={28}/>, desc: "Adherence to the highest international safety standards for quality patient care." },
              { title: "Advanced Diagnostic Centers", icon: <Microscope size={28}/>, desc: "Precision diagnostics powered by the latest imaging and laboratory equipment." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[3rem] p-12 border border-green-100 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white rounded-[1.5rem] flex items-center justify-center mb-10 transition-all duration-500 transform group-hover:rotate-[10deg]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#062419] tracking-tight leading-snug mb-4">
                  {item.title}
                </h3>
                <p className="text-[#0a3d2e]/70 text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-green-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INFRASTRUCTURE SECTION */}
      <div className="py-28 bg-[#062419] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              World-Class <br /> 
              <span className="text-green-400">Infrastructure</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "500+ Partner Hospitals",
                "5000+ Beds Nationwide",
                "Advanced Modular OTs",
                "Dedicated Int. Desks"
              ].map((text, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 text-green-50/90 font-semibold"
                >
                  <div className="bg-green-500/20 p-1.5 rounded-full">
                    <CheckCircle2 className="text-green-400" size={20} />
                  </div>
                  <span className="text-lg tracking-tight">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500 rounded-[3.5rem] rotate-3 -z-10 opacity-20" />
            <img
              src={bedsImg}
              alt="Hospital Infrastructure"
              className="rounded-[3rem] w-full border-8 border-[#0a3d2e] shadow-2xl shadow-black/40"
            />
          </motion.div>
        </div>
      </div>

      {/* DOCTORS GRID */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#062419] tracking-tight">Doctors & Medical Experts</h2>
            <p className="mt-6 text-xl text-[#0a3d2e]/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Access India’s most experienced and globally recognized specialists across major medical disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Cardiac Surgeons",
              "Oncologists",
              "Orthopedic Specialists",
              "IVF & Fertility Experts",
            ].map((doc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group flex items-center justify-between p-8 bg-white border border-green-100 rounded-3xl hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <UserCheck size={22} />
                  </div>
                  <span className="font-bold text-[#062419] text-base tracking-tight">{doc}</span>
                </div>
                <ArrowRight size={18} className="text-green-100 group-hover:text-green-500 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY SECTION */}
      <div className="py-24 border-t border-green-50 bg-[#f8faf9]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#062419] tracking-tight mb-4">Quality & Patient Safety</h2>
          <p className="text-[#0a3d2e]/70 max-w-2xl mx-auto font-medium text-lg">Strict ethical practices ensure patient safety at every step of your medical journey.</p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              "International Accreditation",
              "Continuous Quality Audits",
              "Transparent Protocols",
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center p-10 bg-white border-2 border-transparent shadow-sm hover:shadow-md hover:border-green-100 rounded-[2.5rem] text-[#062419] font-bold tracking-tight text-base transition-all"
              >
                 <CheckCircle2 className="text-green-500 mr-4" size={24} />
                 {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="px-6 py-32 bg-white">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-[#062419] to-[#0a3d2e] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(6,36,25,0.4)]"
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10 leading-[1.1]">
            Access India’s <br className="hidden md:block" /> Best Hospitals
          </h2>
          <p className="mt-8 text-green-100/80 relative z-10 text-xl font-medium max-w-xl mx-auto">
            Let us connect you with the right hospital and specialist for your unique care requirements.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 mt-14 px-14 py-6 bg-green-500 text-[#062419] rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all relative z-10 shadow-2xl shadow-black/20"
          >
            Talk to Our Experts
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}