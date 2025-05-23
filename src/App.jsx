/**
 * @copyright 2025 chunhuwq
 * @license Apache-2.0
 */

/**
 * Node module
 */
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

/**
 * Register gsap plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies

/**
 *
 * Components
 */
import About from "./components/About";
import { Achievements } from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { WorkExperiences } from "./components/WorkExperiences";
const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Project />
        <WorkExperiences />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};
export default App;
