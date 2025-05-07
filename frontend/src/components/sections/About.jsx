import { motion } from "framer-motion";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FiAward, FiUsers, FiFolder } from "react-icons/fi";

const About = ({ darkMode }) => {
  const stats = [
    { icon: <FiAward />, value: "1+", label: "Years Experience" },
    { icon: <FiUsers />, value: "0+", label: "Clients" },
    { icon: <FiFolder />, value: "8+", label: "Projects" },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "UI/UX", level: 70 },
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
              My journey through the cosmos of development
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
              <h3 className="mb-4">Cosmic Developer & Digital Explorer</h3>
              <p className="mb-4">
                I traverse the digital universe creating seamless experiences
                that bridge the gap between technology and human interaction.
                With a passion for clean code and intuitive design, I craft
                solutions that stand the test of time.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers in their journey through the cosmos of web
                development.
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