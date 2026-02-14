import { useState, useEffect, useRef } from "react";
import "./Experience.css";

const Eperience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Fullstack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Developing responsive web applications using React, CSS3, and modern JavaScript frameworks. Collaborating with design teams to implement pixel-perfect UI/UX designs.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved application performance by 40%",
        "Mentored junior developers",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "Git"],
    },
    {
      id: 2,
      role: "Junior Fullstack Developer",
      company: "Digital Agency Co.",
      period: "2022 - 2023",
      location: "On-site",
      type: "Full-time",
      description:
        "Created interactive user interfaces and implemented responsive designs for various client projects. Worked closely with backend developers to integrate APIs.",
      achievements: [
        "Developed 10+ client websites",
        "Reduced page load time by 30%",
        "Implemented modern CSS animations",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
    },
    {
      id: 3,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2021 - 2022",
      location: "Remote",
      type: "Freelance",
      description:
        "Delivered custom web solutions for small businesses and startups. Managed projects from concept to deployment while maintaining client relationships.",
      achievements: [
        "Completed 20+ freelance projects",
        "Maintained 100% client satisfaction",
        "Built personal portfolio brand",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section py-5"
      ref={sectionRef}
    >
      <div className="container py-5">
        {/* Section Header */}
        <div
          className={`text-center mb-5 section-header ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>
            <span className="">
              Work Experience
            </span>
            <hr className="m-auto mt-3 rounded position-relative bg-primary hr" />
          </h2>
          <p className="lead text-white">
            My professional journey and career highlights
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${isVisible ? "visible" : ""} ${
                index % 2 === 0 ? "left" : "right"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-badge">
                  <i className="fas fa-briefcase"></i>
                </div>

                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company">
                        <i className="fas fa-building me-2"></i>
                        {exp.company}
                      </h4>
                    </div>
                    <span
                      className={`experience-type ${exp.type.toLowerCase()}`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="experience-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar me-2"></i>
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {exp.location}
                    </span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-achievements">
                    <h5 className="achievements-title">
                      <i className="fas fa-star me-2"></i>
                      Key Achievements
                    </h5>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eperience;
