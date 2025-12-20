import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Floating Card - Using Deep Forest Green (#062419) as the base */}
        <div className="relative bg-[#062419] rounded-[3.5rem] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl shadow-green-900/20">
          
          {/* Internal Glow Effect - Brand Green Focus */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
               <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-green-400">
                  <Sparkles size={28} className="animate-pulse" />
               </div>
            </div>

            {/* Heading - High Contrast White */}
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Start Your Treatment Journey <br className="hidden md:block"/> with Confidence
            </h2>

            {/* Subtext - Mint Tint (#d1fae5) for better readability than pure white */}
            <p className="mt-8 text-lg md:text-xl text-[#d1fae5] max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
              Get personalized medical guidance from our experts and connect with
              India’s top hospitals — at a fraction of global costs.
            </p>

            <div className="mt-14 flex justify-center">
                           <a
  href="https://calendly.com/"
  target="_blank"
  rel="noopener noreferrer"
className="group inline-flex items-center gap-3 px-12 py-5 bg-green-500 text-[#062419] rounded-full font-black text-lg hover:bg-white transition-all shadow-xl shadow-green-900/40 active:scale-95">
                Free Consultation
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Trust Footer inside CTA */}
            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-green-500/60 font-bold">
              No obligation • 24-Hour response • Verified Hospitals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}