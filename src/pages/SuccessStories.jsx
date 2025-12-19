import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import consultationImg from "../assets/images/consultaion.png";
import ivfImg from "../assets/images/ivf.png";
import hospitalImg from "../assets/images/hospital.png";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SuccessStories() {
  return (
    <section className="bg-white">
      <SEO
        title="Patient Success Stories | Medical Tourism Results"
        description="Real patient success stories showcasing cost savings, quality care, and excellent outcomes."
        keywords="medical tourism success stories, IVF India, cardiac surgery India"
        canonical="https://lemoncapshealth.com/success-stories"
      />

      {/* HERO SECTION - Deep Forest Palette */}
      <div className="relative pt-32 pb-24 border-b border-green-50 overflow-hidden">
        {/* Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:20px_20px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest"
          >
            Verified Patient Results
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            Success <span className="text-green-600">Stories</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
          >
            Real patients. Real results. Life-changing healthcare experiences 
            delivered with compassion and clinical excellence.
          </motion.p>
        </div>
      </div>

      {/* HIGHLIGHT CARDS - Medical White Style */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Star className="text-orange-400" size={24} />,
              title: "IVF Success: 80% Savings",
              desc: "UK couples achieved successful first-cycle IVF outcomes at a fraction of domestic costs.",
            },
            {
              icon: <Heart className="text-red-400" size={24} />,
              title: "Cardiac Surgery Results",
              desc: "US patients reduced treatment costs from ₹55 lakh to just ₹6.5 lakh with 100% success.",
            },
            {
              icon: <CheckCircle className="text-green-500" size={24} />,
              title: "Exceptional Satisfaction",
              desc: "Personalized care, seamless coordination, and comfortable recovery experiences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-green-100 hover:border-green-300 transition-all duration-300 shadow-sm shadow-green-900/5 group"
            >
              <div className="p-3 bg-green-50 w-fit rounded-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#062419] tracking-tight">{item.title}</h3>
              <p className="mt-3 text-[#0a3d2e] text-sm leading-relaxed font-medium opacity-70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GALLERY - Hygienic Grayscale to Color */}
      <div className="max-w-7xl mx-auto px-6 py-32 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight">Moments That Matter</h2>
          <div className="h-1.5 w-16 bg-green-500 mt-6 mx-auto rounded-full" />
          <p className="mt-8 text-lg text-[#0a3d2e] max-w-xl mx-auto font-medium opacity-80 leading-relaxed">
            Every image reflects trust, hope, and the positive outcomes 
            experienced by our international patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[hospitalImg, ivfImg, consultationImg].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-green-50 aspect-square group bg-green-50/30 shadow-sm"
            >
              <img
                src={img}
                alt="Patient outcome"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062419]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* METRICS - Pure Deep Green Minimalist */}
      <div className="py-24 border-y border-green-50 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              ["10,000+", "Patients Assisted"],
              ["90%+", "Positive Outcomes"],
              ["60–80%", "Average Savings"],
              ["15+", "Countries Served"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-8 rounded-[2rem] border border-transparent hover:border-green-100 hover:bg-green-50/30 transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-black text-[#062419] tracking-tighter">{num}</h3>
                <p className="mt-3 text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Deep Forest Premium Card */}
      <div className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight relative z-10 leading-[1.1]">
            Your Success Story <br className="hidden md:block"/> Starts Here
          </h2>
          <p className="mt-8 text-[#d1fae5] relative z-10 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed opacity-90">
            Join thousands of international patients who trusted Lemoncaps Health & Heal 
            for safe, affordable, and world-class care in India.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 mt-12 px-12 py-5 bg-green-500 text-[#062419] rounded-full font-black text-lg hover:bg-white transition-all relative z-10 shadow-xl active:scale-95"
          >
            Get Free Consultation
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}