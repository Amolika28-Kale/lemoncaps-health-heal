import Hero from "../components/home/Hero";
import Advantage from "../components/home/Advantage";
import MedicalTourism from "../components/home/MedicalTourism";
import CostSavings from "../components/home/CostSavings";
import Stats from "../components/home/Stats";
import ConsultationCTA from "../components/home/ConsultationCTA";
import VisionMission from "../components/home/VisionMission";
import LemoncapsAdvantageIntro from "../components/home/LemoncapsAdvantageIntro";
import PatientJourney from "../components/home/PatientJourney";

export default function Home() {
  return (
    <>
      <Hero />
      <LemoncapsAdvantageIntro />
      <Advantage />
      <MedicalTourism />
      <CostSavings />
      <VisionMission />
      <Stats />
            <PatientJourney/>

      <ConsultationCTA />
    </>
  );
}
