import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Mail, Phone, Globe, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="bg-white overflow-hidden">
      <SEO
        title="Contact Lemoncaps Health & Heal | Free Medical Consultation"
        description="Contact Lemoncaps Health & Heal for a free medical consultation and personalized healthcare guidance."
        keywords="medical consultation India, contact Lemoncaps Health"
        canonical="https://lemoncapshealth.com/contact"
      />

      {/* HERO - Deep Forest Palette */}
      <div className="relative pt-32 pb-24 border-b border-green-50 overflow-hidden">
        {/* Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Direct Support Line
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            Let’s Start Your <span className="text-green-600">Journey</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
          >
            Get expert medical guidance, transparent cost estimates, and
            personalized care — at no cost, no obligation.
          </motion.p>
        </div>
      </div>

      {/* TRUST METRICS - Deep Green Minimalist */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["1500+", "Patients Assisted"],
            ["65–85%", "Cost Savings"],
            ["15+", "Countries Served"],
            ["24/7", "Patient Support"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-green-100 text-center shadow-sm shadow-green-900/5 group hover:border-green-300 transition-all"
            >
              <h3 className="text-2xl font-black text-[#062419] tracking-tighter">{num}</h3>
              <p className="mt-1 text-[10px] font-black text-green-600 uppercase tracking-widest">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
        
        {/* FORM SECTION - Clinical White Card */}
    {/* FORM SECTION - Clinical White Card */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="bg-white border border-green-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
>
  <h2 className="text-3xl font-bold text-[#062419] tracking-tight">
    Free Medical Consultation
  </h2>
  <p className="mt-4 text-[#062419] font-medium">
    Submit your details. Our medical experts will contact you within <span className="text-green-700 font-black underline decoration-green-400 underline-offset-4">24 hours</span>.
  </p>

  <form className="mt-10 space-y-4">
    <div className="grid md:grid-cols-2 gap-4">
      {/* Updated placeholder and text colors for dark contrast */}
      <input 
        type="text" 
        placeholder="Full Name" 
        className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border border-green-100 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-[#062419] font-semibold placeholder:text-[#062419]/50" 
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border border-green-100 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-[#062419] font-semibold placeholder:text-[#062419]/50" 
      />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <input 
        type="text" 
        placeholder="Country" 
        className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border border-green-100 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-[#062419] font-semibold placeholder:text-[#062419]/50" 
      />
      <input 
        type="text" 
        placeholder="Treatment Required" 
        className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border border-green-100 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-[#062419] font-semibold placeholder:text-[#062419]/50" 
      />
    </div>
    <textarea 
      rows="4" 
      placeholder="Brief medical details (optional)" 
      className="w-full px-5 py-4 rounded-2xl bg-green-50/50 border border-green-100 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none text-[#062419] font-semibold resize-none placeholder:text-[#062419]/50" 
    />
  <button type="submit" className="group w-full py-5 bg-green-600 text-white rounded-full font-black text-lg hover:bg-[#062419] transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
  </form>

  <a href="https://wa.me/917350767410" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 mt-8 py-5 rounded-2xl border-2 border-[#062419] text-[#062419] font-black text-sm hover:bg-[#062419] hover:text-white transition-all group">
    <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
    Chat with us on WhatsApp
  </a>
</motion.div>

        {/* INFO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold text-[#062419] tracking-tight mb-8 uppercase tracking-widest text-xs">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: "support@lemoncapshealth.com" },
                { icon: <Phone size={20} />, label: "+91 7350767410" },
                { icon: <Globe size={20} />, label: "Serving Patients Globally" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-700/50 group-hover:text-white group-hover:bg-green-600 flex items-center justify-center transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[#0a3d2e] font-bold text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TRUST FACTORS */}
          <div className="p-10 rounded-[2.5rem] border border-green-100 bg-white">
            <h3 className="text-lg font-bold text-[#062419] mb-8">Why Patients Trust Us</h3>
            <div className="space-y-5">
              {[
                "Ethical & transparent medical guidance",
                "Partnerships with top accredited hospitals",
                "Dedicated international coordinators",
                "End-to-end travel & treatment support",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base text-[#0a3d2e] font-medium opacity-80 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FOUNDER BLOCK */}
          <div className="relative p-10 rounded-[2.5rem] bg-green-50/50 border border-green-100 group transition-all">
            <p className="text-[#0a3d2e] font-medium italic text-lg leading-relaxed relative z-10">
              “International patients deserve clarity, compassion, and confidence in healthcare. Lemoncaps Health & Heal was built to deliver exactly that.”
            </p>
            <div className="mt-8">
              <p className="font-black text-[#062419] text-xl">Mr. Dayanand V. P.</p>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mt-1">Founder, Lemoncaps Health & Heal</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FINAL TRUST BANNER - Deep Forest Green Floating Card */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/30">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10 leading-tight">
            Trusted by Patients Across 15+ Countries
          </h2>
          <p className="mt-8 text-[#d1fae5] text-xl font-medium max-w-2xl mx-auto relative z-10 opacity-90 leading-relaxed">
            From your first consultation to your final recovery — we stay with you every single step.
          </p>
        </div>
      </div>
    </section>
  );
}