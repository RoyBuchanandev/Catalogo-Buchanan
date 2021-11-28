import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { categories } from '../utils/categories'
import CarWidget from "./CarWidget"

export default class NavBarComp extends Component {
    render() {
        return (
            <div>
              <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Salad Clo.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Contacto</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
            {categories.map((category)=>
                <NavDropdown.Item><NavLink to={`category/${category.id}`}>{category.name}</NavLink></NavDropdown.Item>
            )}
          {/* <NavDropdown.Item href="#action/3.1"><NavLink to={'caregoties'}>Action</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        )
    }
}
