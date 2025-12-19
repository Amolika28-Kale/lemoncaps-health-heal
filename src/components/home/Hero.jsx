import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../utils/animations";
import hospitalImg from "../../assets/images/doctors.avif";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            🌍 Trusted by International Patients Worldwide
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Lemoncaps Health & Heal
            <span className="block text-green-600 mt-3">
              Global Medical Tourism Excellence
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Premium healthcare facilitation connecting international patients
            to India’s top accredited hospitals and world-class doctors.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-5 flex-wrap">
            <Link
              to="/services"
              className="px-10 py-4 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 bg-white border border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
            >
              Free Consultation
            </Link>
          </div>

          {/* Trust Metrics */}
          {/* <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Partner Hospitals</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">50k+</p>
              <p className="text-sm text-gray-600">Hospital Beds</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">25+</p>
              <p className="text-sm text-gray-600">Countries Served</p>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-green-200 rounded-3xl blur-3xl opacity-40"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={hospitalImg}
              alt="Partner Hospital"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
