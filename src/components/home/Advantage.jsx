import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { 
  ShieldCheck, 
  Stethoscope, 
  Globe, 
  ArrowUpRight, 
  ShieldPlus, 
  BadgeDollarSign, 
  HeartHandshake 
} from "lucide-react";

export default function Advantage() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Top Indian Hospitals",
      desc: "Direct access to NABH & JCI accredited hospitals equipped with world-class infrastructure and advanced medical technology.",
      color: "hover:bg-emerald-50/50"
    },
    {
      icon: Stethoscope,
      title: "Globally Recognized Specialists",
      desc: "Treatment guided by internationally trained doctors with decades of expertise across major super-specialties.",
      color: "hover:bg-green-50/50"
    },
    {
      icon: Globe,
      title: "End-to-End Patient Support",
      desc: "Seamless coordination covering visas, travel, accommodation, treatment planning, and post-care recovery.",
      color: "hover:bg-teal-50/50"
    },
   
  ];

  return (
    <section className="relative py-32 bg-[#F9FFF7] overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.15]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-green-600 font-bold tracking-widest uppercase text-sm"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#062419]"
          >
            The <span className="text-green-600">Lemoncaps</span> Advantage
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-xl text-[#0a3d2e] font-medium leading-relaxed opacity-90"
          >
            A trusted medical tourism experience built on transparency,
            clinical excellence, and patient-first care.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-green-100/50 shadow-sm transition-all duration-500 ${item.color}`}
              >
                {/* Micro-Interaction Arrow */}
                <div className="absolute top-6 right-6 text-green-200 group-hover:text-green-600 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={22} />
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md text-green-600 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-500 border border-green-50">
                  <Icon size={26} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-bold text-[#062419] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-[#0a3d2e]/80 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>

                {/* Progress-style accent */}
                <div className="mt-6 w-full h-[1px] bg-green-100 overflow-hidden">
                  <div className="h-full bg-green-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}