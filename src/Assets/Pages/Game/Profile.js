import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../../Css/Game/Profile.css"
import Header from "../../Components/Header";
import { images } from "../../../Images"
import Dropdown from 'react-bootstrap/Dropdown';
import { FaRegBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiWalletAlt } from "react-icons/bi";
import Tabsprofile from '../../Components/Tabsprofile';
const Profile = () => {
    return (
        <div>
            <Header />
            <Container className='setpaddingprofile'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}></Col>
                    <Col md={2}>
                        <div className='makeiconsandbuttonsbothinrowprofile'>
                            <div className='alliconsinrowprofile'>
                                <div className='iconbgprofile'>
                                    <FaRegBell />
                                </div>
                                <div className='iconbgprofile'>
                                    <HiOutlineMail />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <div className='iconbgprofile'>
                                            <FiSettings />
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='profilepagedropdown'>
                                        <Dropdown.Item className='profiledropdownitem' href="#/action-1">Edit Profile</Dropdown.Item>
                                        <Dropdown.Item className='profiledropdownitem' href="#/action-1">Edit Password</Dropdown.Item>
                                        <Dropdown.Item className='profiledropdownitem' href="#/action-1">Add Payment Method</Dropdown.Item>
                                        <Dropdown.Item className='profiledropdownitem' href="#/action-1">Remove Payment Method</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='margbtnsetformbl'>
                            <Button className='walletconnectprofile'><span className='walletprofileconnectbutton'><BiWalletAlt /></span>Connect Wallet</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={5}></Col>
                    <Col md={2}>
                        <div className='makeprofilepicandtextcent'>
                            <Image src={images.testtwo} width="100px" />
                            <p className='profilename mt-4'>John Wick</p>
                        </div>
                    </Col>
                    <Col md={5}></Col>
                </Row>
                <Row className='mt-5'>
                    <Tabsprofile />
                </Row>
            </Container>
        </div>
    )
}

export default Profile