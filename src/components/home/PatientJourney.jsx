import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  FileSearch, 
  Plane, 
  Hospital, 
  HeartPulse, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PatientJourney() {
  const steps = [
    {
      icon: <CalendarCheck size={28} />,
      title: "Free Online Consultation",
      desc: "Share your medical reports and get an expert opinion within 24 hours.",
      bg: "bg-emerald-50"
    },
    {
      icon: <FileSearch size={28} />,
      title: "Medical Review",
      desc: "Top specialists evaluate your case and suggest the best treatment plan.",
      bg: "bg-blue-50"
    },
    {
      icon: <Plane size={28} />,
      title: "Logistics & Visa",
      desc: "Our team manages your visa support, flights, and premium hotel stay.",
      bg: "bg-indigo-50"
    },
    {
      icon: <Hospital size={28} />,
      title: "Hospital Care",
      desc: "Seamless admission with dedicated on-ground patient support.",
      bg: "bg-teal-50"
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Recovery Care",
      desc: "Post-treatment recovery and continued global medical guidance.",
      bg: "bg-rose-50"
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
            >
              Step-by-Step Process
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mt-4 tracking-tight"
            >
              Your Journey to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Better Health</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 text-lg md:text-xl max-w-sm mb-2"
          >
            We handle the complexities so you can focus entirely on your recovery.
          </motion.p>
        </div>

        {/* Steps Journey */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Card Container */}
              <div className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 w-full h-full transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 hover:border-emerald-200">
                
                {/* Step Indicator Floating */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-lg ring-4 ring-slate-50">
                  {i + 1}
                </div>

                {/* Icon Circle */}
                <div className={`w-20 h-20 mx-auto rounded-3xl ${step.bg} flex items-center justify-center text-slate-800 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white mb-8`}>
                  {step.icon}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 flex justify-center">
                   <ChevronRight className="text-slate-200 group-hover:text-emerald-500 transition-colors" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-emerald-100 via-slate-200 to-blue-100 rounded-full max-w-fit mx-auto shadow-sm"
        >
          <Link
            to="/services"
            className="flex items-center gap-3 px-12 py-5 rounded-full bg-white text-slate-900 font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 group"
          >
            Start Your Consultation Now
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}