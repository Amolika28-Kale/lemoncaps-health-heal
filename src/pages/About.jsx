import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { HeartHandshake, Globe, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section className="bg-white overflow-hidden">
      <SEO
        title="About Lemoncaps Health & Heal | Trusted Medical Tourism Partner"
        description="Learn about Lemoncaps Health & Heal, our vision, mission, and commitment to ethical medical tourism in India."
        keywords="about medical tourism India, Lemoncaps founder, healthcare facilitation"
        canonical="https://lemoncapshealth.com/about"
      />

      {/* HERO */}
      <div className="py-28 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900"
          >
            About <span className="text-green-600">Lemoncaps Health & Heal</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A trusted global medical tourism partner delivering ethical,
            transparent, and world-class healthcare access in India.
          </motion.p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Lemoncaps Health & Heal was founded with a clear mission — to
              simplify international medical travel while maintaining the
              highest standards of care, trust, and transparency.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve as a bridge between patients and India’s world-class
              healthcare ecosystem, ensuring safety, affordability, and
              exceptional clinical outcomes.
            </p>
          </motion.div>

          <motion.img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Healthcare professionals"
            className="rounded-3xl shadow-lg w-full object-cover"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* VALUES */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            What Defines Us
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <ValueCard
              icon={<ShieldCheck size={32} />}
              title="Ethical Care"
              desc="Complete transparency, patient safety, and trusted hospital partnerships."
            />
            <ValueCard
              icon={<Globe size={32} />}
              title="Global Reach"
              desc="Serving international patients across multiple countries."
            />
            <ValueCard
              icon={<HeartHandshake size={32} />}
              title="Patient First"
              desc="Compassionate support before, during, and after treatment."
            />
          </div>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <motion.img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
            alt="Founder"
            className="w-72 h-72 rounded-full object-cover shadow-lg mx-auto"
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
            <h2 className="text-3xl font-bold text-gray-900">
              Founder’s Note
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed italic">
              “Healthcare is not just about treatment — it’s about trust,
              empathy, and outcomes. Our goal is to ensure every international
              patient feels safe, informed, and confident.”
            </p>

            <p className="mt-4 font-semibold text-gray-900">
              — Founder, Lemoncaps Health & Heal
            </p>
          </motion.div>
        </div>
      </div>

      {/* FUTURE */}
      <div className="py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Our Future Roadmap
          </motion.h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Expanding globally while enhancing patient experience through
            technology and innovation.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <RoadmapCard text="🌍 Global patient outreach expansion" />
            <RoadmapCard text="🏥 More accredited hospital partnerships" />
            <RoadmapCard text="⚙️ AI-driven healthcare coordination" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Components */

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}

function RoadmapCard({ text }) {
  return (
    <div className="bg-gray-700 rounded-2xl p-8 text-lg">
      {text}
    </div>
  );
}
