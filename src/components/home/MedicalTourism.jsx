import { DollarSign, Clock, Trophy, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MedicalTourism() {
  const cards = [
    {
      icon: DollarSign,
      title: "Significant Cost Advantage",
      desc: "International patients choose India for medical treatments that cost 5–20x less than Western countries—without compromising clinical outcomes or safety standards."
    },
    {
      icon: Clock,
      title: "Faster Access to Treatment",
      desc: "Reduced waiting periods allow patients to receive timely procedures, faster interventions, and improved recovery timelines compared to overburdened systems abroad."
    },
    {
      icon: Trophy,
      title: "Top Global Medical Destination",
      desc: "Ranked among the world’s top medical tourism destinations, India attracts patients globally with trusted hospitals and internationally trained specialists."
    }
  ];

  return (
    <section className="relative py-32 bg-white border-b border-green-50 overflow-hidden">

      {/* Background Grid - Mint tint for a medical feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>

      {/* Soft Brand Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-50 rounded-full blur-[120px] opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading Section - Deep Forest Green (#062419) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#062419] leading-[1.1]">
            The Global{" "}
            <span className="text-green-600">Medical Tourism</span>{" "}
            Opportunity
          </h2>

          {/* Deep Dark Teal (#0a3d2e) for subtext */}
          <p className="mt-10 text-lg md:text-xl lg:text-2xl text-[#0a3d2e] font-medium leading-relaxed opacity-90">
            A rapidly expanding global healthcare market valued at{" "}
            <span className="font-bold text-[#062419]">
              USD 31+ billion
            </span>{" "}
            projections suggest reaching{" "}
            <span className="font-bold text-[#062419]">
              USD 70–100+ billion by 2030.
            </span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="mt-28 grid md:grid-cols-3 gap-10 text-left">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-[2.5rem] p-12 border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                {/* Arrow Icon in Forest Green */}
                <div className="absolute top-10 right-10 text-green-200 group-hover:text-[#062419] transition-colors">
                  <ArrowUpRight size={22} />
                </div>

                {/* Icon Container with Mint to Solid Green transition */}
                <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-700/50 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center mb-12 transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-[#062419] tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="mt-6 text-base md:text-lg text-[#0a3d2e] leading-relaxed font-medium opacity-80">
                  {item.desc}
                </p>

                {/* Aesthetic Detail Line in Brand Green */}
                <div className="mt-10 h-1.5 w-12 bg-green-50 group-hover:bg-green-500 group-hover:w-20 rounded-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}