import Image from "next/image";
import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div className=" bg-page-bg h-full">
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
