import NavBar from "./components/nav-bar";
import ParallaxHome from "./components/parallax-home";
import Timeline from "./components/timeline";
import PopularEvents from "./components/popular-events";
import Footer from "./components/footer";
import "./components/text-block.css";
import Brochure from "./components/brochure";
import Border from "./components/perPageBorder";

export default async function Home() {
  return (
    <>
      <div id="home">
        <div className="fixed h-24 w-full z-50">
          <NavBar />
        </div>

        <ParallaxHome />

        <div className="flex justify-center ">
          <div className="w-11/12 sm:pb-0"></div>
        </div>

        <Border/>

        <Timeline />

        <Brochure />

        <Border/>

        <PopularEvents />

        <Footer />
      </div>
    </>
  );
}
