import "./Hero.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  useEffect(() => {
    // Trigger animations on mount
    const elements = [box1Ref, box2Ref, box3Ref, box4Ref];

    elements.forEach((ref, index) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add("hero-animate-in");
        }
      }, index * 200);
    });
  }, []);

  return (
    <div id="home" className="hero-container w-100" ref={heroRef}>
      <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="hero-content-container w-75 text-center">
          <div className="hero-box1 hero-element" ref={box1Ref}>
            <p className="d-inline-block text-center">Fron-End Developer</p>
          </div>
          <div className="hero-box2 mt-4 hero-element" ref={box2Ref}>
            <h1 className="fw-bold">
              Creating{" "}
              <span className="text-primary gradient-text">Beautiful</span>{" "}
              Digital Experience With Code
            </h1>
          </div>
          <div className="hero-box3 my-4 hero-element" ref={box3Ref}>
            <p className="">
              Welcome to my official portfolio website. My name is Mohammad
              Mahdi, and I am a dedicated Frontend Developer and aspiring
              Backend Engineer with a passion for building clean, responsive,
              and user-friendly web applications.
            </p>
          </div>
          <div className="hero-box4 hero-element" ref={box4Ref}>
            <div className="d-flex justify-content-between gap-3">
              <button className="btn bg-primary rounded-1">View My Work</button>
              <button className="btn bg-transparent border border-2 rounded-1">
                Contact Me
              </button>
            </div>
            <div className="hero-social-icon mt-4 w-25 gap-2 py-2 px-4 d-flex justify-content-center align-items-center">
              <Link to="" className="text-secondary social-link">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="" className="text-secondary social-link">
                <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link to="" className="text-secondary social-link">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
