import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HotelSlider({ hotels, onSelect }) {
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scrollBy = (direction) => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -window.innerWidth * 0.8 : window.innerWidth * 0.8;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const checkScroll = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 20);
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <div className="relative group/slider w-full">
      {/* Navigation - Hidden on very small screens, shown on MD up */}
      <div className="absolute -top-12 right-4 md:-top-16 md:right-0 flex gap-2 md:gap-3">
        <button
          onClick={() => scrollBy("left")}
          className={`p-2 md:p-3 rounded-full border transition-all ${
            canScrollLeft ? "border-green-200 text-green-700 bg-white" : "border-gray-100 text-gray-300 opacity-50"
          }`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scrollBy("right")}
          className="p-2 md:p-3 rounded-full border border-green-200 text-green-700 bg-white hover:bg-green-50 transition-all shadow-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-8 overflow-x-auto pb-8 md:pb-12 px-1 scrollbar-hide scroll-smooth snap-x"
        onMouseEnter={() => clearInterval(autoScrollRef.current)}
      >
        {hotels.map((hotel, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            onClick={() => onSelect(hotel)}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] snap-center cursor-pointer rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white border border-green-50 shadow-sm hover:shadow-xl transition-all duration-500 group shrink-0"
          >
            {/* Image Wrap */}
            <div className="relative h-48 sm:h-60 md:h-72 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              {/* Floating Badge */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <MapPin size={10} className="text-green-600" />
                <span className="text-[8px] md:text-[10px] font-bold text-[#062419] uppercase tracking-wider">Premium</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-5 md:p-7">
              <h4 className="text-lg md:text-xl font-bold text-[#062419] group-hover:text-green-600 transition-colors line-clamp-1">
                {hotel.name}
              </h4>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-[#0a3d2e]/60 font-medium leading-relaxed line-clamp-2">
                {hotel.desc}
              </p>
              
              <div className="mt-5 md:mt-6 flex items-center justify-between border-t border-green-50 pt-4">
                <span className="text-[9px] md:text-[10px] font-black text-green-600 uppercase tracking-widest">View Details</span>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArrowRight({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}