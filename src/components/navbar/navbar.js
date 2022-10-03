import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import image from '../navbar/shoes1.png'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import './navbar.css';


export default function Header() {
 
  return <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container >
          <img src={image} style={{ height: 40, width: 70 }} />
          <Link to={'./'}>
        <Navbar.Brand href="#home">Shoes Store
        </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  >
              <Link to={'./'} style={{ color: 'white' }} className="text">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={'./shoes'} style={{ color: 'white' }} className="text">
                Shoes
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={'./mens'} style={{ color: 'white' }} className="text">
                Mens
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={'./female'} style={{ color: 'white' }} className="text" >
                Womens
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to={'./kids'} style={{ color: 'white' }} className="text">
                Kids
              </Link>
            </Nav.Link>


          </Nav>
          <Nav>
            <Link to={'./cart'}>
            <Badge badgeContent={0} color="primary">
              <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 27, cursor: "pointer" }}></i>
            </Badge>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
      <Menu>
        <div className='card-details d-flex justify-content-center align-item-center' style={{ width: "12rem" }}>
          <i className='fas fa-close smallclose'
            style={{ position: "absolute", top: 10, right: 12, fontSize: 20, cursor: "pointer" }}></i>
          <p>Your card is Empty</p>
        </div>
      </Menu>
    </Navbar>
  </>
}














