import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Signupform from "../Components/Signupform";
const Signup = () => {
  return (
    <div>
      <Header />
      <div className="loginpagebg">
        <Container>
          <Row>
            <Col md={12}>
              <p className="loginheadcenter">Sign Up</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Signupform />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
