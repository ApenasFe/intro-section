"use client";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Home() {
  //Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //Dropdown Features
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);
  const [featureArrowIcon, setFeatureArrowIcon] = useState('/images/icon-arrow-down.svg');

  const handleToggleFeatureDropdown = (isOpen) => {
    setShowFeatureDropdown(isOpen);
      setFeatureArrowIcon(isOpen ? '/images/icon-arrow-up.svg' : '/images/icon-arrow-down.svg');
  };

  //Dropdown Company
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [companyArrowIcon, setCompanyArrowIcon] = useState('/images/icon-arrow-down.svg');

  const handleToggleCompanyDropdown = (isOpen) => {
    setShowCompanyDropdown(isOpen);
      setCompanyArrowIcon(isOpen ? '/images/icon-arrow-up.svg' : '/images/icon-arrow-down.svg');
  };
  
  return (
    //Container Principal
    <Container fluid className="vw-100 vh-100">
      
      <Row className='flex-column vw-100'>
        
        <Col className='w-100'>
          <Stack className='w-100 flex-row justify-content-between'>
            <div className="p-2 pt-4">
              <img src='/images/logo.svg' alt='Snap logo'></img>
            </div>
            
            <div className="pt-3">
              <Button variant="link" onClick={handleShow} alt="Open menu button">
                <img src='/images/icon-menu.svg'></img>
              </Button>

              <Offcanvas className="custom-offcanvas" show={show} onHide={handleClose} placement="end">
                
                <Offcanvas.Header>
                  <Button variant="link" className="ms-auto p-0" onClick={handleClose}>
                    <img src='/images/icon-close-menu.svg' alt='Close menu button'></img>
                  </Button>
                </Offcanvas.Header>
            
                <Offcanvas.Body>
                  <Row className='flex-column w-100'>
                    <Col>
                      <Dropdown show={showFeatureDropdown} onToggle={handleToggleFeatureDropdown}>
                        <Dropdown.Toggle variant='link' className='d-flex flex-row align-items-center' id="custom-feature-dropdown">
                          <div className='me-2'>Features</div>
                          <div id='custom-feature-arrow'><img src={featureArrowIcon}></img></div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Todo List</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Calendar</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Reminders</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Planning</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    
                    <Col>
                      <Dropdown show={showCompanyDropdown} onToggle={handleToggleCompanyDropdown}>
                        <Dropdown.Toggle variant='link' className='d-flex flex-row align-items-center' id="custom-feature-dropdown">
                            <div className='me-2'>Company</div>
                            <div id='custom-feature-arrow'><img src={companyArrowIcon}></img></div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">History</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Our Team</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Blog</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    
                    <Col>Careers</Col>
                    <Col>About</Col>
                  </Row>
                </Offcanvas.Body>
              
              </Offcanvas>
            </div>
          </Stack>
        </Col>
        
        <Col className='px-0 my-3 w-100'>
          <img src='/images/image-hero-mobile.png' alt='Logo of a man holding laptop'></img>
        </Col>
        
        <Col className='w-100'>
          <Stack className='d-flex align-items-center text-center text-wrap'>
            <div className='w-100'>
              <h1>Make remote work</h1>
            </div>
            <div>
              <p className='w-100'>
                Get your team in sync, no matter your location.
                Streamline processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <Button className="btn btn-dark">Saiba mais</Button>
          </Stack>
        </Col>
        
        <Col className='w-100 mt-4'>
          <Stack className='flex-row justify-content-between gap-3'>
            <div><img src='/images/client-databiz.svg' alt='databiz logo'></img></div>
            <div><img src='/images/client-audiophile.svg' alt='audiophile logo'></img></div>
            <div><img src='/images/client-meet.svg' alt='meet logo'></img></div>
            <div><img src='/images/client-maker.svg' alt='maker logo'></img></div>
          </Stack>
        </Col>
      
      </Row>

    </Container>
  );
}