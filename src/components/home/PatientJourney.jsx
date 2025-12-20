import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import {
  CalendarCheck,
  FileSearch,
  Plane,
  Hospital,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PatientJourney() {
  const steps = [
    {
      icon: <CalendarCheck size={26} />,
      title: "Free Online Consultation",
      desc: "Share your medical reports and get an expert opinion within 24 hours."
    },
    {
      icon: <FileSearch size={26} />,
      title: "Medical Review & Treatment Plan",
      desc: "Doctors evaluate your case and suggest the best treatment options."
    },
    {
      icon: <Plane size={26} />,
      title: "Visa, Flights & Stay",
      desc: "Our team manages visa support, flights, airport pickup and hotel stay."
    },
    {
      icon: <Hospital size={26} />,
      title: "Hospital Admission & Treatment",
      desc: "Seamless hospital coordination with dedicated patient support."
    },
    {
      icon: <HeartPulse size={26} />,
      title: "Recovery & Follow-up Care",
      desc: "Post-treatment recovery, follow-ups and continued medical guidance."
    },
  ];

  return (
    <section className="relative py-24 bg-white border-b border-green-50 overflow-hidden">
      {/* Background Precision Grid - Mint Green tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:40px_40px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-green-50 border border-green-100 text-green-700">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#062419] tracking-tight">
            Your treatment journey with{" "}
            <span className="text-green-600 underline decoration-green-100 underline-offset-8">Lemoncaps</span>
          </h2>

          <p className="mt-6 text-lg text-[#0a3d2e] font-medium opacity-90">
            A simple, transparent and fully managed medical journey — from
            consultation to recovery.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
className="relative mt-20 grid md:grid-cols-5 gap-4"

        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
className="group relative bg-green-100/80 border border-green-300 rounded-[2rem] p-8 text-center transition-all duration-300 hover:border-green-400 hover:bg-green-150 shadow-sm shadow-green-900/5"
            >
              {/* Connector Arrow (Desktop Only) using Deep Green */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-green-100 group-hover:text-green-400 transition-colors">
                  <ArrowRight size={20} />
                </div>
              )}

              {/* Step Number Badge - Mint to Green */}
              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold text-green-700/50 group-hover:text-green-700 transition-colors">
                  {`0${i + 1}`}
                </span>
              </div>

              {/* Icon Container with Theme transition */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 text-green-600 flex items-center justify-center transition-all group-hover:bg-green-600 group-hover:text-white duration-300">
                {step.icon}
              </div>

              <h3 className="mt-8 text-lg font-bold text-[#062419] leading-tight min-h-[56px] flex items-center justify-center">
                {step.title}
              </h3>

              {/* Decorative line in Brand Green */}
              <div className="mt-4 h-px w-8 bg-green-100 mx-auto group-hover:w-16 group-hover:bg-green-500 transition-all duration-500"></div>

              <p className="mt-6 text-sm text-[#0a3d2e] leading-relaxed font-medium opacity-80">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Deep Forest Green Hover */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-green-600 text-white font-bold hover:bg-[#062419] transition-all shadow-xl shadow-green-900/10 active:scale-95"
          >
            Explore Our Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}