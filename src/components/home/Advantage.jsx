import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { ShieldCheck, Stethoscope, Globe, ArrowUpRight } from "lucide-react";

export default function Advantage() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Top Indian Hospitals",
      desc: "Direct access to NABH & JCI accredited hospitals equipped with world-class infrastructure and advanced medical technology."
    },
    {
      icon: Stethoscope,
      title: "Globally Recognized Specialists",
      desc: "Treatment guided by internationally trained doctors with decades of expertise across major super-specialties."
    },
    {
      icon: Globe,
      title: "End-to-End Patient Support",
      desc: "Seamless coordination covering visas, travel, accommodation, treatment planning, and post-care recovery."
    }
  ];

  return (
    <section className="relative py-32 bg-white border-b border-green-50">
      
      {/* Precision Grid Pattern with Mint Green tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#062419]"
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
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group relative bg-green rounded-[2.5rem] p-10 border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                {/* Micro-Interaction Arrow using Deep Green */}
                <div className="absolute top-8 right-8 text-green-200 group-hover:text-green-600 transition-colors">
                    <ArrowUpRight size={20} />
                </div>

                {/* Icon Container with Mint to Solid Green transition */}
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700/50 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center mb-8 transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#062419] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#0a3d2e] leading-relaxed text-sm font-medium opacity-80">
                  {item.desc}
                </p>

                {/* Bottom Accent Line using Brand Green */}
                <div className="mt-8 h-1 w-0 group-hover:w-12 bg-green-500 rounded-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}