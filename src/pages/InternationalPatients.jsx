import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Clock, ShieldCheck, ArrowRight, CheckCircle2, TrendingDown } from "lucide-react";
import waitingImg from "../assets/images/waiting-patients.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function InternationalPatients() {
  return (
    <section className="bg-white selection:bg-green-100">
      {/* HERO SECTION */}
      <div className="relative pt-40 pb-32 border-b border-green-50/50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/40 rounded-full blur-[120px] -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-50/60 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-green-100 shadow-sm shadow-green-900/5 text-green-700 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <Globe size={14} className="opacity-80" /> Global Patient Facilitation
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold text-[#062419] tracking-tight leading-[1.05]"
          >
            International <span className="relative inline-block">
              <span className="relative z-10 text-green-600">Patients</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-10 text-xl md:text-2xl text-[#0a3d2e]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Trusted by patients worldwide for affordable, high-quality medical care in India, delivered with compassion and transparency.
          </motion.p>
        </div>
      </div>

      {/* WHY INDIA SECTION */}
      <div className="py-32 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062419] tracking-tight">
              Why India for Medical Treatment?
            </h2>
            <div className="h-1.5 w-24 bg-green-500 mt-8 rounded-full shadow-lg shadow-green-500/20" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <Globe size={28} />,
                title: "World-Class Healthcare",
                desc: "Internationally accredited hospitals and globally trained doctors.",
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Advanced Technology",
                desc: "Latest procedures, equipment, and internationally accepted protocols.",
              },
              {
                icon: <TrendingDown size={28} />,
                title: "Significant Cost Savings",
                desc: "Save up to 60–80% compared to treatment costs in Western countries.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white rounded-[3rem] p-12 border border-green-100/50 shadow-xl shadow-green-900/[0.03] hover:shadow-green-900/[0.08] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#062419] tracking-tight">{item.title}</h3>
                <p className="mt-5 text-[#0a3d2e]/70 leading-relaxed text-base font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    {/* GLOBAL PATIENTS FLAGS */}
<div className="py-24 border-y border-green-50 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-xs font-black text-center text-green-600 mb-14 uppercase tracking-[0.4em]">
      Trusted Patients From
    </h2>

    <div className="flex flex-wrap justify-center gap-6">
      {[
        { name: "USA", flag: "🇺🇸" },
        { name: "UK", flag: "🇬🇧" },
        { name: "Germany", flag: "🇩🇪" },
        { name: "Africa", flag: "🌍" },
        { name: "Middle East", flag: "🕌" },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4, scale: 1.03 }}
          className="
            px-10 py-5
            bg-white
            border border-green-100
            rounded-3xl
            flex items-center gap-4
            text-[#062419] font-bold
            shadow-sm
            hover:border-green-400
            hover:shadow-xl hover:shadow-green-900/10
            transition-all
            cursor-default
          "
        >
          {/* FLAG – FULL COLOR */}
          <span className="text-3xl leading-none">
            {item.flag}
          </span>

          {/* COUNTRY NAME */}
          <span className="text-lg tracking-tight">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* WAITING PERIOD SECTION */}
      <div className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-[#062419] tracking-tight leading-tight">
              Reduced <span className="text-green-600">Waiting Periods</span>
            </h2>
            <p className="mt-8 text-xl text-[#0a3d2e]/80 leading-relaxed font-medium">
              India offers faster access to critical procedures, avoiding long waiting lists common in many countries.
            </p>

            <div className="mt-12 space-y-6">
              {[
                "Faster surgery scheduling",
                "Immediate specialist consultations",
                "Shorter overall treatment timelines"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-[#062419] font-bold">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="text-green-600" size={16} />
                  </div>
                  <span className="text-lg tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-100/50 rounded-[4rem] translate-x-8 translate-y-8 -z-10 blur-2xl opacity-50" />
            <div className="relative p-3 bg-white border border-green-50 rounded-[3.5rem] shadow-2xl shadow-green-900/10">
              <img
                src={waitingImg}
                alt="Healthcare Excellence"
                className="w-full aspect-square object-cover rounded-[3rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-green-50 hidden md:block">
                <div className="text-4xl font-black text-green-600">0%</div>
                <div className="text-[10px] font-black text-[#062419] uppercase tracking-widest mt-1">Waiting Lists</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* COST COMPARISON SECTION */}
      <div className="py-32 bg-[#fafdfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062419] tracking-tight">Treatment Cost Comparison</h2>
            <p className="mt-6 text-[#0a3d2e]/60 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Experience a fraction of global healthcare costs with uncompromised clinical quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { proc: "Heart Surgery", india: "$6,000", abroad: "$45,000", save: "80%" },
              { proc: "Knee Replacement", india: "$5,500", abroad: "$40,000", save: "75%" },
              { proc: "IVF Treatment", india: "$3,000", abroad: "$20,000", save: "70%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white border border-green-100 rounded-[2.5rem] p-10 shadow-sm shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500"
              >
                <h3 className="font-bold text-xl text-[#062419] mb-8 pb-5 border-b border-green-50">{item.proc}</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] text-green-600 font-black uppercase tracking-[0.15em]">Avg Cost in India</span>
                    <span className="text-3xl font-black text-[#062419] tracking-tighter">{item.india}</span>
                  </div>
                  <div className="flex justify-between items-center opacity-40">
                    <span className="text-[10px] text-[#0a3d2e] font-bold uppercase tracking-widest">Global Avg.</span>
                    <span className="text-lg font-bold line-through">{item.abroad}</span>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-green-50 flex items-center justify-between">
                  <div className="bg-green-600 text-white text-[11px] font-black px-4 py-2 rounded-xl shadow-lg shadow-green-600/20">
                    SAVE {item.save}
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-[#0a3d2e]/40 uppercase tracking-widest">Est. Savings</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA SECTION */}
      <div className="px-6 py-32 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-[#062419] rounded-[4rem] p-16 md:p-28 text-center text-white relative overflow-hidden"
        >
          {/* Decorative shapes for the premium look */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-0" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-400/10 rounded-full blur-[100px] -z-0" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Begin Your Medical Journey
            </h2>
            <p className="mt-8 text-green-100/70 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              From initial consultation to final recovery, our international patient team supports you every step of the way with clinical excellence.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 mt-14 px-14 py-6 bg-green-500 text-[#062419] rounded-full font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-green-900/50 active:scale-95"
            >
              Get Free Consultation
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}