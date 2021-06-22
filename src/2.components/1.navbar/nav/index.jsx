import {Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { titles } from '../../../store/selectors';

const NavTool = ()=>{
    const title = useSelector(titles)

    return(
       <>
            <Nav className="me-auto">
                {title.map((elem)=>
                    <NavDropdown title={elem.title} key={elem.id} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><Link to={elem.title}>MEN</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><Link to={elem.title}>WOMEN</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={elem.title}>KIDS</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><Link to={elem.title}>NEW</Link></NavDropdown.Item>
                    </NavDropdown>
                )}
            </Nav>
       </>
    )
}
export default NavTool;