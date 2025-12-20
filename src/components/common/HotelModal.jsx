import { X, CheckCircle2, Hospital, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HotelModal({ hotel, onClose }) {
  if (!hotel) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-4">
        {/* Animated Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#062419]/60 backdrop-blur-md" 
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-[2rem] md:rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto md:overflow-hidden shadow-2xl relative z-10"
        >
          {/* Close Button - Responsive Position */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#062419] hover:bg-green-500 hover:text-white transition-all shadow-lg"
          >
            <X size={18} className="md:w-5 md:h-5" />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative h-56 md:h-auto shrink-0">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062419]/40 to-transparent md:hidden" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="inline-block self-start px-3 py-1 rounded-full bg-green-50 text-green-700 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                Partner Stay
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#062419] leading-tight">
                {hotel.name}
              </h3>

              <p className="mt-3 md:mt-4 text-sm md:text-base text-[#0a3d2e]/70 font-medium leading-relaxed">
                {hotel.desc}
              </p>

              {/* Feature Tags */}
              <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
                {[
                  { icon: <CheckCircle2 size={16} />, text: "Medical Approved" },
                  { icon: <Hospital size={16} />, text: "Near Hospitals" },
                  { icon: <Clock size={16} />, text: "24/7 Assistance" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-[#062419]">
                    <span className="text-green-500 shrink-0">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <button 
                onClick={onClose}
                className="w-full mt-8 md:mt-10 py-3.5 md:py-4 bg-green-600 text-white rounded-xl md:rounded-2xl font-bold hover:bg-[#062419] transition-colors shadow-lg shadow-green-900/10 text-sm md:text-base"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}