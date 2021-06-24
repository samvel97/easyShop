import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTool from './nav';
import { NavLink } from 'react-router-dom';
import './style.main.scss'
import Search from './search';

const NavBar = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixing">
  <Container>
  <Navbar.Brand><NavLink to='Admin'>React-Bootstrap</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <NavTool/>
    <Nav>
      <Search/>
      <NavLink to=''>Favorites</NavLink>
      <NavLink to=''>Busket</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;