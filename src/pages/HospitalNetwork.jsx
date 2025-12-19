import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";
import { ShieldCheck, Activity, Award, CheckCircle2, ArrowRight, UserCheck } from "lucide-react";

import meetingImg from "../assets/images/hospital-meeting.png";
import hospitalWardImg from "../assets/images/ward.png";
import operationTheatreImg from "../assets/images/operation-theatre.png";
import patientCareImg from "../assets/images/pateint-care.png";
import infrastructureImg from "../assets/images/infrastructure.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HospitalNetwork() {
  return (
    <section className="bg-white">
      <SEO
        title="Hospital Network | Top Hospitals & Doctors in India"
        description="Partner hospitals with world-class infrastructure, top specialists, and internationally accredited facilities."
        keywords="India hospitals, best doctors India, hospital network medical tourism"
        canonical="https://lemoncapshealth.com/hospital-network"
      />

      {/* HERO - Deep Forest Palette */}
      <div className="relative pt-32 pb-24 border-b border-green-50 overflow-hidden">
        {/* Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:20px_20px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-100"
          >
            <ShieldCheck size={12} className="text-green-600" /> Accredited Medical Network
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            Hospital <span className="text-green-600">Network</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
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
                <div key={i} className="relative group overflow-hidden rounded-2xl border border-green-100 bg-green-50">
                  <img
                    src={img}
                    className="h-48 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    alt="Hospital facility"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* ACCREDITATIONS - Theme Consistent Cards */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Multi-Specialty Tertiary Care", icon: <Activity size={24}/> },
              { title: "NABH & JCI Accredited Facilities", icon: <ShieldCheck size={24}/> },
              { title: "Advanced Diagnostic Centers", icon: <Award size={24}/> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 border border-green-100 hover:border-green-300 transition-all duration-300 group shadow-sm shadow-green-900/5"
              >
                <div className="w-12 h-12 bg-green-50 text-green-700/50 group-hover:bg-green-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#062419] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-[#0a3d2e] text-sm leading-relaxed font-medium opacity-70">
                  State-of-the-art infrastructure with international patient support services tailored for your journey.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INFRASTRUCTURE - Clean Split with Brand Accents */}
      <div className="py-24 border-y border-green-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              World-Class Infrastructure
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "500+ Partner Hospitals",
                "5000+ Beds Nationwide",
                "Advanced Modular OTs",
                "Dedicated Int. Desks"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-[#0a3d2e] font-bold">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                  <span className="text-sm tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative p-4">
            <div className="absolute inset-0 bg-green-50 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-70" />
            <img
              src={infrastructureImg}
              alt="Hospital Infrastructure"
              className="rounded-[2.5rem] w-full border-2 border-white shadow-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* DOCTORS - Deep Forest Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight leading-tight">Doctors & Medical Experts</h2>
            <p className="mt-6 text-lg text-[#0a3d2e] max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
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
                className="group flex items-center justify-between p-6 bg-white border border-green-100 rounded-2xl hover:border-green-600 transition-all cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <UserCheck size={18} />
                  </div>
                  <span className="font-bold text-[#062419] text-sm tracking-tight">{doc}</span>
                </div>
                <ArrowRight size={14} className="text-green-200 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY - Quality Blocks */}
      <div className="py-24 border-t border-green-50 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#062419] tracking-tight">Quality & Patient Safety</h2>
          <p className="mt-4 text-[#0a3d2e] max-w-2xl mx-auto font-medium opacity-70">Strict ethical practices ensure patient safety at every step.</p>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              "International Accreditation",
              "Continuous Quality Audits",
              "Transparent Protocols",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center p-8 bg-white border border-green-100 rounded-[2rem] text-[#062419] font-bold tracking-tight text-sm group hover:border-green-600 transition-all">
                 <CheckCircle2 className="text-green-500 mr-3" size={18} />
                 {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Deep Forest Floating Card */}
      <div className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10 leading-tight">
            Access India’s Best Hospitals
          </h2>
          <p className="mt-6 text-[#d1fae5] relative z-10 text-lg font-medium opacity-90">
            Let us connect you with the right hospital and specialist for your care.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 mt-12 px-12 py-5 bg-green-500 text-[#062419] rounded-full font-black text-lg hover:bg-white transition-all relative z-10 shadow-xl shadow-green-900/40 active:scale-95"
          >
            Talk to Our Experts
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}