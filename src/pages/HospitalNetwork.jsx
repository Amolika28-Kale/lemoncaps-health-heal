import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { Link } from "react-router-dom";

import meetingImg from "../assets/images/hospital-meeting.png";
import hospitalWardImg from "../assets/images/ward.png";
import operationTheatreImg from "../assets/images/operation-theatre.png";
import patientCareImg from "../assets/images/pateint-care.png";
import infrastructureImg from "../assets/images/infrastructure.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HospitalNetwork() {
  return (
    <section className="bg-white overflow-hidden">
      <SEO
        title="Hospital Network | Top Hospitals & Doctors in India"
        description="Partner hospitals with world-class infrastructure, top specialists, and internationally accredited facilities."
        keywords="India hospitals, best doctors India, hospital network medical tourism"
        canonical="https://lemoncapshealth.com/hospital-network"
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
          Our Hospital Network
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Collaborating with India’s most trusted and internationally
          accredited hospitals to deliver global standards of care.
        </motion.p>
      </div>

      {/* PARTNERSHIPS VISUAL */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Hospital partnerships <br /> & medical excellence
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Strategic partnerships with India’s leading hospital chains,
              providing access to advanced infrastructure and expert doctors.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[meetingImg, hospitalWardImg, operationTheatreImg, patientCareImg].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-2xl h-48 w-full object-cover shadow-md hover:scale-[1.02] transition"
                  alt="Hospital network"
                />
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* PARTNER HOSPITALS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Partner Hospitals
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "Multi-Specialty Tertiary Care Hospitals",
              "NABH & JCI Accredited Facilities",
              "Advanced Diagnostic & Research Centers",
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
                  {item}
                </h3>
                <p className="mt-4 text-gray-600">
                  State-of-the-art infrastructure with international
                  patient support services.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INFRASTRUCTURE */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              World-Class Infrastructure
            </h2>

            <ul className="mt-8 space-y-4 text-gray-700 text-lg">
              <li>✔ 500+ partner hospitals nationwide</li>
              <li>✔ 50,000+ beds across specialties</li>
              <li>✔ Advanced ICUs & modular OTs</li>
              <li>✔ Dedicated international patient desks</li>
            </ul>
          </motion.div>

          <motion.img
            src={infrastructureImg}
            alt="Hospital Infrastructure"
            className="rounded-3xl shadow-lg max-w-md w-full mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* DOCTORS */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Doctors & Medical Experts
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Access India’s most experienced and globally recognized
            specialists across major medical disciplines.
          </p>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              "Cardiac Surgeons",
              "Oncologists",
              "Orthopedic Specialists",
              "IVF & Fertility Experts",
            ].map((doc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm font-semibold text-gray-800"
              >
                {doc}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* QUALITY */}
      <div className="py-28 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Quality & Patient Safety
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Strict quality standards, ethical practices, and transparent
            medical processes ensure patient safety at every step.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "International accreditation standards",
              "Continuous quality audits",
              "Transparent treatment protocols",
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-8">
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Access India’s Best Hospitals
        </h2>

        <p className="mt-6 text-green-100">
          Let us connect you with the right hospital and specialist for your care.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
        >
          Talk to Our Experts
        </Link>
      </div>
    </section>
  );
}
