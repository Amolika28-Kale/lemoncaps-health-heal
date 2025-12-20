import React from "react";
import { motion } from "framer-motion";
import medicalImg from "../../assets/images/medical-team.png";
import { ArrowRight } from "lucide-react";

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
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Precision Grid - Using the Mint Green tint for medical blueprints feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-stretch">

       {/* Left Content */}
<motion.div
  className="flex flex-col"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <span className="inline-block w-fit mb-6 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest">
    Vision & Mission
  </span>

  {/* Heading - Removed <br /> and added whitespace-nowrap or adjusted tracking if needed */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#062419] leading-[1.1] tracking-tight">
    Shaping the future of{" "}
    <span className="text-green-600 underline decoration-green-100 underline-offset-8 decoration-4">
      global healthcare access
    </span>
  </h2>

  {/* Subtext - Removed max-w-xl so it aligns better with a long heading */}
  <p className="mt-10 text-xl text-[#0a3d2e] leading-relaxed font-medium opacity-90">
    Our vision is to redefine medical tourism by combining world-class
    clinical excellence, affordability, and compassionate patient care.
  </p>

  {/* Left Image */}
  <div className="mt-20 relative p-2 bg-green-50/50 border border-green-100 rounded-[2.5rem] group">
    <div className="overflow-hidden rounded-[2.25rem]">
      <img
        src={medicalImg}
        alt="Medical team"
        className="w-full h-auto object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  </div>

        </motion.div>
{/* Right Cards - Minimalist Vertical Steps */}
<div className="flex flex-col justify-end space-y-8 h-full pt-12">
  {points.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2rem] p-10 border border-green-100 hover:border-green-300 transition-all duration-300 shadow-sm shadow-green-900/5"
    >
      <div className="flex items-center gap-4 mb-6">
        {/* Numbers - Dark Green */}
        <span className="text-5xl font-black text-[#062419] transition-colors">
          {item.number}
        </span>

        <div className="h-px flex-1 bg-green-50 group-hover:bg-green-200 transition-all"></div>

        <ArrowRight
          size={20}
          className="text-green-200 group-hover:text-green-600 transition-colors"
        />
      </div>

      {/* Title - Deep Forest Green */}
      <h3 className="text-2xl font-bold text-[#062419] tracking-tight">
        {item.title}
      </h3>

      {/* Description - Dark Teal */}
      <p className="mt-4 text-[#0a3d2e] leading-relaxed font-medium opacity-80">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}