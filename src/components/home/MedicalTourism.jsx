import { DollarSign, Clock, Trophy, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MedicalTourism() {
  const cards = [
    {
      icon: DollarSign,
      title: "Significant Cost Advantage",
      desc: "International patients choose India for medical treatments that cost 5–20x less than Western countries—without compromising clinical outcomes.",
      color: "from-emerald-500/10 to-green-500/5",
      accent: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "Faster Access to Treatment",
      desc: "Reduced waiting periods allow patients to receive timely procedures, faster interventions, and improved recovery timelines compared to systems abroad.",
      color: "from-blue-500/10 to-cyan-500/5",
      accent: "text-blue-600"
    },
    {
      icon: Trophy,
      title: "Top Global Destination",
      desc: "Ranked among the world’s top medical tourism destinations, India attracts patients globally with trusted hospitals and specialists.",
      color: "from-amber-500/10 to-orange-500/5",
      accent: "text-amber-600"
    }
  ];

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
   {/* Header Section */}
<div className="text-center max-w-4xl mx-auto mb-24">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6 tracking-wide uppercase"
  >
    <Sparkles size={16} /> Global Opportunities
  </motion.div>
  
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
  >
    The New Era of <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">Medical Tourism</span>
  </motion.h2>

  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="mt-8 text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
  >
    A market valued at <span className="text-slate-900 font-bold border-b-4 border-emerald-200">USD 31+ billion</span>, 
    projected to soar beyond <span className="text-slate-900 font-bold">USD 100 billion by 2030.</span>
  </motion.p> {/* This was likely the missing or mismatched tag */}
</div>
        {/* Enhanced Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className={`group relative p-10 rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-emerald-200`}
              >
                {/* Internal Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm
                      bg-slate-50 text-slate-600 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-200/50`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="p-3 rounded-full border border-slate-100 text-slate-300 group-hover:text-emerald-500 group-hover:border-emerald-200 transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-950 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-[2px] w-12 bg-slate-200 group-hover:w-full group-hover:bg-emerald-400 transition-all duration-700 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}