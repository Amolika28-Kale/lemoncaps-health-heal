import { Link } from "react-router-dom";

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-green-600 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Treatment Journey with Confidence
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Get personalized medical guidance from our experts and connect with
          India’s top hospitals — at a fraction of global costs.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <Link
            to="/contact"
            className="px-10 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
