import {Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropDown from './navDropdown';

const NavList = ({title, id})=>{
  
    return(
       <>
            <Nav className="me-auto">
                    <NavDropdown title={title} id="collasible-nav-dropdown">
                       <DropDown title={title} id={id}/>
                    </NavDropdown>
            </Nav>
       </>
    )
}
export default NavList;