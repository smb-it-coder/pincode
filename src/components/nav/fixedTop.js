import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {ResponsiveEmbed, Image} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavTop() {
  return (
    <div class="container-fluid bg-light position-relative shadow">
      <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <a href="/" class="navbar-brand font-weight-bold text-secondary" style={{'font-size': 50 + 'px'}} >
          <img src="logo.png" alt="Search my Picode" width="300" style={{float: 'left'}} />
        </a>
        <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarCollapse" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-between collapse" id="navbarCollapse" >
          <div class="navbar-nav font-weight-bold mx-auto py-0">
            <a href="index.html" class="nav-item nav-link">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
          
            <div class="nav-item dropdown">
              <a href="/" class="nav-link dropdown-toggle active" data-toggle="dropdown" aria-expanded="false">Pincode</a>
              <div class="dropdown-menu rounded-0 m-0">
                <a href="/" class="dropdown-item">Search By State</a>
                <a href="/" class="dropdown-item">Search By District</a>
              </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
          </div>
           </div>
      </nav>
    </div>
    



  );
}

export default NavTop;