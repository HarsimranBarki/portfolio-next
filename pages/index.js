import Hero from "../components/Hero";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
