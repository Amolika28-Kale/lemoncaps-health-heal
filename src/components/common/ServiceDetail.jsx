import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  const { slug } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold capitalize">
        {slug.replace("-", " ")} Treatment in India
      </h1>

      <p className="mt-4 text-gray-600 max-w-3xl">
        Get world-class {slug.replace("-", " ")} treatment in India
        with top hospitals, experienced doctors, and affordable costs.
      </p>

      {/* Add doctors, hospitals, costs later */}
    </div>
  );
}
