import React from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import "../../Css/Game/Playgame.css"
import Header from "../../Components/Header";
import { images } from "../../../Images";
const Choosinggame = () => {
  return (
    <div>
        <Header/>
    <div className='exploringgamesectionbg'>
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                     <p className='Exploringheading'>Choosing Game Type</p>
                     </Col>
                <Col md={4} className='alignwalletbutright'>
                </Col>
            </Row> 
            <Row className='marg-top-100-gamemodes'>
                <Col md={3}>
                    <div   className='maketennisrow'>
                        <Image className='imgsize100atmbl' src={images.gameone} width="90%"></Image>
                        <p className='gamename mt-4'>Tennis</p>
                        <p className='statusgame'>Coming Soon</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div   className='maketennisrow'>
                        <Image className='imgsize100atmbl' src={images.gametwo} width="90%"></Image>
                        <p className='gamename mt-4'>Football</p>
                        <p className='statusgame'>Coming Soon</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div   className='maketennisrow'>
                        <Image className='imgsize100atmbl' src={images.gamethree} width="90%"></Image>
                        <p className='gamename mt-4'>Basketball</p>
                        <p className='statusgame'>Coming Soon</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div   className='maketennisrow'>
                        <Image className='imgsize100atmbl' src={images.gamefour} width="90%"></Image>
                        <p className='gamename mt-4'>Volleyball</p>
                        <p className='statusgame'>Coming Soon</p>
                    </div>
                </Col>
            </Row>   
        </Container>
       
    </div>
    </div>
  )
}

export default Choosinggame