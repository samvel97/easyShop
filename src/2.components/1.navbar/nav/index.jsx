import {Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavTool = ()=>{

    const navDrop = [
        {title:'watches'},
        {title:'bags'},
        {title:'jewels'},
        {title:'hats'},
        {title:'perfume'},
    ]

    return(
       <>
            <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                {navDrop.map((elem)=>
                    <NavDropdown title={elem.title} key={elem.title} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">men</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">women</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">kids</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">new</NavDropdown.Item>
                    </NavDropdown>
                )}
            </Nav>
       </>
    )
}
export default NavTool;