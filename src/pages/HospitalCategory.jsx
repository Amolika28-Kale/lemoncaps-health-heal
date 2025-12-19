import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, UserCheck, Hospital, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* CENTRAL DATA */
const hospitalDB = {
  "heart-hospitals": {
    hospitals: [
      { name: "Apollo Hospitals", city: "Delhi" },
      { name: "Fortis Escorts", city: "Delhi" },
      { name: "Sahyadri Hospitals", city: "Pune" },
    ],
    doctors: [
      { name: "Dr. Ramakanta Panda", specialty: "Heart Surgeon" },
      { name: "Dr. Naresh Trehan", specialty: "Cardiac Surgeon" },
      { name: "Dr. Arvinder Soin", specialty: "Cardiology Expert" },
    ],
  },
  "apollo-hospitals": {
    hospitals: [
      { name: "Apollo Chennai", city: "Chennai" },
      { name: "Apollo Delhi", city: "Delhi" },
      { name: "Apollo Hyderabad", city: "Hyderabad" },
    ],
    doctors: [
      { name: "Dr. Muffazal Lakdawala", specialty: "Laparoscopic Surgeon" },
      { name: "Dr. Raghu Ram", specialty: "Cancer Specialist" },
      { name: "Dr. Suresh Rao", specialty: "Internal Medicine" },
    ],
  },
  "jaslok-hospital-mumbai": {
    hospitals: [
      { name: "Jaslok Hospital & Research Centre", city: "Mumbai" },
    ],
    doctors: [
      { name: "Dr. Farokh Udwadia", specialty: "Pulmonologist" },
      { name: "Dr. Shyam Bhandari", specialty: "Nephrologist" },
      { name: "Dr. Ramesh Sarin", specialty: "Oncologist" },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HospitalCategory() {
  const { slug } = useParams();
  const data = hospitalDB[slug];

  return (
    <section className="relative min-h-screen pt-32 pb-24 bg-white overflow-hidden">
      {/* Background Precision Grid - Mint Green tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:32px_32px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          to="/hospital" 
          className="inline-flex items-center gap-2 text-green-600 font-bold text-sm mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Network
        </Link>

        {/* Page Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border-b border-green-100 pb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#062419] capitalize tracking-tighter">
            {slug.replace(/-/g, " ")}
          </h1>
          <p className="mt-4 text-[#0a3d2e] text-lg font-medium opacity-70">
            Verified medical facilities and specialist consultants associated with Lemoncaps.
          </p>
        </motion.div>

        {!data && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 p-12 rounded-[2rem] bg-green-50/50 border border-green-100 text-center"
          >
            <p className="text-[#0a3d2e] font-bold text-lg italic">
              Information for this category is being verified and will be updated soon.
            </p>
          </motion.div>
        )}

        {data && (
          <div className="space-y-20 mt-16">
            {/* HOSPITALS SECTION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-green-600 rounded-lg text-white">
                  <Hospital size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#062419]">Accredited Hospitals</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.hospitals.map((h, i) => (
                  <div 
                    key={i} 
                    className="group bg-white p-8 rounded-[2rem] border border-green-100 hover:border-green-400 transition-all duration-300 shadow-sm shadow-green-900/5"
                  >
                    <h3 className="text-xl font-bold text-[#062419] group-hover:text-green-600 transition-colors">
                      {h.name}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-[#0a3d2e] font-medium opacity-70">
                      <MapPin size={16} className="text-green-500" />
                      <span>{h.city}, India</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DOCTORS SECTION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-green-600 rounded-lg text-white">
                  <UserCheck size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#062419]">Specialist Consultants</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.doctors.map((d, i) => (
                  <div 
                    key={i} 
                    className="group bg-[#062419] p-8 rounded-[2rem] border border-green-900/20 hover:bg-green-600 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {d.name}
                    </h3>
                    <p className="mt-2 text-green-400 group-hover:text-white font-black text-xs uppercase tracking-widest">
                      {d.specialty}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                       <span className="text-[10px] text-white/40 group-hover:text-white/60 font-bold uppercase tracking-widest">Verified Expert</span>
                       <UserCheck size={18} className="text-green-500 group-hover:text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}