import { motion } from "framer-motion";
import { TrendingDown, ArrowUpRight } from "lucide-react";

export default function CostSavings() {
  const cards = [
    {
      title: "Cardiac Surgery",
      saving: "Up to 85% Savings",
      desc: "Advanced heart procedures performed at internationally accredited cardiac centers."
    },
    {
      title: "Orthopedic Procedures",
      saving: "Up to 70% Savings",
      desc: "Joint replacements and complex orthopedic care with globally accepted implants."
    },
    {
      title: "Cancer Treatment",
      saving: "Up to 75% Savings",
      desc: "Comprehensive oncology care using modern diagnostics, radiation, and surgical expertise."
    }
  ];

  return (
    <section className="relative py-28 bg-white border-b border-green-50 overflow-hidden">

      {/* Background Precision Grid - Mint tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px:32px] opacity-60 -z-10"></div>

      {/* Brand Soft Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-[120px] opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading Section - Deep Forest Green (#062419) */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#062419] tracking-tight"
        >
          Significant <span className="text-green-600">Cost Savings</span>{" "}
          Without Compromising Quality
        </motion.h2>

        {/* Subtitle - Deep Dark Teal (#0a3d2e) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-[#0a3d2e] max-w-3xl mx-auto font-medium leading-relaxed opacity-90"
        >
          International patients save{" "}
          <span className="font-bold text-[#062419]">
            60–80%
          </span>{" "}
          on medical treatments in India compared to the USA, UK, and Germany—
          while receiving world-class clinical care and outcomes.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-green-100 hover:border-green-300 transition-all duration-300"
            >
              {/* Micro-Interaction Icon - Deep Green */}
              <div className="absolute top-10 right-10 text-green-200 group-hover:text-[#062419] transition-colors">
                <ArrowUpRight size={20} />
              </div>

              <div className="mb-8 flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-lg text-green-600">
                   <TrendingDown size={18} />
                </div>
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white border border-green-200 text-green-700">
                  {item.saving}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#062419] tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-[#0a3d2e] text-sm leading-relaxed font-medium opacity-80">
                {item.desc}
              </p>

              {/* Progress-style Savings Bar - Brand Green */}
              <div className="mt-8 h-1.5 w-full bg-green-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: item.saving.match(/\d+/)[0] + '%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-green-600 rounded-full shadow-[0_0_10px_rgba(22,163,74,0.2)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}