import { React, useState } from 'react'
import { Row, Container, Col, Button, Image } from "react-bootstrap"
import { images } from "../../../Images"
import Playpopup from '../../Components/Playpopup';
import Form from 'react-bootstrap/Form';
import "../../Css/Game/Play.css"
const Play = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupEx, setButtonPopupEx] = useState(false);
    return (
        <div className='playbackgroundimag'>
            <Container>
                <Row>
                    <Col md={2}>
                        <div className='leftplaybutton'>
                            <Image src={images.playbtone} />
                            <p className='playrank'>+26.00%</p>
                        </div>
                        <div className='leftplaybutton mt-3'>
                            <Image src={images.playbttwo} />
                            <p className='playrank'>+0.01%</p>
                        </div>
                        <div className='leftplaybutton mt-3'>
                            <Image src={images.playbtthree} />
                            <p className='playrankred'>-3.32%</p>
                        </div>
                        <div className='leftplaybutton mt-3'>
                            <Image src={images.playbtfour} />
                            <p className='playrankred'>-16.38%</p>
                        </div>
                        <div className='leftplaybutton mt-3'>
                            <Image src={images.playbtone} />
                            <p className='playrank'>+26.00%</p>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={2}>
                        <div className='maketimeinrowplayground'>
                            <div className='tmplayground'>
                                <p className='timetextplayground'>TM-01</p>
                            </div>
                            <div className='zhplayground'>
                                <p className='timetextplayground'>ZH-09</p>
                            </div>
                        </div>
                        <div className='maketimeinrowplayground'>
                            <div className='timehour'>
                                <p className='hourplayground'>03</p>
                            </div>
                            <div className='timehour'>
                                <p className='hourplayground'>05</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={2}>
                        <Button className='leftplaybuttonhover' onClick={() => setButtonPopupEx(true)}>
                            <p className='playrankwhite'>$336,1.00</p>
                            <Image src={images.playbtone} />
                        </Button>
                        <Button className='leftplaybuttonhover mt-3' onClick={() => setButtonPopupEx(true)}>
                            <p className='playrankwhite'>$7,836.00</p>
                            <Image src={images.playbttwo} />
                        </Button>
                        <Button className='leftplaybuttonhover mt-3' onClick={() => setButtonPopupEx(true)}>
                            <p className='playrankwhite'>$336,1.00</p>
                            <Image src={images.playbtthree} />
                        </Button>
                        <Button className='leftplaybuttonhover mt-3' onClick={() => setButtonPopupEx(true)}>
                            <p className='playrankwhite'>$7,836.00</p>
                            <Image src={images.playbtfour} />
                        </Button>
                        <Button className='leftplaybuttonhover mt-3' onClick={() => setButtonPopupEx(true)}>
                            <p className='playrankwhite'>$336,1.00</p>
                            <Image src={images.playbtone} />
                        </Button>
                    </Col>
                </Row>
                <Playpopup trigger={buttonPopupEx} setTrigger={setButtonPopupEx}>
                    <Form>
                        <Form.Group>
                            <Form.Label className='selectamountlablel mt-4'>Selected Coin</Form.Label>
                            <Form.Control className='exchangepopuptextfield' type="text" placeholder="Enter Amount" />
                        </Form.Group>
                        <div className='setbuttonpositionforplaypopup'>
                            <Button className='exchangepopbuy mt-3'>Buy</Button>
                            <Button className='exchangepopsell mt-3'>Sell</Button>
                        </div>
                    </Form>
                </Playpopup>
                <Row className='paddsettopplay mt-5'>
                    <Col md={4}></Col>
                    <Col md={1}>
                        <Button className='playerclickpopupbutton' onClick={() => setButtonPopup(true)}>
                            <div className='playerimagedivplay'>
                                <Image src={images.playerfive} width="50%" />
                            </div>
                            <div className='maketheminrowatbottomfield'>
                                <Image src={images.playbtone} />
                                <p className='playrank m-1'> +26.00%</p>
                            </div>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={1}>
                        <Button className='playerclickpopupbutton' onClick={() => setButtonPopup(true)}>
                            <div className='playerimagedivplay'>
                                <Image src={images.playerfour} width="55%" />
                            </div>
                            <div className='maketheminrowatbottomfield'>
                                <Image src={images.playbtthree} />
                                <p className='playrankred m-1'> -3.22%</p>
                            </div>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={1}>
                    <Button className='playerclickpopupbutton' onClick={() => setButtonPopup(true)}>
                            <div className='playerimagedivplay'>
                                <Image src={images.playerone} width="50%" />
                            </div>
                            <div className='maketheminrowatbottomfield'>
                                <Image src={images.playbtfour} />
                                <p className='playrankred m-1'> -16.38%</p>
                            </div>
                        </Button>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={6}></Col>
                    <Col md={1}>
                        <Button className='playerclickpopupbutton' onClick={() => setButtonPopup(true)}>
                            <div className='playerimagedivplay'>
                                <Image src={images.playerthree} width="50%" />
                            </div>
                            <div className='maketheminrowatbottomfield'>
                                <Image src={images.playbtfour} />
                                <p className='playrankred m-1'> -16.38%</p>
                            </div>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={1}>
                    <Button className='playerclickpopupbutton' onClick={() => setButtonPopup(true)}>
                            <div className='playerimagedivplay'>
                                <Image src={images.playertwo} width="50%" />
                            </div>
                            <div className='maketheminrowatbottomfield'>
                                <Image src={images.playbttwo} />
                                <p className='playrank m-1'> +0.01%</p>
                            </div>
                        </Button>
                    </Col>
                </Row>
                <Playpopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Form>
                        <Form.Group>
                            <Form.Label className='selectamountlablel mt-4'>Select a coin type for each football player</Form.Label>
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
                        </Form.Group>
                        <div className='setbuttonpositionforplaypopup'>
                            <Button className='selecttokentoexchangeformbytton mt-3'>Select</Button>
                        </div>
                    </Form>
                </Playpopup>
            </Container>
        </div>
    )
}

export default Play