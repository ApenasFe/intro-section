"use client";

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {<img src='/images/icon-menu.svg'></img>}
  </a>
));

export default function Home() {
  return (
    <Container fluid className="vw-100 vh-100">
      
      <Row className='flex-column vw-100'>
        
        <Col className='w-100'>
          <Stack className='w-100 flex-row justify-content-between'>
            <div className="p-2 pt-4"><img src='/images/logo.svg' alt='Snap logo'></img></div>
            <div className="p-2 pt-4">
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  Custom toggle
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Stack>
        </Col>
        
        <Col className='px-0 my-3 w-100'>
          <img src='/images/image-hero-mobile.png' alt='Logo with a man holding laptop'></img>
        </Col>
        
        <Col className='w-100'>
          <Stack className='d-flex align-items-center text-center text-wrap'>
            <div className='w-100'><h1>Faça trabalho remoto</h1></div>
            <div><p className='w-100'>Sincronize sua equipe, independente do local. Simplifique processos, crie rituais de equipe, e veja o disparo na produtividade.</p></div>
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
