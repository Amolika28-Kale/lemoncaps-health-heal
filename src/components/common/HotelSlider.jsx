import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HotelSlider({ hotels, onSelect }) {
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  const scrollBy = (direction) => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // 🔁 Auto scroll
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      if (!sliderRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      // reset to start if reached end
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <div className="relative">
      {/* ⬅ Left Arrow */}
      <button
        onClick={() => scrollBy("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-green-100 rounded-full p-2 shadow hover:bg-green-50"
      >
        <ChevronLeft className="text-green-700" />
      </button>

      {/* ➡ Right Arrow */}
      <button
        onClick={() => scrollBy("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-green-100 rounded-full p-2 shadow hover:bg-green-50"
      >
        <ChevronRight className="text-green-700" />
      </button>

      {/* 🧭 Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-6 px-10 scrollbar-hide scroll-smooth"
        onMouseEnter={() => clearInterval(autoScrollRef.current)}
        onMouseLeave={() => {
          autoScrollRef.current = setInterval(() => {
            sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
          }, 3500);
        }}
      >
        {hotels.map((hotel, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            onClick={() => onSelect(hotel)}
className="min-w-[260px] md:min-w-[280px] cursor-pointer rounded-[2rem]
overflow-hidden border border-green-100 bg-white
shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
className="h-60 md:h-64 w-full object-cover"
              loading="lazy"
            />

            <div className="p-5">
              <h4 className="font-bold text-[#062419]">
                {hotel.name}
              </h4>
              <p className="mt-2 text-sm text-[#0a3d2e] opacity-70">
                Click to view details
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
