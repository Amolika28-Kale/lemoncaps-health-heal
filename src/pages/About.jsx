import { motion } from "framer-motion";
import SEO from "../components/common/SEO";
import { HeartHandshake, Globe, ShieldCheck, ArrowRight, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function About() {
  return (
    <section className="bg-white overflow-x-hidden">
      <SEO
        title="About Lemoncaps Health & Heal | Trusted Medical Tourism Partner"
        description="Learn about Lemoncaps Health & Heal, our vision, mission, and commitment to ethical medical tourism in India."
        keywords="about medical tourism India, Lemoncaps founder, healthcare facilitation"
        canonical="https://lemoncapshealth.com/about"
      />

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] md:[background-size:32px_32px] opacity-[0.12] -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-green-50 rounded-full blur-[80px] md:blur-[120px] opacity-40 -z-10 translate-x-1/4 -translate-y-1/4" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8 inline-flex items-center gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white border border-green-100 text-green-700 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Trusted Globally for Excellence
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#062419] tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            About <span className="text-green-600 relative">
                Lemoncaps
                <svg className="absolute -bottom-2 left-0 w-full opacity-30" height="8" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                    <path d="M2 8C40 2 160 2 198 8" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-10 text-lg md:text-2xl text-[#0a3d2e]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A trusted global medical tourism partner delivering ethical,
            transparent, and world-class healthcare access in India.
          </motion.p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="py-20 md:py-28 bg-[#fcfdfc]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight">
                    Who We Are
                </h2>
                <div className="w-16 h-1.5 bg-green-500 rounded-full mt-4" />
            </div>
            
            <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-xl text-[#0a3d2e] leading-relaxed font-medium opacity-90">
                    Lemoncaps Health & Heal was founded with a clear mission — to
                    simplify international medical travel while maintaining the
                    highest standards of care, trust, and transparency.
                </p>
                <p className="text-base md:text-lg text-[#0a3d2e]/70 leading-relaxed font-medium">
                    We serve as a bridge between patients and India’s world-class
                    healthcare ecosystem, ensuring safety, affordability, and
                    exceptional clinical outcomes.
                </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative p-2 md:p-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-2 md:-inset-4 bg-green-100/50 rounded-[2rem] md:rounded-[3rem] -z-10 rotate-3" />
            
            <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[12px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Healthcare professionals"
                className="w-full h-[350px] md:h-[500px] object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#062419] tracking-tight">What Defines Us</h2>
            <p className="text-green-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-3">Our Core Pillars</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
          >
            <ValueCard
              icon={<ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />}
              title="Ethical Care"
              desc="Complete transparency, patient safety, and trusted hospital partnerships."
            />
            <ValueCard
              icon={<Globe className="w-6 h-6 md:w-8 md:h-8" />}
              title="Global Reach"
              desc="Serving international patients across multiple countries with seamless care."
            />
            <ValueCard
              icon={<HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />}
              title="Patient First"
              desc="Compassionate support before, during, and after treatment journey."
            />
          </motion.div>
        </div>
      </div>

      {/* FOUNDER'S NOTE */}
      <div className="py-20 md:py-32 bg-[#062419] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-[80px] md:blur-[100px]" />
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row gap-10 md:gap-16 items-center shadow-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative shrink-0"
            >
              <div className="absolute -inset-3 md:-inset-4 border border-green-500/30 rounded-[2.5rem] md:rounded-[3rem] rotate-6" />
              <div className="overflow-hidden rounded-[2.5rem] w-full max-w-[280px] lg:w-80 h-[350px] md:h-[450px] shadow-2xl mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-white text-center lg:text-left"
            >
              <Quote className="text-green-500 mb-6 md:mb-8 opacity-50 mx-auto lg:mx-0" size={40} />
              <h2 className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em] mb-4">Founder’s Perspective</h2>
              <p className="text-xl md:text-3xl lg:text-4xl leading-snug italic font-medium text-green-50/90 mb-8 md:mb-10">
               “Healthcare is not just about treatment — it’s about trust,
                empathy, and outcomes. Our goal is to ensure every international
                patient feels safe, informed, and confident.”
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="font-bold text-xl md:text-2xl">Dayanand V. P.</p>
                <p className="text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mt-2">Founder — Lemoncaps Health & Heal</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP TEAM */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold text-[#062419] tracking-tight">
              Our <span className="text-green-600">Leadership Team</span>
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-[#0a3d2e]/60 max-w-2xl mx-auto font-medium">
                Driven by experts committed to clinical excellence and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20">
            <TeamCard name="Mr. Dayanand V. P." role="Founder & CEO" img="https://images.unsplash.com/photo-1560250097-0b93528c311a" />
            <TeamCard name="Dr. Sanjay G." role="Executive Director" img="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" />
            <TeamCard name="Dr. Shweta S." role="Head of Consultation" img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2" />
            <TeamCard name="Dr. Nazim S." role="Executive Director" img="https://images.unsplash.com/photo-1537368910025-700350fe46c7" />
            <TeamCard name="Pooja Shinde" role="COO" img="https://images.unsplash.com/photo-1598257006626-48b0c252070d" />
            <TeamCard name="Parag Patankar" role="CTO" img="https://images.unsplash.com/photo-1556157382-97eda2d62296" />
            <TeamCard name="Suhas Sahu" role="Operations" img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1" />
            <TeamCard name="Surendra Sharma" role="Int. CRM Head" img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" />
            <TeamCard name="Yash Lunkad" role="Digital Head" img="https://media.istockphoto.com/id/953587362/photo/businessman-standing-with-his-arms-folded-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=mPW5qvGvDq-8SAiavlGhqT5p3eiur2DqdhSmYCUfPgY=" />
          </div>
        </div>
      </div>

      {/* ROADMAP SECTION */}
      <div className="py-20 md:py-32 bg-[#f8faf9] border-t border-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#062419] tracking-tight">Future Roadmap</h2>
                <p className="text-[#0a3d2e]/60 mt-2 md:mt-4 font-medium text-base md:text-lg max-w-md">Expanding globally through technology and verified partnerships.</p>
            </div>
            <div className="h-px flex-1 bg-green-200 hidden md:block mx-10 mb-4" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <RoadmapCard text="Global patient outreach expansion" index={1} />
            <RoadmapCard text="More accredited hospital partnerships" index={2} />
            <RoadmapCard text="AI-driven healthcare coordination" index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="bg-white border border-green-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 transition-all duration-500 shadow-sm hover:shadow-2xl group"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 md:mb-10 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#062419] tracking-tight mb-2 md:mb-4">{title}</h3>
      <p className="text-[#0a3d2e]/70 text-sm md:text-base leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function RoadmapCard({ text, index }) {
  return (
    <motion.div 
        variants={fadeUp}
        className="group relative p-8 md:p-10 bg-white border border-green-100 rounded-[2rem] md:rounded-[2.5rem] hover:border-green-500 transition-all duration-300 cursor-default overflow-hidden"
    >
      <span className="absolute top-4 right-6 md:top-6 md:right-8 text-3xl md:text-4xl font-black text-green-500/10 group-hover:text-green-500/20 transition-colors">0{index}</span>
      <span className="text-[#062419] text-base md:text-lg font-bold tracking-tight pr-8 block">{text}</span>
      <div className="mt-6 md:mt-8 flex items-center gap-2 text-green-600 font-bold text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all">
        Vision 2025 <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className="group"
    >
      <div className="relative mb-6 md:mb-8 aspect-[4/5]">
        <div className="absolute inset-0 bg-green-500 rounded-[2rem] md:rounded-[3rem] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 opacity-0 group-hover:opacity-20 transition-all duration-500" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-green-50 border border-green-100 shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-1">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        </div>
      </div>

      <div className="px-2">
        <h3 className="text-lg md:text-2xl font-bold text-[#062419] tracking-tight leading-tight group-hover:text-green-700 transition-colors">
            {name}
        </h3>
        <p className="text-[9px] md:text-[11px] font-black text-green-600 uppercase tracking-[0.2em] mt-2 md:mt-3 flex items-center gap-2">
            <span className="w-3 md:w-4 h-[1px] bg-green-200"></span>
            {role}
        </p>
      </div>
    </motion.div>
  );
}