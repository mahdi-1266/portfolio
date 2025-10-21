import "./Skill.css";
import { useState, useEffect } from "react";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const skillSection = document.querySelector("#skills");
    if (skillSection) {
      observer.observe(skillSection);
    }

    return () => {
      if (skillSection) {
        observer.unobserve(skillSection);
      }
    };
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      icon: "💻",
      items: [
        { name: "HTML5", level: 95, icon: "🌐", color: "danger" },
        { name: "CSS3", level: 90, icon: "🎨", color: "primary" },
        { name: "JavaScript", level: 88, icon: "⚡", color: "warning" },
        { name: "React", level: 85, icon: "⚛️", color: "info" },
        { name: "Bootstrap", level: 80, icon: "💨", color: "purple" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      items: [
        { name: "Git", level: 88, icon: "📦", color: "danger" },
        { name: "GitHub", level: 85, icon: "🐙", color: "dark" },
        { name: "VS Code", level: 92, icon: "💻", color: "info" },
        { name: "Figma", level: 75, icon: "🎯", color: "purple" },
        { name: "Docker", level: 65, icon: "🐳", color: "primary" },
      ],
    },
  ];

  return (
    <section
      className="py-5 bg-dark"
      id="skills"
      style={{
        background:
          "linear-gradient(135deg, var(--main-color) 0%, var(--fourth-color) 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>
            <span className="border-bottom border-3 border-primary pb-2">
              My Skills
            </span>
          </h2>
          <p className="lead text-light fs-5 mt-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-4 justify-content-center">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div
                className={`card h-100 bg-dark border-secondary skill-card ${
                  isVisible ? "visible" : ""
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  animationDelay: `${categoryIndex * 0.2}s`,
                }}
              >
                <div className="card-body p-4">
                  {/* Category Header */}
                  <div className="d-flex align-items-center mb-4 pb-3 border-bottom border-secondary">
                    <span className="fs-2 me-3">{skillCategory.icon}</span>
                    <h4 className="card-title mb-0 text-white fw-bold">
                      {skillCategory.category}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div className="skills-list">
                    {skillCategory.items.map((skill, index) => (
                      <div
                        key={index}
                        className="mb-4 skill-item"
                        style={{
                          animationDelay: `${
                            categoryIndex * 0.2 + index * 0.1
                          }s`,
                        }}
                      >
                        {/* Skill Info */}
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <span className="me-2 fs-5">{skill.icon}</span>
                            <span className="text-white fw-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="badge bg-secondary">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Bootstrap Progress Bar */}
                        <div
                          className="progress"
                          style={{
                            height: "8px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                        >
                          <div
                            className={`progress-bar progress-bar-striped progress-bar-animated bg-${skill.color}`}
                            role="progressbar"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transition: "width 1.5s ease-in-out",
                              transitionDelay: `${
                                categoryIndex * 0.2 + index * 0.1
                              }s`,
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-5 pt-4" data-aos="fade-up">
          <div
            className="alert alert-dark border border-secondary d-inline-block px-5 py-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h5 className="mb-0 text-white">
              🚀 Always learning and exploring new technologies!
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
