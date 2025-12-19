import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/animations";
import {
  CalendarCheck,
  FileSearch,
  Plane,
  Hospital,
  HeartPulse,
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your treatment journey with{" "}
            <span className="text-green-600">Lemoncaps</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A simple, transparent and fully managed medical journey — from
            consultation to recovery.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-5 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="relative bg-gray-50 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-green-600 text-white flex items-center justify-center">
                {step.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              <span className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
                {`0${i + 1}`}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            to="/services"
            className="inline-block px-10 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Explore Our Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
