
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import HospitalNetwork from "../pages/HospitalNetwork";
import InternationalPatients from "../pages/InternationalPatients";
import SuccessStories from "../pages/SuccessStories";
import Contact from "../pages/Contact";
import ServiceDetail from "../components/common/ServiceDetail";
import HospitalCategory from "../pages/HospitalCategory";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/services/:slug" element={<ServiceDetail />} />

      <Route path="/hospitals" element={<HospitalNetwork />} />
      <Route path="/hospitals/:slug" element={<HospitalCategory />} />
      <Route path="/international-patients" element={<InternationalPatients />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}
