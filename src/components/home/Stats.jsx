import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";

export default function Stats() {
  const stats = [
    { value: "5,000+", label: "International Patients Assisted" },
    { value: "200+", label: "Partner Hospitals" },
    { value: "1,000+", label: "Specialist Doctors" },
    { value: "95%", label: "Patient Satisfaction Rate" },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block mb-6 px-5 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold"
        >
          Trust & Scale
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Trusted by patients across the globe
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Our growing global footprint reflects consistent outcomes,
          transparency, and patient-first care.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition"
            >
              <p className="text-5xl font-extrabold text-green-600">
                {item.value}
              </p>
              <p className="mt-3 text-gray-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
