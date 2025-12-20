import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Activity,
  ShieldCheck,
  Stethoscope,
  Plane,
  Headphones,
  ArrowRight,
  CreditCard,
  Hospital,
  MapPin,
  Layout,
  Briefcase
} from "lucide-react";
import { servicesMenu } from "../data/servicesMenu";
import operationImg from "../assets/images/operations.png";
import HotelModal from "../components/common/HotelModal";
import HotelSlider from "../components/common/HotelSlider";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const luxuryHotels = [
  {
    city: "Pune – 5 Star Hotels",
    hotels: [
      {
        name: "Taj Blue Diamond, Pune",
        image: "https://th.bing.com/th/id/OIP.g1SqzLcAeMtUkKhHoEmjnwHaFS?w=185&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        desc: "Luxury heritage hotel close to top multi-specialty hospitals.",
      },
      {
        name: "JW Marriott, Pune",
        image: "https://th.bing.com/th/id/OIP.I1PfuozZyl5PhqbbxMnHtQHaE8?w=213&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        desc: "Premium stay with international patient-friendly amenities.",
      },
      {
        name: "The Ritz-Carlton, Pune",
        image: "https://th.bing.com/th/id/OIP.COKM71crP5ACC5hU8_NH9wHaH4?w=169&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        desc: "Ultra-luxury suites with personalized wellness services.",
      },
      {
        name: "Conrad Pune",
        image: "https://th.bing.com/th/id/OIP.Yztp4jLnyVqCRE_gQm7cPAHaE8?w=242&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        desc: "Modern luxury hotel near healthcare hubs.",
      },
      {
        name: "Hyatt Regency Pune",
        image: "https://th.bing.com/th/id/OIP._avJ5ZsFpyUSJoRPPolyYQHaE8?w=224&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        desc: "Comfort-focused luxury for long medical stays.",
      },
    ],
  },

  {
    city: "Mulshi – Wellness Resorts",
    hotels: [
      {
        name: "Atmantan Wellness Resort",
        image: "https://www.luxurygetaways.in/uploads/services/service-banner/atmantan-wellness-resort_serv_1281.jpg",
        desc: "Holistic recovery & wellness retreat in nature.",
      },
      {
        name: "Dharana at Shillim",
        image: "https://assets.vogue.in/photos/66bcbb0198026ccf47bd62fa/16:9/w_1280,c_limit/DJI_0088.jpg?mbid=social_retweet",
        desc: "Luxury medical wellness & rehabilitation resort.",
      },
      {
        name: "SaffronStays Mulshi",
        image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202408291154242996-e0c4816a-456d-49a9-ab1b-80d6b51bafb5.jpg",
        desc: "Private luxury villas for peaceful recovery.",
      },
      {
        name: "Jalsrushti Island Resort",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/617280200.jpg?k=099eb4d0a8fe20b93adfc59ccb28d157d0be686b726a09beb27e7c792f62d3d9&o=&hp=1",
        desc: "Eco-luxury wellness stay.",
      },
      {
        name: "Residency Lake Resort",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527811168.jpg?k=74faf2d899c7dec8d5f33aa0d71c54c2e12f5a4e9660bd200dd0acc52ccb1566&o=&hp=1",
        desc: "Serene lake-side wellness experience.",
      },
    ],
  },

  {
    city: "Bangalore – Luxury Hotels",
    hotels: [
      { name: "The Oberoi, Bengaluru", image: "https://media-cdn.tripadvisor.com/media/photo-s/01/08/4e/41/oberoi-hotel-bangalore.jpg", desc: "Premium luxury near healthcare zones." },
      { name: "Taj West End", image: "https://tse3.mm.bing.net/th/id/OIP.e5XbgtXGi3MTAoyh1BZXYQHaEc?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Heritage luxury amidst greenery." },
      { name: "JW Marriott Bengaluru", image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/02001151/Featured-Inside-14.jpeg", desc: "City-center luxury hotel." },
      { name: "ITC Gardenia", image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/mobile/ITC-gardenia.png", desc: "Sustainable luxury hospitality." },
      { name: "The Leela Palace", image: "https://photos.hotelbeds.com/giata/xxl/06/061283/061283a_hb_a_018.jpg", desc: "Royal luxury experience." },
    ],
  },
];

export default function Services() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <section className="bg-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 border-b border-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] md:[background-size:32px_32px] opacity-[0.15] -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-50 rounded-full blur-[80px] md:blur-[100px] opacity-40 -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-[9px] md:text-[10px] font-black uppercase tracking-widest"
          >
            Premium Medical Facilitation
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#062419] tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Healthcare <span className="text-green-600">Services</span>
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-8 text-lg md:text-2xl text-[#0a3d2e]/80 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Complete end-to-end medical tourism support with global standards, 
            ensuring your journey to health is seamless and stress-free.
          </motion.p>
        </div>
      </div>

      {/* SPECIALIST SERVICES */}
      <div className="py-20 md:py-28 bg-[#fcfdfc]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight leading-tight">
              Specialist Medical <br className="hidden md:block" /> 
              <span className="text-green-600">Facilitation</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-green-500 rounded-full my-6 md:my-8" />
            <p className="text-base md:text-xl text-[#0a3d2e] font-medium leading-relaxed opacity-80">
              Expertise across cardiology, oncology, orthopaedics, and more, 
              connecting you with India's most renowned medical institutions.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
          >
            {[
              { title: "Patient-centric care", desc: "Personalized support plans", icon: <Stethoscope size={24} /> },
              { title: "All-inclusive packages", desc: "Travel & accommodation", icon: <Layout size={24} /> },
              { title: "Global specialists", desc: "Top super-specialty doctors", icon: <Activity size={24} /> },
              { title: "High-value procedures", desc: "Transplants & oncology", icon: <ShieldCheck size={24} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 md:p-10 border border-green-100 rounded-[2rem] md:rounded-[3rem] bg-white shadow-xl shadow-green-900/5 hover:border-green-400 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#062419] mb-2 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-[#0a3d2e]/70 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* TREATMENTS GRID */}
      <div className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#062419]">
              Treatments Available
            </h2>
            <p className="text-green-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-3 md:mt-4">Advanced Clinical Expertise</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesMenu.flatMap(s => s.items).map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-green-50 bg-white hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500"
              >
                <div className="overflow-hidden h-64 md:h-72">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062419] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {item.label}
                  </h3>
                  <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="mt-2 text-[10px] md:text-sm text-green-100/80">
                      Advanced treatment by India’s top specialists.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE CAROUSEL BLOCKS (DARK SECTION) */}
      <div className="py-20 md:py-32 bg-[#062419]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-20 text-center">Travel & Logistics Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ModernServiceCard icon={<Plane />} title="Medical Visa Assistance" desc="Complete documentation support, hospital invitation letters, embassy coordination & fast-track approvals." />
            <ModernServiceCard icon={<Briefcase />} title="International Flights" desc="Best flight fares, medical assistance, wheelchair support & priority boarding for patients." />
            <ModernServiceCard icon={<Hospital />} title="Hospital Network" desc="Direct tie-ups with Apollo, Fortis, Manipal, Max, Medanta, and other top-tier chains." />
            <ModernServiceCard icon={<Heart />} title="Post Treatment" desc="Rehabilitation, physiotherapy, medication management & rigorous recovery follow-ups." />
            <ModernServiceCard icon={<Headphones />} title="Free Consultations" desc="Unlimited virtual consultations with your doctors even after you return to your home country." />
            <ModernServiceCard icon={<CreditCard />} title="Finance Availability" desc="Treatment financing, international insurance coordination & transparent flexible payment options." />
          </div>
        </div>
      </div>

      {/* LUXURY HOTELS */}
      <div className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-[#062419] tracking-tight leading-tight">
              Luxury Stays & Wellness Resorts
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-xl text-[#0a3d2e]/70 font-medium">Comfort is essential for recovery. We partner with India's finest hospitality brands.</p>
          </div>

          {luxuryHotels.map((city, i) => (
            <div key={i} className="relative">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                <div className="h-px flex-1 bg-green-100" />
                <h3 className="text-xl md:text-3xl font-bold text-[#062419] px-4 md:px-6 py-2 bg-green-50 rounded-full text-center">
                  {city.city}
                </h3>
                <div className="h-px flex-1 bg-green-100" />
              </div>
              <div className="relative -mx-6 md:mx-0 px-6 md:px-0">
                <HotelSlider hotels={city.hotels} onSelect={setSelectedHotel} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <HotelModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />

      {/* OPERATIONAL EXCELLENCE */}
      <div className="py-20 md:py-32 bg-[#fcfdfc] border-y border-green-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative p-2 md:p-4 group"
          >
            <div className="absolute inset-0 bg-green-500 rounded-[2.5rem] md:rounded-[4rem] rotate-3 -z-10 opacity-10" />
            <div className="overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border-4 md:border-8 border-white shadow-2xl">
              <img
                src={operationImg}
                alt="Operational excellence"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8 md:space-y-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#062419] tracking-tight">
              Operational Excellence
            </h2>
            <div className="grid gap-4 md:gap-6">
              {[
                ["24/7 Support", "Dedicated patient care teams", <Headphones key="1" size={24}/>],
                ["Strategic locations", "HQ in Pune & 7+ cities", <MapPin key="2" size={24}/>],
                ["Healthcare staff", "19+ operations specialists", <Activity key="3" size={24}/>],
                ["Digital outreach", "21+ marketing professionals", <Layout key="4" size={24}/>],
              ].map(([title, desc, icon], i) => (
                <div key={i} className="flex items-center justify-between p-6 md:p-8 bg-white border border-green-100 rounded-[1.5rem] md:rounded-[2rem] group hover:border-green-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-green-600 bg-green-50 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all">
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-[#062419]">{title}</h4>
                      <p className="text-sm md:text-base text-[#0a3d2e]/60 font-medium">{desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-green-200 group-hover:text-green-600" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="px-6 py-20 md:py-32 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-[#062419] to-[#0a3d2e] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-[80px] md:blur-[100px]" />
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight relative z-10">
            Start Your Treatment <br className="hidden md:block"/> Journey Today
          </h2>
          <p className="mt-6 md:mt-8 text-green-100/70 text-base md:text-xl font-medium max-w-2xl mx-auto relative z-10">
            Speak with our medical facilitators for a free personalized consultation and a customized treatment roadmap.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 md:gap-4 mt-10 md:mt-14 px-8 md:px-14 py-4 md:py-6 bg-green-500 text-[#062419] rounded-full font-black text-lg md:text-xl hover:bg-white hover:scale-105 transition-all relative z-10 shadow-2xl"
          >
            Book Free Consultation
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ModernServiceCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeUp}
      whileHover={{ y: -10 }}
      className="p-8 md:p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 group"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 md:mb-10 group-hover:bg-green-500 group-hover:text-[#062419] transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">{title}</h3>
      <p className="text-green-50/60 text-sm md:text-base leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}