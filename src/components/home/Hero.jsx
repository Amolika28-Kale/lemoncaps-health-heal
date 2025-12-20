import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../utils/animations";
import hospitalImg from "../../assets/images/doctors.avif";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle Background Pattern using a faint green tint instead of slate */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-10" />
      
      {/* Soft Accent Blur - Top Right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Minimalist Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full  text-green text-[10px] font-bold uppercase tracking-widest mb-8">
            <Sparkles size={12} className="animate-pulse" />
            Trusted Globally for Medical Excellence
          </div>

          {/* Deep Forest Green instead of black */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#062419] leading-[1.1] tracking-tight">
            Lemoncaps <br /> 
            <span className="text-green-600">Health & Heal</span>
          </h1>

          {/* Deep Dark Teal instead of gray/slate */}
          <p className="mt-8 text-xl text-[#0a3d2e] max-w-lg leading-relaxed font-medium">
            Premium healthcare facilitation connecting international patients
            to India’s top accredited hospitals and world-class doctors.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex gap-4 flex-wrap">
            <Link
              to="/services"
              className="group flex items-center gap-2 px-10 py-5 bg-green-600 text-white rounded-full font-bold hover:bg-[#062419] transition-all duration-300 transform active:scale-95 shadow-lg shadow-green-200"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-10 py-5 bg-white border-2 border-[#062419] text-[#062419] rounded-full font-bold hover:bg-green-50 transition-all active:scale-95"
            >
              Free Consultation
            </Link>
          </div>

          {/* Metrics Line with Deep Green Text */}
          <div className="mt-16 pt-8 border-t border-green-100 flex gap-12">
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#062419] tracking-tighter">500+</span>
                <span className="text-xs uppercase tracking-widest text-green-700 font-bold">Partners</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#062419] tracking-tighter">15+</span>
                <span className="text-xs uppercase tracking-widest text-green-700 font-bold">Countries</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#062419] tracking-tighter">24/7</span>
                <span className="text-xs uppercase tracking-widest text-green-700 font-bold">Support</span>
             </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Main Image Container with Deep Green Border */}
          <div className="relative z-10 p-3 bg-white border-2 border-green-100 rounded-[2.5rem]">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-auto">
              <img
                src={hospitalImg}
                alt="Partner Hospital Doctors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Soft Blur Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-200 rounded-full blur-[100px] -z-10 opacity-40" />
        </motion.div>

      </div>
    </section>
  );
}