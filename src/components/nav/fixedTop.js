import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTop() {
  return (
    <Navbar  collapseOnSelect expand="xl" bg="warning" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-max-hight" navbarScroll  >
            <Nav.Link href="/"><Image  src='logo.png' className="logo-link" responsive /></Nav.Link>
            <Nav.Link href="/" className="p-1">Home</Nav.Link>
            <NavDropdown title="Pincode" id="basic-nav-dropdown" className="p-1">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href="" className="p-1">About</Navbar.Brand>
          </Nav>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>



  );
}

export default NavTop;