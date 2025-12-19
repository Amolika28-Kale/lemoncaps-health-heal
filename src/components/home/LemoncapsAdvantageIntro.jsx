import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import { Star } from "lucide-react";

export default function LemoncapsAdvantageIntro() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* Background Grid - Mint Green tint instead of grey */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>
      
      {/* Soft Top-Right Glow - Brand Green tint */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-50 rounded-full blur-[120px] opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Eyebrow - Using Deep Green and Solid Brand Green */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full 
                     bg-white border border-green-100 shadow-sm"
        >
          <Star size={14} className="text-green-600 fill-green-600" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">
            The Lemoncaps Advantage
          </span>
        </motion.div>

        {/* Heading - Deep Forest Green (#062419) */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-[1.15] text-[#062419] max-w-5xl tracking-tight"
        >
          Direct access to India’s{" "}
          <span className="text-green-600 underline decoration-green-100 underline-offset-8 decoration-4">
            best hospitals
          </span>, backed by world-class infrastructure and global medical experts.
        </motion.h2>

        {/* Subtext - Deep Dark Teal (#0a3d2e) */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-xl text-[#0a3d2e] max-w-3xl font-medium leading-relaxed opacity-90"
        >
          A seamless, technology-driven medical journey supported by
          transparent processes, ethical care, and round-the-clock concierge assistance.
        </motion.p>

        {/* Stats - Using Deep Green for values and Dark Teal for labels */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-green-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5,000+", label: "Hospital Beds" },
            { value: "250+", label: "Medical Experts" },
            { value: "500+", label: "Partner Hospitals" },
            { value: "24/7", label: "Patient Concierge" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group border-r last:border-0 border-green-50"
            >
              <div className="pr-4">
                <p className="text-4xl font-bold text-[#062419] tracking-tighter transition-colors group-hover:text-green-600">
                  {item.value}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-green-700/70">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}