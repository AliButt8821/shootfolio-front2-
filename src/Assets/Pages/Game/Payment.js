import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../Css/Game/Payment.css"
import Header from "../../Components/Header";
import { images } from "../../../Images"
import Form from 'react-bootstrap/Form';


const Payment = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row className='addpaddforpaymentpage'>
                    <Col md={6} className='addpaddinbetweenpayments addlinebetwee'>
                        <Col md={12}>
                            <div className='selectheadandimginline'>
                                <p className='selectcoineheading'>Selecting a coin type for<br></br> each football player</p>
                                <div className='makeprofilepicsincentercoin'>
                                    <Image src={images.coinprofile} height="45px" />
                                    <Image src={images.coinmeta} height="45px" />
                                </div>
                            </div>
                            <Form.Label className='selectlablel mt-4'>Select coin</Form.Label>
                            <Form.Select className='selectcoinselect' aria-label="Select coin">
                                <option>SHIB</option>
                                <option value="1">ACA</option>
                                <option value="2">WAVES</option>
                                <option value="3">GLMR</option>
                                <option value="4">SFUND</option>
                                <option value="5">ROCO</option>
                                <option value="6">DOGE</option>
                                <option value="7">SHIB</option>
                            </Form.Select>
                        </Col>
                    </Col>
                    <Col md={6} className='addpaddinbetweenpayments margtoppaymentmbl'>
                        <Col md={12}>
                            <div className="selectheadandimginline">
                                <p className="selectcoineheading">
                                    Select amount for each<br></br> football player
                                </p>
                                <div className="makeprofilepicsincentercoin">
                                    <Image src={images.coinprofile} height="45px" />
                                    <Image src={images.coinmeta} height="45px" />
                                </div>
                            </div>
                            <Form.Label
                                className="selectamountlablel mt-4"
                                htmlFor="exampleColorInput"
                            >
                                Select amount
                            </Form.Label>
                            <Form.Control
                                className="numbercssmod"
                                type="number"
                                id="exampleNumberInput"
                                defaultValue="0.00"
                                min="0.00"
                                step="0.01"
                                title="Choose your Number"
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Payment