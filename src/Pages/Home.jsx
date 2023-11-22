import About from "../components/About";
import Header from "../components/Header";
import Lines from "../components/Lines";
import Map from "../components/Map";
import Projects from "../components/Projects";
import ScrollButton from "../components/ScrollButton";
import Services from "../components/Services";
import Skills from "../components/Skills";
import "../utils/ScrollFunction";

function Home() {
  return (
    <>
      <div className="home" id="page-wrap">
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Map />
        <ScrollButton />
        <Lines />
      </div>
    </>
  );
}

export default Home;
