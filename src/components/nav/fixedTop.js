//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTop() {
  return (
    <Navbar  collapseOnSelect expand="xs"  >
      <Container fluid>
      <a href="/"><img  src='/logo.png' responsive  style={{height:"98px"}} /></a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-max-hight" navbarScroll  >
            <Nav.Link href="/"> </Nav.Link>
            <Navbar.Brand href="/" >Find Pincode</Navbar.Brand>
            <Navbar.Brand href="/about" >About</Navbar.Brand>
          </Nav>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>



  );
}

export default NavTop;