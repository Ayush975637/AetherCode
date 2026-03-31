import { motion } from "framer-motion";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FiAward, FiUsers, FiFolder } from "react-icons/fi";

const About = ({ darkMode }) => {
  const stats = [
    { icon: <FiAward />, value: "1+", label: "Years Experience" },
{ icon: <FiUsers />, value: "300+", label: "DSA Problems" },
    { icon: <FiFolder />, value: "3+", label: "Projects" },
  ];

  const skills = [
  { name: "React", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "Redis", level: 75 },
  { name: "MongoDB", level: 80 },
];

  return (
    <section id="about" className="py-5">
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
              About <span className="text-primary">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lead"
            >
         Building and learning through real-world projects
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
      <h3 className="mb-4">Full-Stack Developer (Backend Focus)</h3>
             <p className="mb-4">
I’m a second-year student focused on building full-stack applications, with a strong interest in backend systems. I enjoy working on real-world problems like performance optimization, caching, and scalable APIs.
</p>
              <p>
Recently, I built projects like CodeVex (a GitHub analytics platform) and a real-time collaborative whiteboard, where I worked with technologies like Redis, WebSockets, and background job processing.
</p>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Row className="g-4 mb-4">
                {stats.map((stat, index) => (
                  <Col md={4} key={index}>
                    <div className="text-center p-3 rounded shadow-sm">
                      <div className="fs-1 text-primary mb-2">{stat.icon}</div>
                      <h3 className="mb-0">{stat.value}</h3>
                      <small>{stat.label}</small>
                    </div>
                  </Col>
                ))}
              </Row>

              <div>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-3"
                  >
                    <div className="d-flex justify-content-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <ProgressBar
                      now={skill.level}
                      variant="primary"
                      className="rounded-pill"
                      style={{ height: "8px" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;