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
  Layout
} from "lucide-react";
import { servicesMenu } from "../data/servicesMenu";
import operationImg from "../assets/images/operations.png";
import HotelModal from "../components/common/HotelModal";
import HotelSlider from "../components/common/HotelSlider";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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
      <div className="relative pt-32 pb-24 border-b border-green-50">
        <div className="absolute inset-0 bg-[radial-gradient(#d1fae5_1px,transparent_1px)] [background-size:22px_22px] opacity-60 -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold text-[#062419]"
          >
            Healthcare <span className="text-green-600">Services</span>
          </motion.h1>
          <p className="mt-6 text-xl text-[#0a3d2e] max-w-2xl mx-auto opacity-90">
            Complete end-to-end medical tourism support with global standards.
          </p>
        </div>
      </div>
      {/* SPECIALIST SERVICES - High Contrast Grid */}
<div className="py-16 md:py-24 border-b border-green-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Specialist Medical <br /> Facilitation
            </h2>
            <p className="mt-6 text-lg text-[#0a3d2e] font-medium leading-relaxed opacity-80">
              Expertise across cardiology, oncology, orthopaedics, and more, 
              connecting you with India's most renowned medical institutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Patient-centric care", desc: "Personalized support plans", icon: <Stethoscope size={20} /> },
              { title: "All-inclusive packages", desc: "Travel & accommodation", icon: <Layout size={20} /> },
              { title: "Global specialists", desc: "Top super-specialty doctors", icon: <Activity size={20} /> },
              { title: "High-value procedures", desc: "Transplants & oncology", icon: <ShieldCheck size={20} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
className="p-7 md:p-8 border border-green-100 rounded-[2.25rem] bg-white/95 backdrop-blur-sm
shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/15
transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#062419]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#0a3d2e] font-medium opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
{/* ================= TREATMENTS AVAILABLE ================= */}
<div className="py-16 md:py-24 border-b border-green-50">
  <div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#062419] mb-10 md:mb-14">
      Treatments Available
    </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {servicesMenu.flatMap(s => s.items).map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group rounded-[2.5rem] overflow-hidden border border-green-100 bg-white hover:border-green-300 transition-all duration-300"
        >
          {/* Image */}
          <div className="overflow-hidden h-56">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#062419]">
              {item.label}
            </h3>
            <p className="mt-2 text-sm text-[#0a3d2e] opacity-80">
              Advanced treatment by India’s top specialists.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      {/* ================= MEDICAL VISA ================= */}
      <ServiceBlock
        icon={<Plane />}
        title="Medical Visa Assistance"
        desc="Complete documentation support, hospital invitation letters, embassy coordination & fast-track approvals."
      />

      {/* ================= FLIGHT ARRANGEMENTS ================= */}
      <ServiceBlock
        icon={<Plane />}
        title="International & Domestic Flights"
        desc="Best flight fares, medical assistance, wheelchair support & priority boarding."
      />

{/* ================= LUXURY HOTELS & RESORTS ================= */}
<div className="py-16 md:py-24 border-b border-green-50">
  <div className="max-w-7xl mx-auto px-6 space-y-20">

    <h2 className="text-4xl font-bold text-[#062419]">
      Luxury Stays & Wellness Resorts
    </h2>

    {luxuryHotels.map((city, i) => (
      <div key={i}>
        {/* City Title */}
        <h3 className="text-2xl font-bold text-[#062419] mb-8">
          {city.city}
        </h3>

        {/* Reusable Slider */}
      <div className="relative -mx-6 md:mx-0 px-6 md:px-0">
  <HotelSlider
    hotels={city.hotels}
    onSelect={setSelectedHotel}
  />
</div>

      </div>
    ))}

  </div>
</div>

{/* ================= HOTEL MODAL ================= */}
<HotelModal
  hotel={selectedHotel}
  onClose={() => setSelectedHotel(null)}
/>

      {/* ================= HOSPITAL NETWORK ================= */}
      <ServiceBlock
        icon={<Hospital />}
        title="Hospital Network"
        desc="Tie-ups with Apollo, Fortis, Manipal, Max, Medanta, Sahyadri & other top hospital chains."
      />

      {/* ================= POST TREATMENT ================= */}
      <ServiceBlock
        icon={<Heart />}
        title="Post Treatment Facilities"
        desc="Rehabilitation, physiotherapy, medication management & recovery follow-ups."
      />

      {/* ================= RETURN FLIGHTS ================= */}
      <ServiceBlock
        icon={<Plane />}
        title="Return Flights & Safe Delivery"
        desc="Fitness-to-fly clearance, medical escort & safe return to patient’s home country."
      />

      {/* ================= LIFELONG CONSULTATION ================= */}
      <ServiceBlock
        icon={<Headphones />}
        title="Life-long Free Consultations"
        desc="Unlimited virtual consultations with doctors even after returning home."
      />

      {/* ================= FINANCE ================= */}
      <ServiceBlock
        icon={<CreditCard />}
        title="Finance Availability"
        desc="Treatment financing, international insurance coordination & flexible payment options."
      />

      {/* OPERATIONAL EXCELLENCE */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative p-4 group">
  {/* Background shape */}
  <div className="absolute inset-0 bg-green-50/50 rounded-[3rem] -z-10 -translate-x-4 translate-y-4" />

  {/* Image wrapper (important) */}
  <div className="overflow-hidden rounded-[2.5rem]">
    <img
      src={operationImg}
      alt="Operational excellence"
      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
    />
  </div>
</div>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-[#062419] tracking-tight">
              Operational Excellence
            </h2>
            <div className="mt-10 space-y-4">
              {[
                ["24/7 Support", "Dedicated patient care teams", <Headphones key="1" size={18}/>],
                ["Strategic locations", "HQ in Pune & 7+ cities", <MapPin key="2" size={18}/>],
                ["Healthcare staff", "19+ operations specialists", <Activity key="3" size={18}/>],
                ["Digital outreach", "21+ marketing professionals", <Layout key="4" size={18}/>],
              ].map(([title, desc, icon], i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white border border-green-100 rounded-2xl group hover:border-green-300 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-green-600 bg-green-50 p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">{icon}</div>
                    <div>
                      <h4 className="font-bold text-[#062419]">{title}</h4>
                      <p className="text-sm text-[#0a3d2e] font-medium opacity-70">{desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-green-200 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-[#062419] rounded-[3.5rem] p-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Start Your Treatment Journey Today
          </h2>
          <p className="mt-6 text-[#d1fae5] opacity-90">
            Speak with our experts for a free personalized consultation.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-green-500 text-[#062419] rounded-full font-bold hover:bg-white transition"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

    </section>
  );
}

/* ================= REUSABLE SERVICE BLOCK ================= */
function ServiceBlock({ icon, title, desc }) {
  return (
    <div className="py-20 border-b border-green-50">
      <div className="max-w-6xl mx-auto px-6 flex items-start gap-6">
        <div className="p-4 bg-green-50 text-green-600 rounded-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#062419]">{title}</h3>
          <p className="mt-2 text-[#0a3d2e] opacity-80 max-w-2xl">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
