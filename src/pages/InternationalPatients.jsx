import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import waitingImg from "../assets/images/waiting-period.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function InternationalPatients() {
  return (
    <section className="bg-white">
      {/* HERO - Deep Forest Palette */}
      <div className="relative pt-32 pb-24 border-b border-green-50 overflow-hidden">
        {/* Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:20px_20px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest"
          >
            <Globe size={12} /> Global Patient Facilitation
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            International <span className="text-green-600">Patients</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
          >
            Trusted by patients worldwide for affordable, high-quality medical care in India, delivered with compassion and transparency.
          </motion.p>
        </div>
      </div>

      {/* WHY INDIA - Deep Green Accents */}
      <div className="py-24 border-b border-green-50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight">
              Why India for Medical Treatment?
            </h2>
            <div className="h-1.5 w-20 bg-green-500 mt-6 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-green-600" />,
                title: "World-Class Healthcare",
                desc: "Internationally accredited hospitals and globally trained doctors.",
              },
              {
                icon: <ShieldCheck className="text-green-600" />,
                title: "Advanced Technology",
                desc: "Latest procedures, equipment, and internationally accepted protocols.",
              },
              {
                icon: <Clock className="text-green-600" />,
                title: "Significant Cost Savings",
                desc: "Save up to 60–80% compared to treatment costs in Western countries.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-green-100 rounded-[2.5rem] p-10 hover:border-green-300 transition-all duration-300 group shadow-sm shadow-green-900/5"
              >
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#062419] tracking-tight">{item.title}</h3>
                <p className="mt-4 text-[#0a3d2e] leading-relaxed text-sm font-medium opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL PATIENTS - Deep Green Flags */}
      <div className="py-20 border-b border-green-50 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold text-center text-[#062419] mb-12 uppercase tracking-widest">Trusted Patients From</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "USA", flag: "🇺🇸" },
              { name: "UK", flag: "🇬🇧" },
              { name: "Germany", flag: "🇩🇪" },
              { name: "Africa", flag: "🌍" },
              { name: "Middle East", flag: "🕌" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-8 py-4 bg-white border border-green-100 rounded-full flex items-center gap-3 text-[#062419] font-bold hover:border-green-600 hover:bg-green-50 transition-all cursor-default"
              >
                <span className="text-xl">{item.flag}</span>
                {item.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WAITING PERIOD - Medical Mint Accents */}
      <div className="py-24 border-b border-green-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Reduced Waiting Periods
            </h2>
            <p className="mt-6 text-lg text-[#0a3d2e] leading-relaxed font-medium opacity-80">
              India offers faster access to critical procedures, avoiding long waiting lists common in many countries.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Faster surgery scheduling",
                "Immediate specialist consultations",
                "Shorter overall treatment timelines"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-[#062419] font-bold">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="text-sm tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative p-4">
            <div className="absolute inset-0 bg-green-50 rounded-[3rem] translate-x-4 translate-y-4 -z-10 opacity-70" />
            <img
              src={waitingImg}
              alt="Waiting period comparison"
              className="rounded-[2.5rem] w-full border-2 border-white shadow-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* COST COMPARISON - Deep Forest Cards */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#062419] tracking-tight">Treatment Cost Comparison</h2>
            <p className="mt-2 text-[#0a3d2e] font-medium italic text-base opacity-70">A fraction of global healthcare costs with uncompromised quality.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { proc: "Heart Surgery", india: "$6,000", abroad: "$45,000", save: "80%" },
              { proc: "Knee Replacement", india: "$5,500", abroad: "$40,000", save: "75%" },
              { proc: "IVF Treatment", india: "$3,000", abroad: "$20,000", save: "70%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white border border-green-100 rounded-3xl p-8 hover:border-green-300 transition-all group shadow-sm shadow-green-900/5"
              >
                <h3 className="font-bold text-lg text-[#062419] mb-6 border-b border-green-50 pb-4">{item.proc}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">India Package</span>
                    <span className="text-2xl font-black text-green-600 tracking-tight">{item.india}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-[#0a3d2e]/50 font-bold uppercase tracking-widest">Global Avg.</span>
                    <span className="text-sm text-[#0a3d2e]/40 line-through">{item.abroad}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-green-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-white bg-green-600 px-3 py-1.5 rounded-lg uppercase">Save {item.save}</span>
                  <div className="text-[10px] text-[#0a3d2e]/60 font-bold uppercase tracking-widest">Est. Savings</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Deep Forest Floating Card */}
      <div className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10 leading-tight">
            Begin Your Medical Journey
          </h2>
          <p className="mt-6 text-[#d1fae5] relative z-10 text-lg font-medium max-w-xl mx-auto leading-relaxed opacity-90">
            From consultation to recovery, our international patient team supports you every step of the way with confidence.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 mt-12 px-12 py-5 bg-green-500 text-[#062419] rounded-full font-black text-lg hover:bg-white transition-all relative z-10 shadow-xl shadow-green-900/40 active:scale-95"
          >
            Get Free Consultation
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}