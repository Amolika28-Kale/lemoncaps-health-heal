import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

      {/* HERO */}
      <div className="py-28 bg-gradient-to-br from-green-50 via-white to-white text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Let’s Start Your Treatment Journey
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Get expert medical guidance, transparent cost estimates, and
          personalized care — at no cost, no obligation.
        </motion.p>
      </div>

      {/* TRUST METRICS */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            ["10,000+", "Patients Assisted"],
            ["60–80%", "Cost Savings"],
            ["15+", "Countries Served"],
            ["24/7", "Patient Support"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-md"
            >
              <h3 className="text-3xl font-bold text-green-600">{num}</h3>
              <p className="mt-1 text-sm text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl p-10 shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Free Medical Consultation
          </h2>

          <p className="mt-3 text-gray-600">
            Submit your details. Our medical experts will contact you
            within <strong>24 hours</strong>.
          </p>

          <form className="mt-8 space-y-5">
            {[
              "Full Name",
              "Email Address",
              "Country",
              "Treatment Required",
            ].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}

            <textarea
              rows="4"
              placeholder="Brief medical details (optional)"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
            >
              Get Free Consultation
            </button>
          </form>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="block mt-6 text-center text-green-600 font-semibold hover:underline"
          >
            💬 Prefer WhatsApp? Chat with us instantly
          </a>
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* CONTACT DETAILS */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Contact Information
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>📧 support@lemoncapshealth.com</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>🌍 Serving patients globally</li>
            </ul>
          </div>

          {/* WHY TRUST */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h4 className="font-semibold text-gray-900">
              Why Patients Trust Lemoncaps
            </h4>

            <ul className="mt-4 space-y-3 text-gray-600 text-sm">
              <li>✔ Ethical & transparent medical guidance</li>
              <li>✔ Partnerships with top accredited hospitals</li>
              <li>✔ Dedicated international patient coordinators</li>
              <li>✔ End-to-end travel & treatment support</li>
            </ul>
          </div>

          {/* FOUNDER NOTE */}
          <div className="bg-green-50 rounded-3xl p-8">
            <p className="text-gray-800 italic">
              “International patients deserve clarity, compassion, and
              confidence in healthcare. Lemoncaps Health & Heal was built
              to deliver exactly that.”
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              — Mr. Dayanand V. P.
            </p>
            <p className="text-sm text-gray-600">
              Founder, Lemoncaps Health & Heal
            </p>
          </div>
        </motion.div>
      </div>

      {/* FINAL TRUST CTA */}
      <div className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Patients Across 15+ Countries
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          From consultation to recovery — we stay with you at every step.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-4 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Start Free Consultation
        </Link>
      </div>

    </section>
  );
}
