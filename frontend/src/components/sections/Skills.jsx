import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiGraphql, SiMongodb, SiDocker } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
const Skills = ({ darkMode }) => {
  const techStack = [
    { icon: <FaReact size={50} />, name: "React", level: "Expert" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", level: "Advanced" },
    { icon: <SiTypescript size={50} />, name: "TypeScript", level: "Advanced" },
    { icon: <FaJs size={50} />, name: "JavaScript", level: "Expert" },
    { icon: <SiGraphql size={50} />, name: "GraphQL", level: "Intermediate" },
    { icon: <SiMongodb size={50} />, name: "MongoDB", level: "Intermediate" },
    { icon: <FaHtml5 size={50} />, name: "HTML5", level: "Expert" },
    { icon: <FaCss3Alt size={50} />, name: "CSS3", level: "Expert" },
    { icon: <FaGitAlt size={50} />, name: "Git", level: "Advanced" },
    { icon: <SiDocker size={50} />, name: "Docker", level: "Intermediate" },
    { icon: <FaPython  size={50} />, name: "Python", level: "Intermediate" },
    { icon: <SiCplusplus  size={50} />, name: "C++", level: "Intermediate" },
    
  ];

  return (
    <section id="skills" className="py-5">
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
              My <span className="text-primary">Skills</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lead"
            >
              Technologies I've mastered across the digital universe
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {techStack.map((tech, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <motion.div
                className="text-center p-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3 text-primary">{tech.icon}</div>
                <h6 className="mb-1">{tech.name}</h6>
                <small className={`${darkMode ? "text-muted" : "text-secondary"}`}>
                  {tech.level}
                </small>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;