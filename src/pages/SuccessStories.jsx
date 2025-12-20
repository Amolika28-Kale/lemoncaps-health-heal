import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import consultationImg from "../assets/images/consultaion.png";
import ivfImg from "../assets/images/ivf.png";
import hospitalImg from "../assets/images/hospital.png";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, CheckCircle, Quote, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function SuccessStories() {
  return (
    <section className="bg-[#FCFDFD] selection:bg-green-100 overflow-x-hidden">
      <SEO
        title="Patient Success Stories | Medical Tourism Results"
        description="Real patient success stories showcasing cost savings, quality care, and excellent outcomes."
        keywords="medical tourism success stories, IVF India, cardiac surgery India"
        canonical="https://lemoncapshealth.com/success-stories"
      />

      {/* HERO SECTION */}
      <div className="relative pt-48 pb-40 overflow-hidden bg-white">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-green-50/80 border border-green-100 backdrop-blur-sm text-green-700 text-[10px] font-bold uppercase tracking-[0.25em]"
          >
            <Sparkles size={12} className="fill-green-600" />
            Verified Excellence
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-7xl md:text-9xl font-bold text-[#062419] tracking-tighter leading-[0.95] mb-8"
          >
            Proof of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-emerald-400">Care.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-[#0a3d2e]/70 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Real journeys from across the globe, united by a single outcome: <span className="text-[#062419] font-semibold italic">Recovery.</span>
          </motion.p>
        </div>
      </div>

      {/* HIGHLIGHT CARDS */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Star className="text-amber-500" />,
              title: "IVF: 80% Cost Savings",
              desc: "UK couples achieved successful first-cycle outcomes at a fraction of domestic costs.",
              tag: "Fertility"
            },
            {
              icon: <Heart className="text-rose-500" />,
              title: "Cardiac Excellence",
              desc: "US patients reduced surgery costs from ₹55L to ₹6.5L with world-class surgeons.",
              tag: "Surgery"
            },
            {
              icon: <CheckCircle className="text-emerald-500" />,
              title: "White-Glove Support",
              desc: "Seamless logistics from airport pickup to 24/7 post-op nursing care.",
              tag: "Concierge"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white shadow-[0_30px_100px_rgba(6,36,25,0.08)] hover:shadow-[0_40px_80px_rgba(6,36,25,0.12)] transition-all duration-500 group"
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="p-4 bg-green-50 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600/60 bg-green-50/50 px-3 py-1 rounded-full border border-green-100">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#062419] tracking-tight">{item.title}</h3>
              <p className="mt-4 text-[#0a3d2e]/70 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-[#062419] tracking-tight">The Faces of Hope</h2>
            <p className="mt-6 text-lg text-[#0a3d2e]/60 font-medium">Every smile is a testament to the clinical excellence and warmth of Indian hospitality.</p>
          </div>
          <Link to="/contact" className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 border-b-2 border-green-100 pb-1">
            See more patient journeys <ArrowRight size={18}/>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[hospitalImg, ivfImg, consultationImg].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-[3rem] aspect-[4/5] group bg-gray-100 shadow-2xl"
            >
              <img
                src={img}
                alt="Patient outcome"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062419] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-medium text-lg leading-snug">Exceeding expectations in patient care and clinical safety.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* METRICS - Dark & Bold */}
      <div className="bg-[#062419] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              ["1000+", "Patients Assisted"],
              ["90%", "Positive Outcomes"],
              ["65-85%", "Average Savings"],
              ["15+", "Cities in India"],
            ].map(([num, label], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2">{num}</h3>
                <div className="h-1 w-8 bg-green-500 mx-auto mb-4 rounded-full" />
                <p className="text-green-200/50 text-[10px] font-black uppercase tracking-[0.3em]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="px-6 py-32 bg-white">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#062419] to-[#0a3d2e] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          {/* Decorative Ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 border-[1px] border-white/10 rounded-full" />
          <div className="absolute -top-12 -right-12 w-64 h-64 border-[1px] border-white/5 rounded-full" />
          
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
            Start Your Own <br /> Success Story
          </h2>
          <p className="text-[#d1fae5]/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Take the first step toward world-class healthcare. Our medical coordinators are ready to build your personalized treatment plan.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 px-10 py-6 bg-green-500 text-[#062419] rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-900/40"
          >
            Get Free Consultation
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}