import { DollarSign, Clock, Trophy } from "lucide-react";
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
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          The Global <span className="text-green-600">Medical Tourism</span> Opportunity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          A rapidly expanding global healthcare market valued at{" "}
          <span className="font-semibold text-gray-900">
            USD 31+ billion
          </span>{" "}
          with projections to reach{" "}
          <span className="font-semibold text-gray-900">
            USD 70–100+ billion by 2030.
          </span>
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-left">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
