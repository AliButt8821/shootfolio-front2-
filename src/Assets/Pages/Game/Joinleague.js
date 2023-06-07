import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "../../Css/Game/Joinleague.css"
import Header from "../../Components/Header";
import Form from 'react-bootstrap/Form';
const Joinleague = () => {
    return (
        <div>
            <Header />
            <Container className='setjoinleaguepadding'>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p className='joinleagueheading'>Join League</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect">
                                <Form.Label className='selectlablel mt-4'>Define league type</Form.Label>
                                <Form.Select className='selectcoinselect' aria-label="Select coin">
                                    <option >Crypto Amateur Learners League</option>
                                    <option value="2">Crypto Beginner Learners League</option>
                                    <option value="3">Crypto Advanced Advisors League</option>
                                    <option value="4">Crypto Professional Advisors League </option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlRadio">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check className='joinleagueform'
                                            inline
                                            label="Amateur | $10,000"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check className='joinleagueform'
                                            
                                            label="Expert | $2,000"
                                            inline
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check className='joinleagueform'
                                            inline
                                            label="Pro | $10,000"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                        <Form.Check className='joinleagueform'
                                            inline
                                            label="Super | $10,000"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-4`}
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Joinleague