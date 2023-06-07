import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../../Css/Game/Connect.css"
import Header from "../../Components/Header";
import { images } from "../../../Images"
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
const Connect = () => {
    return (
        <div>
            <Header />
            <div className='connectbgandpadding'>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <p className='connectdescription'>“Welcome! Check your e-mail if you’re interested in learning how to make money by investing into digital assets”.</p>
                            <div className='putbuttonincenter'>
                                <Button className="cnnectcheckemail">Check email</Button>
                            </div>
                            <div className='makeconnectbuttoncenter'>
                                <Button className='connectwithmetamsk'><Image className='margin-right-metamask' src={images.metamask} /> Connect with Metamask</Button>
                                <Button className='connectwithmetamsk mt-3'><span className='connectwalletset'><MdOutlineAccountBalanceWallet/></span> Connect Wallet</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Connect