import { motion } from "framer-motion";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Header = ({ darkMode, toggleDarkMode }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/Ayush975637" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/ayush-aggrawal-6452a73" },
    { icon: <FiTwitter />, href: "https://x.com/Ayush124104061" },
    { icon: <FiMail />, href: "mailto:your.aa7782549@gmail.com" },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand href="#home" className="fw-bold">
            AETHERCODE
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Nav.Link href={link.href} className="mx-2">
                  {link.name}
                </Nav.Link>
              </motion.div>
            ))}

            <div className="d-flex ms-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 fs-5"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={toggleDarkMode}
              className="btn btn-link ms-2"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? (
                <HiOutlineSun className="fs-4" />
              ) : (
                <HiOutlineMoon className="fs-4" />
              )}
            </motion.button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;