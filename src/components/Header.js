import {  Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import style from "../style.module.css"

export default function Header(){
    const loginHand = ()=>{
        localStorage.removeItem(
            "token",
        );
        window.location.href='/';
    };
    return(
        <>
   
        
        <Navbar bg="dark" expand="lg">
            <Container> 
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                {localStorage.getItem("token")?(
                    <Nav className="me-auto">
                        <Nav.Link >
                            <NavLink
                                className={(nav)=>(nav.isActive? style.active: style.normal) }
                                to={"/"}>Welcome 
                            </NavLink>      
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink 
                                className={(nav)=>(nav.isActive? style.active: style.normal)}
                                to={"/product"}>Product
                            </NavLink>
                            
                        </Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="page1">Page1</NavDropdown.Item>
                            <NavDropdown.Item href="page2">Page2</NavDropdown.Item>
                        </NavDropdown>
                        <Button style={{marginLeft: '750px'}} onClick={()=>loginHand()}>LogOut</Button>
                    
                    </Nav>
                    
                    
                    ):(
                    
                         <Nav >
                            <Nav.Link>
                                    <NavLink 
                                        className={(nav)=>(nav.isActive? style.active: style.normal)}
                                        to={"/login"}>login
                                    </NavLink>
                            </Nav.Link>
                        </Nav>
                )}
                 
            </Container>
        </Navbar>
        </>
    )
}