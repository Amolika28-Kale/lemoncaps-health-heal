import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import travelImg from "../assets/images/travelAssistant.png";
import operationImg from "../assets/images/operations.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
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
          Our Healthcare Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          End-to-end medical tourism solutions delivering world-class
          treatment, global coordination, and complete peace of mind.
        </motion.p>
      </div>

      {/* SPECIALIST SERVICES */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Specialist medical services
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Expertise across cardiology, oncology, orthopaedics,
              neurology, fertility treatments, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["Patient-centric care", "Personalized plans with end-to-end support"],
              ["All-inclusive packages", "Treatment, travel & accommodation"],
              ["Global specialists", "Top doctors across super-specialties"],
              ["High-value procedures", "Heart, joints, oncology & transplants"],
            ].map(([title, text], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDICAL SPECIALTIES */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Medical Specialties
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "Cardiology & Cardiac Surgery",
              "Orthopedics & Joint Replacement",
              "Oncology (Cancer Care)",
              "IVF & Fertility Treatments",
              "Neurology & Neurosurgery",
              "Cosmetic & Plastic Surgery",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-green-600">{item}</h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Advanced care delivered by India’s top specialists
                  following global treatment protocols.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* HIGH VALUE PROCEDURES */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            High-Value Procedures
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              "Heart Bypass Surgery",
              "Knee & Hip Replacement",
              "IVF & Assisted Reproduction",
              "Organ Transplant Support",
            ].map((proc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl font-semibold text-gray-800"
              >
                {proc}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MEDICAL TRAVEL ASSISTANCE */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              End-to-end medical travel assistance
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["Patient logistics", "Transport, stay & coordination"],
                ["Medical evaluation", "Doctor review & consultation"],
                ["Treatment planning", "Hospitals, visa & travel"],
                ["Return support", "Post-treatment care & follow-ups"],
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold">{title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.img
            src={travelImg}
            alt="Medical travel assistance"
            className="rounded-3xl shadow-lg w-full max-w-md mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* OPERATIONAL EXCELLENCE */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.img
            src={operationImg}
            alt="Operational excellence"
            className="rounded-3xl shadow-lg w-full max-w-lg mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Operational excellence & workforce
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["24/7 Support", "Dedicated patient care teams"],
                ["Strategic locations", "Pune HQ & 7+ cities"],
                ["Healthcare staff", "19+ operations specialists"],
                ["Digital outreach", "21+ marketing professionals"],
              ].map(([title, desc], i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold">{title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Treatment Journey Today
        </h2>

        <p className="mt-6 text-green-100">
          Speak with our healthcare experts for a personalized consultation.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Book Free Consultation
        </Link>
      </div>

    </section>
  );
}
