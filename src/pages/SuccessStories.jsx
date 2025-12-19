import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import consultationImg from "../assets/images/consultaion.png";
import ivfImg from "../assets/images/ivf.png";
import hospitalImg from "../assets/images/hospital.png";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SuccessStories() {
  return (
    <section className="bg-white overflow-hidden">

      <SEO
        title="Patient Success Stories | Medical Tourism Results"
        description="Real patient success stories showcasing cost savings, quality care, and excellent outcomes."
        keywords="medical tourism success stories, IVF India, cardiac surgery India"
        canonical="https://lemoncapshealth.com/success-stories"
      />

      {/* HERO */}
      <div className="py-28 bg-gradient-to-br from-green-50 to-white text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Success Stories & Patient Outcomes
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Real patients. Real results. Life-changing healthcare experiences
          delivered with compassion and excellence.
        </motion.p>
      </div>

      {/* KEY HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💙",
              title: "IVF Success with 80% Savings",
              desc: "UK couples achieved successful first-cycle IVF outcomes at a fraction of domestic costs.",
            },
            {
              icon: "⭐",
              title: "Exceptional Patient Satisfaction",
              desc: "Personalized care, seamless coordination, and comfortable recovery experiences.",
            },
            {
              icon: "❤️",
              title: "88% Savings on Cardiac Surgery",
              desc: "US patients reduced treatment costs from ₹55 lakh to just ₹6.5 lakh.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-md"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* IMAGE STORIES */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Moments That Matter
        </h2>

        <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto">
          Every image reflects trust, hope, healing, and positive outcomes
          for our international patients.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[hospitalImg, ivfImg, consultationImg].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img}
                alt="Patient success story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRUST METRICS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["10,000+", "Patients Assisted"],
            ["90%+", "Positive Outcomes"],
            ["60–80%", "Average Cost Savings"],
            ["15+", "Countries Served"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-3xl font-bold text-green-600">{num}</h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-28 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Success Story Starts Here
        </h2>

        <p className="mt-6 text-green-100 max-w-2xl mx-auto">
          Join thousands of international patients who trusted
          Lemoncaps Health & Heal for safe, affordable, and world-class care.
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
