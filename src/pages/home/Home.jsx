import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import "./Home.css";
import Skill from "../../components/skills/Skill";
import Projects from "../../components/projects/Projects";
import Experience from "../../components/experience/Eperience";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
