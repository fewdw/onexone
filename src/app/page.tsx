import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import GymDesc from "./components/GymDesc";
import Coachs from "./components/Coachs";
import Cours from "./components/Cours";
import ContactInfo from "./components/ContactInfo";
import Fliip from "./components/Fliip";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Header />
      <Hero />
      <GymDesc />
      <Cours />
      <Fliip />
      <Testimonials />
      <ContactInfo />
      <Footer />
    </div>
  );
}
