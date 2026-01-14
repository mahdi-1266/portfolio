import "./About.css";
import img from "../../assets/mahdi.jpg";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    }, observerOptions);

    const elementsToObserve = [
      headerRef.current,
      imageRef.current,
      statsRef.current,
    ];

    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="about" className=". w-100 h-auto pt-5" ref={sectionRef}>
      <div className="container w-100 h-auto p-0">
        <div className="about-grid-box w-100 m-auto">
          <div
            className="about-section-subdiv text-center scroll-hidden"
            ref={headerRef}>

            <h1
              className="fw-bold text-light mb-3"
              style={{ fontSize: "3rem" }}
            >
              About Me
            </h1>
            <hr className="m-auto mb-2 rounded position-relative bg-primary hr" />
            <p className="text-white">Get to know me better</p>
          </div>

          <div className="position-relative scroll-hidden" ref={imageRef}>
            <img src={img} alt="" className="my-img w-100 h-100" />
            <div className="about-content ps-4 mb-3 lh-1 position-absolute bottom-0">
              <h1 className="fs-4 fw-bold">Mahdi Alizada</h1>
              <p className="">Front-End Developer</p>
            </div>
          </div>
          <div className="about-left-box scroll-hidden" ref={statsRef}>
            <div className="aobut-left-subbox">
              <h3 className="fw-bold mb-3">Who Am I</h3>
              <p className="mb-3">
                I'm a passionate Frontend Developer dedicated to crafting
                beautiful, responsive, and user-friendly web applications. With
                expertise in modern web technologies like HTML5, CSS3,
                JavaScript, and React, I transform creative ideas into seamless
                digital experiences that users love.
              </p>
              <p className="mb-0">
                My approach combines clean code practices with attention to
                detail, ensuring every project is not only visually appealing
                but also performs flawlessly across all devices. I'm constantly
                learning and adapting to new technologies to deliver
                cutting-edge solutions that exceed expectations.
              </p>
            </div>

            <div className="aobut-left-subbox d-flex justify-content-center align-items-center">
              <div className="text-center py-3">
                <div className="elemnt-bracket rounded-circle text-primary mt-2 mb-2">
                  &lt; &gt;
                </div>
                <div>
                  <h4 className="my-2 fw-bold">10+</h4>
                  <p className="text-secondary mb-0">Projects Completed</p>
                </div>
              </div>
            </div>

            <div className="aobut-left-subbox d-flex justify-content-center align-items-center">
              <div className="text-center py-3">
                <div className="elemnt-bracket rounded-circle text-primary mt-2 mb-2">
                  <i className="fa fa-box"></i>
                </div>
                <div>
                  <h4 className="my-2 fw-bold">2+</h4>
                  <p className="text-secondary mb-0">Years of Experience</p>
                </div>
              </div>
            </div>

            <div className="aobut-left-subbox d-flex justify-content-center align-items-center">
              <div className="text-center py-3">
                <div className="elemnt-bracket rounded-circle text-primary mt-2 mb-2">
                  <i class="fa-solid fa-medal"></i>
                </div>
                <div>
                  <h4 className="my-2 fw-bold">20+</h4>
                  <p className="text-secondary mb-0">Satisfied Clients</p>
                </div>
              </div>
            </div>

            <div className="aobut-left-subbox d-flex justify-content-center align-items-center">
              <div className="text-center py-3">
                <div className="elemnt-bracket rounded-circle text-primary mt-2 mb-2">
                  <i class="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <h4 className="my-2 fw-bold">5</h4>
                  <p className="text-secondary mb-0">Certifications</p>
                </div>
              </div>
            </div>

            <div className="aobut-left-subbox">
              <button className="btn bg-primary text-white rounded-1 py-2 px-4">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
