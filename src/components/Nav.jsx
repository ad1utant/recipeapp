import {Link} from "react-router-dom";
import '/src/styles/Nav.css'
import {Navbar, Nav, Container} from "react-bootstrap";

function NavigationBar(){
    return(
        <Navbar bg={'light'} expand={'lg'}>
            <Container>
                <Navbar.Brand href="/">Recipe App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className={'nav-link'} to={'/categories'}>Categories</Link>
                        <Link className={'nav-link'} to={'/random'}>Random Meal</Link>
                        <Link className={'nav-link'} to={'/search'}>Search</Link>
                    </Nav>
                    <Nav>
                        <Link className={'nav-link'} to={'/about'}>About</Link>
                        <Link className={'nav-link'} to={'/login'}>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavigationBar