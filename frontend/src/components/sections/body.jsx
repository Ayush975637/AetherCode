import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Main = ({ darkMode }) => {
  return (
    <main className={`${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      {/* Hero Section */}
      <section id="home" className="vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h6 className="text-primary mb-3">Hello, I'm </h6>
                <h1 className="display-3 fw-bold mb-4">
                Ayush  <span className="text-primary">Aggrawal</span>
                </h1>
                <p className="lead mb-4">
                🚀 Engineering intelligent full-stack experiences where code meets AI. Building scalable, future-ready web solutions with cutting-edge technology.
                </p>
                <div className="d-flex gap-3">
                  <a href="#contact"><Button variant="primary" size="lg" className="px-4">
                    Contact Me <FiArrowRight className="ms-2" />
                  </Button>
                  </a>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    size="lg"
                    className="px-4"
                  >
                    Download CV <FiDownload className="ms-2" />
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="ratio ratio-1x1">
                  <div
                    className={`rounded-circle ${
                      darkMode ? "bg-secondary" : "bg-light"
                    }`}
                    style={{
                      backgroundImage: "url('x.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: darkMode
                        ? "5px solid #444"
                        : "5px solid #e9ecef",
                    }}
                  ></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other Sections */}
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
};

export default Main;