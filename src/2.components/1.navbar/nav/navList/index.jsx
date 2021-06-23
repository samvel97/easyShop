import {Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const NavList = ({title, id})=>{
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch({type:'ADMIN_MANAGEMENT', title, id})
        history.push({pathname:'/PageList'})
    }
    return(
       <>
            <Nav className="me-auto">
                    <NavDropdown title={title} id="collasible-nav-dropdown">
                        <NavDropdown.Item  onClick={()=>handleClick(title, id)}>MEN/{title}</NavDropdown.Item>
                        <NavDropdown.Item  onClick={()=>handleClick(title, id)}>WOMEN/{title}</NavDropdown.Item>
                        <NavDropdown.Item  onClick={()=>handleClick(title, id)}>KIDS/{title}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  onClick={()=>handleClick(title, id)}>NEW/{title}</NavDropdown.Item>
                    </NavDropdown>
            </Nav>
       </>
    )
}
export default NavList;