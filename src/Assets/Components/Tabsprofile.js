import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "../Css/Game/Tabsprofile.css";
const Tabsprofile = () => {
  return (
    <div>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col md={1}></Col>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Billing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Notification</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Subscription status</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} className='tab-rightside'>
          <Tab.Content>
            <Tab.Pane eventKey="first">Billing Related Information</Tab.Pane>
            <Tab.Pane eventKey="second">Your Notifications </Tab.Pane>
            <Tab.Pane eventKey="third">Your Subscription status</Tab.Pane>
          </Tab.Content>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Tabsprofile