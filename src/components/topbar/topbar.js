import React from 'react'
import { Navbar , Container , Nav,NavDropdown , Button} from 'react-bootstrap'; 
import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock  } from '@fortawesome/free-regular-svg-icons'
import { faAt, faPeopleArrows ,faContactCard } from '@fortawesome/free-solid-svg-icons'
import {faYoutube , faFacebook , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'
 
function topbar ()  {
    return ( <div>
    <div className="uptopbarContainer">
        <div className="uptopbarWrapper">
       
            <div className="navitem">
                <div className="itemlist">
                 
                <p className="faclock"><FontAwesomeIcon icon={faClock } /> </p>
                <p> Neat & Clean <br/> 7 days of the week! <br/>9am-9pm </p>
                </div>
                
            </div>
            <div className="navitem">
                <div className="itemlist">
                    <span className="faemail"> <FontAwesomeIcon icon={faAt} /></span>
                     <div className="toptext">
                     <span> Email </span>  <br />
                     <span>servicexpertz2gmail.com</span>
                     
                     </div>
                    
                </div>
                
            </div>
            <div className="navitem">
            <div className="itemlist">
                <p className="fasocial"><FontAwesomeIcon icon={faPeopleArrows  } /> </p>
                <div className="toptext">
                <span> Get social </span><br />
                <div className="brands">
                <FontAwesomeIcon icon={faYoutube } />
                <FontAwesomeIcon icon={faLinkedin } />
                <FontAwesomeIcon icon={faFacebook } />
                <FontAwesomeIcon icon={faInstagram} />
                </div>
                </div>
                
            </div>
                
            </div>
            <div className="navitem">
            <div className="itemlist">
            <p className="facontact"><FontAwesomeIcon icon={faContactCard } /> </p>
            <div className="toptext">
                <span>  Contact us </span> <br />
                <span>123456789</span>
                </div>
                </div>
            </div>
             
        </div>

    </div>
  <Navbar className="bgcolor" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Servicexpertz</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        
      </Nav>
      <NavDropdown title="Home" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Subscription" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action2">Blog</Nav.Link>
        <Nav.Link href="#action2">About us</Nav.Link>
        <Nav.Link href="#action2">Login</Nav.Link>
        <Button variant="primary" size="sm" >
      Book a Call
    </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>  
    </div>
        
    )
}

export default topbar;