import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../../Css/Game/Registration.css"
import Header from "../../Components/Header";
import { images } from "../../../Images";
import Gameregistrationform from '../../Components/Gameregistrationform';
const Registration = () => {
    return (
        <div>
            <Header />
            <div className='registrationbgblue'>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <p className='registrationheading'>User Registration</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6} className='paddingformregistration'>
                            <Gameregistrationform />
                            <div className='makehrandorinrow mt-5 mb-5'>
                                <hr className='registrationpagehr'></hr>
                                <p className='registrationor'>Or</p>
                                <hr className='registrationpagehr'></hr>
                            </div>
                            <div className='makebuttonsincenterregistersociallogin'>
                                <Button className='registrationthroughgoogleaddmorepadding'><Image className='setregistersocial' src={images.registergoogle} />Continue with google</Button>
                                <Button className='registrationthroughgoogle mt-4'><Image className='setregistersocial' src={images.registerfacebook} />Continue with facebook</Button>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Registration