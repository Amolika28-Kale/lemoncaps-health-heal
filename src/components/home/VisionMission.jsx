import React from "react";
import { motion } from "framer-motion";
import medicalImg from "../../assets/images/medical-team.png";

export default function VisionMission() {
  const points = [
    {
      number: "01",
      title: "Quality-first healthcare",
      desc: "Deliver seamless access to world-class medical care at affordable costs through trusted hospital partnerships."
    },
    {
      number: "02",
      title: "Global trust & excellence",
      desc: "Build India’s most trusted, technology-driven global medical tourism ecosystem."
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
            Vision & Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Shaping the future of{" "}
            <span className="text-green-600">global healthcare access</span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
            Our vision is to redefine medical tourism by combining world-class
            clinical excellence, affordability, and compassionate patient care
            — powered by technology and trust.
          </p>

          <div className="mt-12 relative">
            <img
              src={medicalImg}
              alt="Medical team"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="space-y-8">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition"
            >
              <div className="absolute -top-6 -left-6 w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                {item.number}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
