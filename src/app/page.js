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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    //Container Pincipal
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
                      <Dropdown>
                        <Dropdown.Toggle variant='link' id="custom-feature-dropdown">
                          Features
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col>Item 2</Col>
                    <Col>Item 3</Col>
                    <Col>Item 4</Col>
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
