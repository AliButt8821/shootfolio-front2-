import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import "../../Css/Game/Gamemode.css"
import Form from 'react-bootstrap/Form';
import Header from "../../Components/Header";
const Gamemode = () => {
    return (
        <div>
            <Header />
            <div className='gamemodebgcolor'>
                <Container>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <p className='selectgamemodeheading'>Selecting a Gameplay Mode</p>
                            <Form className='paddingcheckbox'>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check 
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Idle-Weekly against Machine Generated Portfolio `}
                                        />
                                        <Form.Check className='mt-4'
                                            type={type}
                                            id={`default-${type}`}
                                            label={`P2P-Weekly `}
                                        />
                                         <Form.Check className='mt-4'
                                            type={type}
                                            id={`default-${type}`}
                                            label={`P2P-Real Time Match`}
                                        />
                                         <Form.Check className='mt-4'
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Multiplayer-Team vs Team Real Time Match`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Gamemode