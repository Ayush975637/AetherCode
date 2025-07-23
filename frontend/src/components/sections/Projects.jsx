import { motion } from "framer-motion";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = ({ darkMode }) => {
  const projects = {
    featured: [
      {
        title: "Spotify-clone",
        description:
          "This is a full-featured Spotify clone built using React.js for the frontend and Node.js with Express for the backend, integrated with MongoDB for user authentication and data storage.",
        tags: ["React", "Talwind", "Node.js", "Bootstrap"],
        github: "https://github.com/Ayush975637/-spotify-react-frontend",
        live: "https://sangeet-react-frontend.vercel.app/",
        image: "spotify.png",
      },
      {
        title: "Ribx E-Commerce",
        description:
          "Full-featured e-commerce platform with great UI and seamless checkout.",
        tags: ["Node.js", "Express", "Mongodb", "Tailwind"],
        github: "https://github.com/Ayush975637/RibX-Backend-Database",
        live: "#",
        image: "ribx.png",
      },
    
    ],
    web: [
      {
        title: "Stellar Portfolio",
        description: "Animated portfolio template with cosmic theme.",
        tags: ["React", "Framer Motion", "GSAP"],
        github: "#",
        live: "#",
        image: "project3.jpg",
      },
    ],
    mobile: [
      {
        title: "Nebula Notes",
        description: "Cross-platform note taking app with cloud sync.",
        tags: ["React Native", "Firebase", "Redux"],
        github: "#",
        live: "#",
        image: "project4.jpg",
      },
    ],
  };

  return (
    <section id="projects" className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="display-5 fw-bold"
            >
              My <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lead"
            >
              Exploring the digital cosmos, one project at a time
            </motion.p>
          </Col>
        </Row>

        <Tabs
          defaultActiveKey="featured"
          id="projects-tab"
          className={`mb-4 ${darkMode ? "tabs-dark" : ""}`}
        >
          <Tab eventKey="featured" title="Featured">
            <Row className="g-4 mt-3">
              {projects.featured.map((project, index) => (
                <Col lg={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`h-100 ${darkMode ? "bg-dark border-secondary" : ""}`}>
                      <div
                        className="project-image"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          height: "200px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <div className="mb-3">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`badge me-2 ${
                                darkMode ? "bg-secondary" : "bg-light text-dark"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <FiGithub className="me-2" /> Code
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-primary"
                          >
                            <FiExternalLink className="me-2" /> Live Demo
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="web" title="Web">
            {/* Similar structure for web projects */}


          </Tab>
          <Tab eventKey="mobile" title="Mobile">
            {/* Similar structure for mobile projects */}


          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Projects;