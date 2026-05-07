
import About from "@/components/main/sections/about";
import Hero from "@/components/main/sections/hero";
// import OfficeMap from "@/components/main/sections/map";
import Newsletter from "@/components/main/sections/news-letter.tsx";
import Process from "@/components/main/sections/process";
import Services from "@/components/main/sections/service";
import Stats from "@/components/main/sections/stats";
import LeaderShip from '../components/main/sections/leadership/index';



export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <LeaderShip />
      <Newsletter />
      {/* <OfficeMap /> */}
    </>
  );
}
