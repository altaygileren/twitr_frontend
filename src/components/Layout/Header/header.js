import React, { useContext, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { UserContext } from '../../../utils/UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  return user !== null ? (<Auth user={user} />) : (<Unauth />)
}

const Unauth = () => {
  const { user } = useContext(UserContext);
  return (
    <Navbar fixed={'top'} bg="light" expand="lg">
      <Navbar.Brand href="/">twitr{user ? (<span>{user.firstName}</span>) : (null)}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/link">Link</Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/signin">Sign in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Auth = () => {
  const { user } = useContext(UserContext);
  return (
    <Navbar fixed={'top'} bg="light" expand="lg">
      <Navbar.Brand href="/">twitr
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/link">Link</Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Welcome, {user.firstName}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}