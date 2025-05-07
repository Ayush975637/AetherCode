import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button,Alert } from "react-bootstrap";
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";
import axios from "axios"; // Import axios
const Contact = ({ darkMode }) => {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    variant: "success" // 'success' or 'danger'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.ok) {
        setNotification({
          show: true,
          message: 'Message sent successfully!',
          variant: 'success'
        });
        e.target.reset(); // Reset the form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({
        show: true,
        message: 'Failed to send message. Please try again later.',
        variant: 'danger'
      });
    } finally {
      setIsSubmitting(false);
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };
  return (
    <section id="contact" className={`py-5 ${darkMode ? "bg-dark" : "bg-light"}`}>
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
              Get In <span className="text-primary">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lead"
            >
              Let's collaborate and create something extraordinary
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
              <div className="mb-4">
                <h4 className="mb-4">Contact Information</h4>
                <p>
                  Have a project in mind or want to discuss potential
                  opportunities? Feel free to reach out through any of these
                  channels.
                </p>
              </div>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="mt-1 text-primary">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h6 className="mb-1">Location</h6>
                    <p className="mb-0">Mathura, Uttar-Pradesh(INDIA)</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="mt-1 text-primary">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="mb-0">aa7782549@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="mt-1 text-primary">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="mb-0">+91-8477995328</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
               {notification.show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '90%',
            maxWidth: '500px'
          }}
        >
          <Alert 
            variant={notification.variant}
            onClose={() => setNotification(prev => ({ ...prev, show: false }))}
            dismissible
            className="shadow-lg"
          >
            {notification.message}
          </Alert>
        </motion.div>
      )}


               
              <Form   onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className={darkMode ? "bg-dark text-light" : ""}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={darkMode ? "bg-dark text-light" : ""}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Subject of your message"
                        className={darkMode ? "bg-dark text-light" : ""}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Type your message here"
                        className={darkMode ? "bg-dark text-light" : ""}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="primary" type="submit" className="px-4">
                        <FiSend className="me-2" /> Send Message
                      </Button>
                    </motion.div>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;