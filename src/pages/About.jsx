import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { HeartHandshake, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <section className="bg-white">
      <SEO
        title="About Lemoncaps Health & Heal | Trusted Medical Tourism Partner"
        description="Learn about Lemoncaps Health & Heal, our vision, mission, and commitment to ethical medical tourism in India."
        keywords="about medical tourism India, Lemoncaps founder, healthcare facilitation"
        canonical="https://lemoncapshealth.com/about"
      />

      {/* HERO - Deep Green Palette */}
      <div className="relative pt-32 pb-20 border-b border-green-50 overflow-hidden">
        {/* Subtle Mint Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:24px_24px] opacity-60 -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Trusted Globally for Excellence
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-[#062419] tracking-tight leading-[1.1]"
          >
            About <span className="text-green-600">Lemoncaps</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-[#0a3d2e] max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
          >
            A trusted global medical tourism partner delivering ethical,
            transparent, and world-class healthcare access in India.
          </motion.p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="py-24 border-b border-green-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062419] tracking-tight">
              Who We Are
            </h2>
            <p className="text-lg text-[#0a3d2e] leading-relaxed font-medium opacity-80">
              Lemoncaps Health & Heal was founded with a clear mission — to
              simplify international medical travel while maintaining the
              highest standards of care, trust, and transparency.
            </p>
            <p className="text-lg text-[#0a3d2e] leading-relaxed font-medium opacity-80">
              We serve as a bridge between patients and India’s world-class
              healthcare ecosystem, ensuring safety, affordability, and
              exceptional clinical outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="relative p-3 bg-white border border-green-100 rounded-[2.5rem]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute -inset-2 bg-green-50 rounded-[40px] -z-10 transform rotate-2"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt="Healthcare professionals"
              className="rounded-[2rem] w-full object-cover border border-green-50 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* VALUES - Minimalist Cards with Theme Colors */}
      <div className="py-24 bg-green-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#062419] tracking-tight">What Defines Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldCheck size={28} />}
              title="Ethical Care"
              desc="Complete transparency, patient safety, and trusted hospital partnerships."
            />
            <ValueCard
              icon={<Globe size={28} />}
              title="Global Reach"
              desc="Serving international patients across multiple countries."
            />
            <ValueCard
              icon={<HeartHandshake size={28} />}
              title="Patient First"
              desc="Compassionate support before, during, and after treatment."
            />
          </div>
        </div>
      </div>

      {/* FOUNDER'S NOTE - Executive Deep Green Style */}
      <div className="py-32 border-b border-green-50 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-green-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-sm shadow-green-900/5">
            <motion.img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
              alt="Founder"
              className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover border border-green-100 grayscale hover:grayscale-0 transition-all duration-500"
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
              className="flex-1"
            >
              <h2 className="text-sm font-black text-green-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                Founder’s Note
                <div className="h-px flex-1 bg-green-100"></div>
              </h2>
              <p className="text-2xl text-[#062419] leading-relaxed italic font-medium">
                “Healthcare is not just about treatment — it’s about trust,
                empathy, and outcomes. Our goal is to ensure every international
                patient feels safe, informed, and confident.”
              </p>
              <div className="mt-8">
                <p className="font-bold text-xl text-[#062419]">Dayanand V. P.</p>
                <p className="text-green-600 text-xs font-black uppercase tracking-widest mt-1">Founder — Lemoncaps Health & Heal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP TEAM */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#062419]">
              Our <span className="text-green-600">Leadership Team</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <TeamCard name="Mr. Dayanand V. P." role="Founder & CEO" img="https://images.unsplash.com/photo-1560250097-0b93528c311a" />

            <TeamCard name="Dr. Sanjay G." role="Executive Director" img="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" />
            <TeamCard name="Dr. Shweta S." role="Executive Director" img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" />
            <TeamCard name="Dr. Nazim S." role="Executive Director" img="https://images.unsplash.com/photo-1537368910025-700350fe46c7" />

            <TeamCard name="Pooja Shinde" role="Chief Operating Officer" img="https://images.unsplash.com/photo-1598257006626-48b0c252070d" />
            <TeamCard name="Parag Patankar" role="Chief Technical Officer" img="https://images.unsplash.com/photo-1556157382-97eda2d62296" />
            <TeamCard name="Suhas Sahu" role="Operations" img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1" />
            <TeamCard name="Surendra Sharma" role="International Customer Relationship Head" img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" />
            <TeamCard name="Yash Lunkad" role="Digital Head" img="https://media.istockphoto.com/id/953587362/photo/businessman-standing-with-his-arms-folded-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=mPW5qvGvDq-8SAiavlGhqT5p3eiur2DqdhSmYCUfPgY=" />
          </div>
        </div>
      </div>

      {/* FUTURE ROADMAP */}
      <div className="py-24 bg-white border-t border-green-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-[#062419] tracking-tight">Future Roadmap</h2>
             <p className="text-[#0a3d2e] mt-2 font-medium opacity-70 tracking-tight text-lg">Expanding globally through technology and verified partnerships.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <RoadmapCard text="Global patient outreach expansion" />
            <RoadmapCard text="More accredited hospital partnerships" />
            <RoadmapCard text="AI-driven healthcare coordination" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* UI Reusable Components with Deep Green Palette */

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-green-100 rounded-[2rem] p-10 hover:border-green-300 transition-all duration-300 shadow-sm shadow-green-900/5 group">
      <div className="w-14 h-14 bg-green-50 text-green-700/50 group-hover:bg-green-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#062419] tracking-tight">{title}</h3>
      <p className="mt-4 text-[#0a3d2e] text-sm leading-relaxed font-medium opacity-70">{desc}</p>
    </div>
  );
}

function RoadmapCard({ text }) {
  return (
    <div className="group flex items-center justify-between p-8 bg-white border border-green-100 rounded-[2rem] hover:bg-green-50/50 transition-colors cursor-default">
      <span className="text-[#062419] font-bold tracking-tight">{text}</span>
      <ArrowRight size={20} className="text-green-200 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/5] bg-green-50 border border-green-100 shadow-sm shadow-green-900/5">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <h3 className="text-xl font-bold text-[#062419] tracking-tight leading-tight">{name}</h3>
      <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mt-2">{role}</p>
    </motion.div>
  );
}