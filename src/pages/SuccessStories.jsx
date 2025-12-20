import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import consultationImg from "../assets/images/consultaion.png";
import ivfImg from "../assets/images/ivf.png";
import hospitalImg from "../assets/images/hospital.png";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, CheckCircle, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function SuccessStories() {
  return (
    <section className="bg-[#FCFDFD] selection:bg-green-100">
      <SEO
        title="Patient Success Stories | Medical Tourism Results"
        description="Real patient success stories showcasing cost savings, quality care, and excellent outcomes."
        keywords="medical tourism success stories, IVF India, cardiac surgery India"
        canonical="https://lemoncapshealth.com/success-stories"
      />

      {/* HERO SECTION - Refined Editorial Style */}
      <div className="relative pt-44 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-white -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-green-100 shadow-sm shadow-green-900/5 text-green-700 text-[11px] font-black uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Verified Patient Results
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold text-[#062419] tracking-tight leading-[1.05]"
          >
            Success <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Stories</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-10 text-xl md:text-2xl text-[#0a3d2e]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Real patients. Real results. Life-changing healthcare experiences 
            delivered with compassion and clinical excellence.
          </motion.p>
        </div>
      </div>

      {/* HIGHLIGHT CARDS - Floating Premium Aesthetic */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Star className="text-orange-400" size={26} />,
              title: "IVF Success: 80% Savings",
              desc: "UK couples achieved successful first-cycle IVF outcomes at a fraction of domestic costs.",
              tag: "Fertility Care"
            },
            {
              icon: <Heart className="text-red-400" size={26} />,
              title: "Cardiac Surgery Results",
              desc: "US patients reduced treatment costs from ₹55 lakh to just ₹6.5 lakh with 100% success.",
              tag: "Cardiac Excellence"
            },
            {
              icon: <CheckCircle className="text-green-500" size={26} />,
              title: "Exceptional Satisfaction",
              desc: "Personalized care, seamless coordination, and comfortable recovery experiences.",
              tag: "Patient Experience"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[2.5rem] p-10 border border-green-50 shadow-[0_20px_50px_rgba(6,36,25,0.05)] hover:shadow-[0_30px_60px_rgba(6,36,25,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Quote size={80} />
              </div>
              <div className="mb-6 inline-block px-3 py-1 rounded-lg bg-green-50 text-green-700 text-[9px] font-black uppercase tracking-widest">
                {item.tag}
              </div>
              <div className="p-4 bg-green-50/50 w-fit rounded-2xl mb-8 group-hover:bg-green-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#062419] tracking-tight leading-snug">{item.title}</h3>
              <p className="mt-4 text-[#0a3d2e]/70 text-base leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
        className="
          w-full h-full object-cover
          transition-transform duration-1000
          scale-105 group-hover:scale-110
        "
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
              ["1000+", "Patients Assisted"],
              ["90%+", "Positive Outcomes"],
              ["65–85%", "Average Savings"],
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