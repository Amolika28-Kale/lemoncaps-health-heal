import { motion } from "framer-motion";
import { Star, ShieldCheck, Activity, Globe, HeartPulse } from "lucide-react";

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function LemoncapsAdvantageIntro() {
  return (
    <section className="relative py-32 bg-[#062419] overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 bg-[radial-gradient(#166534_1px,transparent_1px)] [background-size:40px_40px] opacity-20 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-600/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full 
                     bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <Star size={14} className="text-green-400 fill-green-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">
            The Lemoncaps Advantage
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] text-white max-w-4xl tracking-tight"
            >
              Direct access to India’s{" "}
              <span className="text-green-500 relative inline-block">
                best hospitals
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1.5 bg-green-500/30 rounded-full" 
                />
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 text-xl text-green-100/70 max-w-2xl font-medium leading-relaxed"
            >
              A seamless, technology-driven medical journey supported by
              transparent processes, ethical care, and round-the-clock concierge assistance.
            </motion.p>
          </div>

          {/* Interactive Feature Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: <ShieldCheck />, title: "Ethical Standards", desc: "No hidden costs" },
              { icon: <Activity />, title: "Precision Care", desc: "Top-tier surgeons" },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
                  {card.icon}
                </div>
                <h4 className="text-white font-bold tracking-tight">{card.title}</h4>
                <p className="text-green-100/40 text-xs mt-1">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section with Glassmorphism Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5,000+", label: "Hospital Beds", icon: <Activity size={16}/> },
            { value: "250+", label: "Medical Experts", icon: <Star size={16}/> },
            { value: "500+", label: "Partner Hospitals", icon: <Globe size={16}/> },
            { value: "24/7", label: "Patient Concierge", icon: <HeartPulse size={16}/> },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 group overflow-hidden"
            >
              {/* Floating Icon Background */}
              <div className="absolute -right-4 -bottom-4 text-white/[0.03] group-hover:text-green-500/10 transition-colors duration-500">
                <div className="scale-[4]">{item.icon}</div>
              </div>

              <div className="relative z-10">
                <p className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-green-400 transition-colors duration-300">
                  {item.value}
                </p>
                <div className="flex items-center gap-2 mt-4">
                   <div className="w-1 h-4 bg-green-500 rounded-full" />
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500/60 group-hover:text-green-300 transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}