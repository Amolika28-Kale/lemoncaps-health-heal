import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function HotelModal({ hotel, onClose }) {
  if (!hotel) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
className="bg-white rounded-[2.5rem] max-w-xl w-full overflow-hidden
shadow-2xl shadow-green-900/30"
      >
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-72 w-full object-cover"
        />

        <div className="p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-green-600"
          >
            <X />
          </button>

          <h3 className="text-2xl font-bold text-[#062419]">
            {hotel.name}
          </h3>

          <p className="mt-4 text-[#0a3d2e] opacity-80">
            {hotel.desc}
          </p>

          <p className="mt-6 text-sm text-green-600 font-semibold">
            ✔ Medical tourism approved luxury stay  
            <br />
            ✔ Near top hospitals  
            <br />
            ✔ 24/7 patient assistance
          </p>
        </div>
      </motion.div>
    </div>
  );
}
