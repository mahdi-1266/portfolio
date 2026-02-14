import { useState, useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
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

  const projects = [
    {
      id: 1,
      title: "Restaurant Website",
      description:
        "Elegant restaurant website with menu display and online reservation",
      category: "web",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      github: "https://github.com/mahdi-1266",
      demo: "#",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "Modern responsive e-commerce platform with shopping cart and payment integration",
      category: "web",
      technologies: ["React", "CSS3", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      github: "https://github.com/mahdi-1266",
      demo: "#",
    },
    {
      id: 3,
      title: "Portfolio Dashboard",
      description:
        "Interactive admin dashboard with data visualization and analytics",
      category: "web",
      technologies: ["React", "JavaScript", "CSS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com/mahdi-1266",
      demo: "#",
    },
    // {
    //   id: 4,
    //   title: "Task Manager",
    //   description:
    //     "Productivity tool for managing tasks, projects, and team collaboration",
    //   category: "app",
    //   technologies: ["React", "Bootstrap", "JavaScript"],
    //   image:
    //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
    // {
    //   id: 5,
    //   title: "Social Media App",
    //   description:
    //     "Social networking platform with real-time messaging and post sharing",
    //   category: "app",
    //   technologies: ["React", "CSS", "JavaScript"],
    //   image:
    //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
    // {
    //   id: 6,
    //   title: "Fitness Tracker",
    //   description:
    //     "Health and fitness tracking application with workout plans and progress monitoring",
    //   category: "app",
    //   technologies: ["React", "CSS3", "JavaScript"],
    //   image:
    //     "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
    // {
    //   id: 7,
    //   title: "Blog Platform",
    //   description:
    //     "Modern blogging platform with rich text editor and content management system",
    //   category: "web",
    //   technologies: ["React", "Bootstrap", "CSS"],
    //   image:
    //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
    // {
    //   id: 8,
    //   title: "Music Player",
    //   description:
    //     "Elegant music streaming application with playlists and audio visualization",
    //   category: "app",
    //   technologies: ["React", "JavaScript", "CSS3"],
    //   image:
    //     "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
    // {
    //   id: 9,
    //   title: "Real Estate Platform",
    //   description:
    //     "Property listing website with advanced search filters and virtual tours",
    //   category: "web",
    //   technologies: ["React", "CSS3", "Bootstrap"],
    //   image:
    //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    //   github: "https://github.com/mahdi-1266",
    //   demo: "#",
    // },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "app", label: "Applications" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section py-5" ref={sectionRef}>
      <div className="container py-5">
        {/* Section Header */}
        <div
          className={`text-center mb-5 section-header ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>
            <span className="border-primary pb-2">
              My Projects
            </span>
            <hr className="m-auto mt-3 rounded position-relative bg-primary hr" />
          </h2>
          <p className="lead text-white">
            Showcasing my recent work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`filter-container d-flex justify-content-center gap-3 mb-5 ${
            isVisible ? "visible" : ""
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn btn ${
                filter === category.id ? "active" : ""
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className={`project-card ${isVisible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        className="project-link"
                        aria-label="View GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href={project.demo}
                        className="project-link"
                        aria-label="View Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-white fs-5">No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
