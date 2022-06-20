import React from 'react'
import './home.css'
import Topbar from '../components/topbar/topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Form, FormControl, Button , Breadcrumb , Card} from 'react-bootstrap'; 
const Home = () => {
    return (
        <div>
            <Topbar />
            <div className="homesearch">
                <div className="homewrap">
                    <div className="baricon"><FontAwesomeIcon icon={faBars } /> </div>
                    <div><Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </div>
                </div>
            </div>

            <div className="headingContainer">
                <div className="headingWrap">
                    <div>
                        <h1>Ac Repair Services</h1>
                    </div>
                    <div>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href=" ">
                        Services
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>AC Repair Services</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="bodyContainer">
                <div className="bodyWrap">
                    <div className="serviceButton">
                        <div className="servicebutton">
                            <Button  className="services"  className="services" variant="outline-primary" size="sm">
                            AC Installation/Replacement
                            </Button>
                        </div>
                        <div className="servicebutton">
                            <Button  className="services" variant="outline-primary" size="sm">
                            AC Installation/Replacement
                            </Button>
                        </div>
                        <div className="servicebutton">
                            <Button className="services" variant="outline-primary" size="sm">
                            AC Installation/Replacement
                            </Button>
                        </div>
                        <div className="servicebutton">
                            <Button  className="services"  variant="outline-primary" size="sm">
                            AC Installation/Replacement
                            </Button >  

                        </div>
                        <div className="servicebutton">
                            <Button  className="services"  variant="outline-primary" size="sm">
                            AC Installation/Replacement
                            </Button>
                        </div>

                    </div>
                    <div className="serviceDetails">
                        <h4>AC Installation/Replacement</h4>
                        <div className="infobody">
                            <div>
                            <p>
                            lorem ehjadfsklhfahkjankjlankjvnkjh hfskjds  cnsdjkndsnnmasd  hdkansad dsfamba kadhjalorem ehjadfsklhfahkjankjlankjvnkjh hfskjds  cnsdjkndsnnmasd  hdkansad dsfamba kadhj
                            lorem ehjadfsklhfahkjankjlankjvnkjh hfskjds  cnsdjkndsnnmasd  hdkansad dsfamba kadhj
                            lorem ehjadfsklhfahkjankjlankjvnkjh hfskjds  cnsdjkndsnnmasd  hdkansad dsfamba kadhj
                            </p>
                                
                            </div>
                            <div>
                            <Card className="imageCard" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://source.unsplash.com/200x200/?electronics,ac" />
                             
                            </Card>
                            </div>
                        </div>
                        <Button variant="primary" size="lg">
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>

            <div className="imageContainer">
                <div className="imageWrap">
                    <div>
                                <Card className="imageCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/200x200/?electronics,ac" />
                                
                                </Card>
                    </div>
                    
                    <div>
                                <Card className="imageCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/200x200/?electronics,ac" />
                                
                                </Card>
                    </div>

                    <div>
                                <Card className="imageCard" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://source.unsplash.com/200x200/?electronics,ac" />
                                
                                </Card>
                    </div>
                </div>
            </div>


            <div className="footerContainer" >
                <div className="footerWrap">
                    <div className="footerBody">
                        <div>
                            <h6>A COMPANY YOU CAN TRUST</h6>
                        </div>
                        <div>
                            <h6>FOLLOW US</h6>
                        </div>
                        <div>
                            <h6>WE ACCEPT</h6>
                        </div>
                    </div>

                    <div className="footerend">
                    <div className="footerendwarp">
                    <div className="copyright">
                          <b>&copy; Copyright</b>
                           
                        </div>
                        <div class="footerlink">
                        <div>
                            <a href="">Home</a>
                        </div>
                        <div>
                            <a href="">Services</a>
                        </div>
                        <div>
                            <a href="">Blog</a>
                        </div> 
                        <div>
                            <a href="">Best Offers</a>
                        </div> 
                        </div>
                    </div>
                        
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
