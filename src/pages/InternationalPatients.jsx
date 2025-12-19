import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import waitingImg from "../assets/images/waiting-period.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function InternationalPatients() {
  return (
    <section className="bg-white overflow-hidden">

      {/* HERO */}
      <div className="py-28 bg-gradient-to-br from-green-50 to-white text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          International Patients
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Trusted by patients worldwide for affordable,
          high-quality medical care in India.
        </motion.p>
      </div>

      {/* WHY INDIA */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Why Choose India for Medical Treatment?
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "World-Class Healthcare",
                desc: "Internationally accredited hospitals and globally trained doctors.",
              },
              {
                title: "Significant Cost Savings",
                desc: "Save up to 60–80% compared to treatment costs in Western countries.",
              },
              {
                title: "Advanced Medical Technology",
                desc: "Latest procedures, equipment, and internationally accepted protocols.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-green-600">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL PATIENTS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Global Patient Base
          </h2>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6">
         {[
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Africa", flag: "🌍" },
  { name: "Middle East", flag: "🕌" },
].map((item, i) => (
  <motion.div
    key={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 shadow-sm text-lg font-semibold flex flex-col items-center gap-2"
  >
    <span className="text-3xl">{item.flag}</span>
    {item.name}
  </motion.div>
))}

          </div>
        </div>
      </div>

      {/* WAITING PERIOD */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Reduced Waiting Periods
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              India offers faster access to critical procedures,
              avoiding long waiting lists common in many countries.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700 text-lg">
              <li>✔ Faster surgery scheduling</li>
              <li>✔ Immediate specialist consultations</li>
              <li>✔ Shorter overall treatment timelines</li>
            </ul>
          </motion.div>

          <motion.img
            src={waitingImg}
            alt="Waiting period comparison"
            className="rounded-3xl shadow-lg max-w-md w-full mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>

 {/* COST COMPARISON */}
<div className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Treatment Cost Comparison
    </h2>

    <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
      World-class healthcare in India at a fraction of global costs.
    </p>

    <div className="mt-14 grid md:grid-cols-3 gap-8">
      {[
        {
          proc: "Heart Surgery",
          indiaOriginal: "$12,000",
          indiaFinal: "$6,000",
          abroadOriginal: "$45,000",
          abroadFinal: "$35,000+",
          savings: "80%"
        },
        {
          proc: "Knee Replacement",
          indiaOriginal: "$10,000",
          indiaFinal: "$5,500",
          abroadOriginal: "$40,000",
          abroadFinal: "$30,000+",
          savings: "75%"
        },
        {
          proc: "IVF Treatment",
          indiaOriginal: "$6,000",
          indiaFinal: "$3,000",
          abroadOriginal: "$20,000",
          abroadFinal: "$15,000+",
          savings: "70%"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition text-left"
        >
          <h3 className="font-semibold text-lg text-gray-900">
            {item.proc}
          </h3>

          {/* India Pricing */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              India
            </p>
            <p className="text-sm text-gray-400 line-through">
              Original: {item.indiaOriginal}
            </p>
            <p className="text-lg font-bold text-green-600">
              {item.indiaFinal}
            </p>
          </div>

          {/* Abroad Pricing */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Abroad
            </p>
            <p className="text-sm text-gray-400 line-through">
              Original: {item.abroadOriginal}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              {item.abroadFinal}
            </p>
          </div>

          {/* Savings Badge */}
          <div className="mt-6 inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">
            Save up to {item.savings}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* CTA */}
      <div className="py-28 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Begin Your Medical Journey with Confidence
        </h2>

        <p className="mt-6 text-green-100 max-w-2xl mx-auto">
          From consultation to recovery, our international patient
          team supports you every step of the way.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Get Free Consultation
        </Link>
      </div>

    </section>
  );
}
