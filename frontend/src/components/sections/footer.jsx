import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-4 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-3">UniversePortfolio</h5>
              <p className="mb-4">
                Crafting digital experiences that resonate across the cosmos.
              </p>
            </motion.div>

            <motion.div
              className="d-flex justify-content-center mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mx-3 text-decoration-none"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-0"
            >
              &copy; {currentYear} Made with <FiHeart className="text-danger" />{" "}
              by UniversePortfolio
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


export default Footer;