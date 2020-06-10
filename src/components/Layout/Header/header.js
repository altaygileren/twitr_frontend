import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { UserContext } from '../../../utils/UserContext';
import { logOut } from '../../../utils/';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  return user !== null ? (<Auth user={user} />) : (<Unauth />)
}

const Unauth = () => {
  return (
    <Navbar fixed={'top'} bg="light" expand="lg">
      <Navbar.Brand href="/">
        twitr
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/signin">Sign in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Auth = () => {
  const { user, setUser } = useContext(UserContext);

  const logUserOut = () => {
    logOut();
    setUser(null)
  }
  return (
    <Navbar fixed={'top'} bg="light" expand="lg">
      <Navbar.Brand href="/">
        twitr
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={logUserOut}>Logout</Button>
        </Nav>
        <Nav className="mr-auto">
          <span>Welcome, {user.firstName}</span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}