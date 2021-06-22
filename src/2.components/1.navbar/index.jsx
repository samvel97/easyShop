import {Navbar,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTool from './nav';
import { Link } from 'react-router-dom';
import './style.main.scss'
import Search from './search';

const NavBar = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixing">
  <Container>
  <Navbar.Brand href="#home"><Link to='Admin'>React-Bootstrap</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <NavTool/>
    <Nav>
      <Search/>
      <Link href="#deets">Favorites</Link>
      <Link eventKey={2} href="#memes">Busket</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;