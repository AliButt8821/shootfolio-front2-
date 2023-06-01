import React from "react";
import Header from "../Components/Header";
import Testimonials from "../Components/Testimonials";
import Getintouch from "../Components/Getintouch";
import Footer from "../Components/Footer";
import "../Css/Home.css";
import { images } from "../../Images";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="herobg">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={3} className="justifycontcentsocial" >
              <Image className="setsocialsizeandspace" src={images.skype} />
              <Image className="setsocialsizeandspace" src={images.whats} />
              <Image className="setsocialsizeandspace" src={images.dribble} />
              <Image className="setsocialsizeandspace" src={images.chat} />
              <Image className="setsocialsizeandspace" src={images.tiktok} />
              </Col>
              <Col md={3} className="justifycontcentsocialsecond">
              <Image className="setsocialsizeandspace removemargleft" src={images.slack} />
              <Image className="setsocialsizeandspace" src={images.message} />
              <Image className="setsocialsizeandspaceinsta" src={images.insta}/>
              <Image className="setsocialsizeandspace" src={images.google} />
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h1 className="heroheadcent mt-3">
                Discover the World of Digital<br></br> Assets with Shootfolio
              </h1>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <p className="herodesc mt-2">
                Welcome to Shootfolio, the all-in-one platform for learning
                about and managing digital assets. With our comprehensive
                educational resources and advanced portfolio management tools,
                you can easily grow your knowledge and wealth.
              </p>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row className="mt-3">
            <Col md={4}></Col>
            <Col md={4} className="justifybutheadcent">
              <Button className="leftheader" href="/signup">Sign up</Button>
              <Button className="rightheaderbutton" href="/signin">Login</Button>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
      <div className="homesecodbg">
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <Image src={images.secone} width="100%"></Image>
                <p className="sectwohead mt-3">
                  Comprehensive <br></br>Portfolio Tracking
                </p>
                <p className="sectwodesc">
                  Easily track all of your cryptocurrency investments in one
                  place with our comprehensive portfolio tracking feature.
                </p>
                <button className="sectworeadmore">Learn more</button>
              </div>
            </Col>
            <Col md={3} className="margtopmb">
              <div>
                <Image src={images.sectwo} width="100%"></Image>
                <p className="sectwohead mt-3">
                Education and <br></br>Learning Resources
                </p>
                <p className="sectwodesc">
                Shootfolio provides a wealth of educational and learning resources to help you enhance your knowledge of digital assets.
                </p>
                <button className="sectworeadmore">Learn more</button>
              </div>
            </Col>
            <Col md={3} className="margtopmb">
              <div>
                <Image src={images.secthree} width="100%"></Image>
                <p className="sectwohead mt-3">
                Real-time Market <br></br>Data and Insights
                </p>
                <p className="sectwodesc">
                Stay ahead with real-time market data and insights on the latest cryptocurrency trends.
                </p>
                <button className="sectworeadmore">Learn more</button>
              </div>
            </Col>
            <Col md={3} className="margtopmb">
              <div>
                <Image src={images.secfour} width="100%"></Image>
                <p className="sectwohead mt-3">
                  Comprehensive <br></br>Portfolio Tracking
                </p>
                <p className="sectwodesc">
                  Easily track all of your cryptocurrency investments in one
                  place with our comprehensive portfolio tracking feature.
                </p>
                <button className="sectworeadmore">Learn more</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials/>
      <Getintouch/>
      <Footer/>
    </div>
  );
};

export default Home;
