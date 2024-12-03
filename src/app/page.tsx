import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
