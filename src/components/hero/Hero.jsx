import "./Hero.css";
import img from "../../assets/header-img.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const texts = [
    "Frontend Developer",
    "Web Designer",
    "Backend Developer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    // Trigger animations on mount
    const elements = [box2Ref, box3Ref, box4Ref];

    elements.forEach((ref, index) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add("hero-animate-in");
        }
      }, index * 200);
    });
  }, []);

  useEffect(() => {
  const text = texts[currentTextIndex];
  let i = 0;

  const typeInterval = setInterval(() => {
    setTypedText(text.slice(0, i + 1));
    i++;

    if (i === text.length) {
      clearInterval(typeInterval);

      setTimeout(() => {
        const eraseInterval = setInterval(() => {
          i--;
          setTypedText(text.slice(0, i));

          if (i === 0) {
            clearInterval(eraseInterval);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }, 50);
      }, 1500);
    }
  }, 100);

  return () => clearInterval(typeInterval);
}, [currentTextIndex]);



  return (
    <div id="home" className="hero-container w-100" ref={heroRef}>
      <div className="container w-100 h-100 d-flex justify-content-between align-items-center gap-5">

        <div className="hero-content-container w-100 h-50">
          
          <div className="hero-box2 mt-4 hero-element" ref={box2Ref}>

            <h1 className="fw-bold">Hi dear, I am <span className="text-primary">Mahdi</span></h1>
            
            <h1 className="fw-bold text-start d-flex align-items-center gap-2">
              <span>I'm a</span>
              <span className="text-primary typing-text">{typedText}</span>
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
            <div className="d-flex justify-content-between gap-3 m-0">
              <button className="btn bg-primary rounded-1">View My Work</button>
              <button className="btn bg-transparent border border-2 rounded-1">
                Contact Me
              </button>
            </div>

            <div className="hero-social-icon mt-4 w-25 gap-2 py-2 px-4 d-flex m-0 align-items-center">
              <Link to="" className="text-white social-link">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="" className="text-white social-link">
                <i class="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link to="" className="text-white social-link">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>

        </div>

        <div className="animation w-50 h-50 d-flex align-items-start p-3">
          <img src={img} alt="Hero Img" className="w-75 h-75" />
        </div>

      </div>
    </div>
  );
};
export default Hero;
