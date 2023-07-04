import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className=" bg-page-bg h-full">
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}
