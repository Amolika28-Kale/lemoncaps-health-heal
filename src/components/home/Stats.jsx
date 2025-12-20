import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";

export default function Stats() {
  const stats = [
    { value: "1500+", label: "International Patients Assisted" },
    { value: "200+", label: "Partner Hospitals" },
    { value: "1,000+", label: "Specialist Doctors" },
    { value: "95%", label: "Patient Satisfaction Rate" },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-green-50 overflow-hidden">
      
      {/* Background Precision Grid - Mint tint for medical Blueprint feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Badge - Deep Forest text with Brand Green border */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
        >
          Trust & Scale
        </motion.span>

        {/* Heading - Deep Forest Green (#062419) */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#062419] tracking-tight leading-tight"
        >
          Trusted by patients <br className="hidden sm:block" /> across the globe
        </motion.h2>

        {/* Description - Dark Teal (#0a3d2e) */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-xl text-[#0a3d2e] max-w-3xl mx-auto font-medium opacity-90 leading-relaxed"
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
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 border border-green-100 hover:border-green-300 transition-all duration-300 shadow-sm shadow-green-900/5 group"
            >
              {/* Stat Value - Brand Green */}
              <p className="text-4xl sm:text-5xl md:text-6xl font-black text-green-600 tracking-tighter transition-transform group-hover:scale-110 duration-500">
                {item.value}
              </p>
              
              {/* Decorative Accent Line */}
              <div className="h-1 w-10 bg-green-50 group-hover:bg-green-500 group-hover:w-20 mx-auto mt-6 rounded-full transition-all duration-500"></div>

              {/* Stat Label - Deep Forest Green */}
              <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#062419] opacity-70 group-hover:opacity-100">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}