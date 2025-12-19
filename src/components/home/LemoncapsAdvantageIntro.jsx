import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function LemoncapsAdvantageIntro() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      
      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 text-sm rounded-full 
                     bg-green-100 text-green-700 font-semibold"
        >
          ⭐ The Lemoncaps Advantage
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 max-w-5xl"
        >
          Direct access to India’s{" "}
          <span className="text-green-600">best hospitals</span>, backed by{" "}
          <span className="text-green-600">world-class infrastructure</span>{" "}
          and globally recognized medical experts.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl"
        >
          A seamless, technology-driven medical journey supported by
          transparent processes, ethical care, and round-the-clock concierge assistance.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5,000+", label: "Hospital Beds" },
            { value: "250+", label: "Medical Experts" },
            { value: "500+", label: "Partner Hospitals" },
            { value: "24/7", label: "Patient Concierge" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <p className="text-3xl font-bold text-gray-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
