import { motion } from "framer-motion";
import { Container, Row, Col, Card, Tab, Tabs } from "react-bootstrap";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = ({ darkMode }) => {
  const projects = {
    featured: [
{
  title: "CodeVex",
  description:
    "Full-stack developer analytics platform that transforms GitHub profiles into insights using caching, background jobs, and custom scoring. Built to handle API rate limits and large-scale data processing.",
  tags: ["React", "Node.js", "PostgreSQL", "Redis", "BullMQ", "AWS","Docker","CI/CD"],
  github: "https://github.com/Ayush975637/devpulse",
  live: "https://codevex.online",
  image: "codevex2.png",
},
     {
  title: "Collaborative Whiteboard",
  description:
    "Real-time multi-user whiteboard with WebSocket-based room architecture, live cursor tracking, and Redis write buffering to reduce database load. Handles reconnections by syncing only missed strokes.",
  tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
  github: "https://github.com/Ayush975637/Collaborative-Whiteboard",
  live: "https://collaborative-whiteboard-9zr3.vercel.app/",
  image: "whiteboard.png",
},





{
  title: "Spotify Clone",
  description:
    "Frontend-focused music app with API-based song fetching and playback UI. Built to practice React component design and state management.",
  tags: ["React", "JavaScript", "CSS"],
  github: "https://github.com/Ayush975637/-spotify-react-frontend",
  live: "https://sangeet-react-frontend.vercel.app/",
  image: "spotify.png",
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
           Projects focused on real-world systems, performance, and scalability
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
                        {/* <Card.Title>{project.title}</Card.Title> */}
                        <Card.Title className="fw-bold">{project.title}</Card.Title>
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
          
         
        </Tabs>
      </Container>
    </section>
  );
};

export default Projects;