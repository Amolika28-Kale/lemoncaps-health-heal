import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Heart, Activity, Scissors, Baby, Brain, ShieldCheck, 
  Stethoscope, Plane, MapPin, Headphones, Layout, ArrowRight 
} from "lucide-react";
import travelImg from "../assets/images/travelAssistant.png";
import operationImg from "../assets/images/operations.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className="bg-white overflow-hidden">
      
      {/* HERO SECTION - Deep Forest Palette */}
      <div className="relative pt-32 pb-24 border-b border-green-50">
        {/* Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:20px_20px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Global Healthcare Solutions
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            Healthcare <span className="text-green-600">Services</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
          >
            End-to-end medical tourism solutions delivering world-class
            treatment, global coordination, and complete peace of mind.
          </motion.p>
        </div>
      </div>

      {/* SPECIALIST SERVICES - High Contrast Grid */}
      <div className="py-24 border-b border-green-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Specialist Medical <br /> Facilitation
            </h2>
            <p className="mt-6 text-lg text-[#0a3d2e] font-medium leading-relaxed opacity-80">
              Expertise across cardiology, oncology, orthopaedics, and more, 
              connecting you with India's most renowned medical institutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Patient-centric care", desc: "Personalized support plans", icon: <Stethoscope size={20} /> },
              { title: "All-inclusive packages", desc: "Travel & accommodation", icon: <Layout size={20} /> },
              { title: "Global specialists", desc: "Top super-specialty doctors", icon: <Activity size={20} /> },
              { title: "High-value procedures", desc: "Transplants & oncology", icon: <ShieldCheck size={20} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-green-100 rounded-[2rem] bg-white hover:border-green-300 transition-all duration-300 shadow-sm shadow-green-900/5"
              >
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#062419]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#0a3d2e] font-medium opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDICAL SPECIALTIES - Theme Consistent Icons */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#062419] tracking-tight">Medical Specialties</h2>
            <div className="h-1.5 w-16 bg-green-500 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cardiology & Surgery", icon: <Heart className="text-red-500" /> },
              { name: "Orthopedics", icon: <Activity className="text-blue-500" /> },
              { name: "Oncology Care", icon: <ShieldCheck className="text-purple-500" /> },
              { name: "IVF & Fertility", icon: <Baby className="text-pink-500" /> },
              { name: "Neurology", icon: <Brain className="text-indigo-500" /> },
              { name: "Cosmetic Surgery", icon: <Scissors className="text-emerald-500" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] border border-green-50 hover:border-green-200 hover:bg-green-50/30 transition-all cursor-default"
              >
                <div className="mb-6 bg-white w-12 h-12 rounded-2xl flex items-center justify-center border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#062419] tracking-tight">{item.name}</h3>
                <p className="mt-3 text-sm text-[#0a3d2e] leading-relaxed font-medium opacity-70">
                  Advanced care delivered by India’s top specialists following global treatment protocols.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TRAVEL ASSISTANCE - Mint Accents */}
      <div className="py-24 border-y border-green-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight mb-10">
              Medical Travel Assistance
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ["Patient logistics", "Transport, stay & coordination"],
                ["Medical evaluation", "Doctor review & consultation"],
                ["Treatment planning", "Hospitals, visa & travel"],
                ["Return support", "Post-care & follow-ups"],
              ].map(([title, desc], i) => (
                <div key={i} className="p-6 bg-white border border-green-100 rounded-2xl hover:border-green-300 transition-colors">
                  <h4 className="font-bold text-[#062419]">{title}</h4>
                  <p className="mt-2 text-sm text-[#0a3d2e] font-medium opacity-70">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative p-4">
            <div className="absolute inset-0 bg-green-50 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
            <img
              src={travelImg}
              alt="Medical travel assistance"
              className="rounded-[2.5rem] w-full border-2 border-white shadow-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* OPERATIONAL EXCELLENCE */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative p-4">
            <div className="absolute inset-0 bg-green-50/50 rounded-[3rem] -z-10 -translate-x-4 translate-y-4" />
             <img
              src={operationImg}
              alt="Operational excellence"
              className="rounded-[2.5rem] w-full border-2 border-white grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
            />
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Operational Excellence
            </h2>
            <div className="mt-10 space-y-4">
              {[
                ["24/7 Support", "Dedicated patient care teams", <Headphones key="1" size={18}/>],
                ["Strategic locations", "HQ in Pune & 7+ cities", <MapPin key="2" size={18}/>],
                ["Healthcare staff", "19+ operations specialists", <Activity key="3" size={18}/>],
                ["Digital outreach", "21+ marketing professionals", <Layout key="4" size={18}/>],
              ].map(([title, desc, icon], i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white border border-green-100 rounded-2xl group hover:border-green-300 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-green-600 bg-green-50 p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">{icon}</div>
                    <div>
                      <h4 className="font-bold text-[#062419]">{title}</h4>
                      <p className="text-sm text-[#0a3d2e] font-medium opacity-70">{desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-green-200 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA SECTION - Deep Forest Forest Style */}
      <div className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10 leading-tight">
            Start Your Treatment Journey Today
          </h2>
          <p className="mt-6 text-[#d1fae5] relative z-10 text-lg font-medium opacity-90">
            Speak with our healthcare experts for a personalized consultation.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 mt-12 px-12 py-5 bg-green-500 text-[#062419] rounded-full font-black text-lg hover:bg-white transition-all relative z-10 shadow-xl shadow-green-900/40 active:scale-95"
          >
            Book Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </section>
  );
}