import { motion } from "framer-motion";

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
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-25"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Significant <span className="text-green-600">Cost Savings</span>{" "}
          Without Compromising Quality
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          International patients save{" "}
          <span className="font-semibold text-gray-900">
            60–80%
          </span>{" "}
          on medical treatments in India compared to the USA, UK, and Germany—
          while receiving world-class clinical care and outcomes.
        </motion.p>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-left">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-semibold">
                  {item.saving}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
