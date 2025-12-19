import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import { ShieldCheck, Stethoscope, Globe } from "lucide-react";

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
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      
      {/* Soft background accent */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
        >
          The <span className="text-green-600">Lemoncaps</span> Advantage
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto"
        >
          A trusted medical tourism experience built on transparency,
          clinical excellence, and patient-first care.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-10"
        >
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
