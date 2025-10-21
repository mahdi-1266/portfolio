import { useState, useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormStatus("Message sent successfully! 🎉");
    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      id: 1,
      icon: "fas fa-envelope",
      title: "Email",
      value: "m.mahdi1838@gmail.com",
      link: "mailto:m.mahdi1838@gmail.com",
      color: "#007bff",
    },
    {
      id: 2,
      icon: "fas fa-phone",
      title: "Phone",
      value: "+93 799064435",
      link: "tel:+93 799064435",
      color: "#10b981",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Your City, Country",
      link: "#",
      color: "#ec4899",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: "fab fa-github",
      name: "GitHub",
      link: "https://github.com/MahdiAlizada12",
      color: "#333",
    },
    {
      id: 2,
      icon: "fab fa-linkedin-in",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammad-mahdi-alizada-8188a1365/",
      color: "#0077b5",
    },
    {
      id: 3,
      icon: "fab fa-twitter",
      name: "Twitter",
      link: "#",
      color: "#1da1f2",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      name: "Instagram",
      link: "https://www.instagram.com/mahdiali9729/",
      color: "#e4405f",
    },
  ];

  return (
    <section id="contact" className="contact-section py-5" ref={sectionRef}>
      <div className="container py-5">
        {/* Section Header */}
        <div
          className={`text-center mb-5 section-header ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="fw-bold text-white mb-3" style={{ fontSize: "3rem" }}>
            <span className="border-bottom border-3 border-primary pb-2">
              Get In Touch
            </span>
          </h2>
          <p className="lead text-muted">
            Let's work together on your next project
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Info Cards */}
          <div className="col-lg-4">
            <div
              className={`contact-info-wrapper ${isVisible ? "visible" : ""}`}>
              {contactInfo.map((info, index) => (
                <a
                  key={info.id}
                  href={info.link}
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    <p className="info-value">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="social-links-container">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      className="social-link"
                      aria-label={social.name}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div
              className={`contact-form-wrapper ${isVisible ? "visible" : ""}`}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <i className="fas fa-user me-2"></i>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <i className="fas fa-envelope me-2"></i>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        <i className="fas fa-tag me-2"></i>
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Project Discussion"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        <i className="fas fa-comment-dots me-2"></i>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-submit">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                    {formStatus && (
                      <p className="form-status mt-3">{formStatus}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
