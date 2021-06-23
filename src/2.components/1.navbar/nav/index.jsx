import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { titles } from '../../../store/selectors';
import NavList from './navList';

const NavTool = ()=>{
    const title = useSelector(titles)
    
    return(
       <>
            <Nav className="me-auto">
                {title.map((elem)=>
                   <NavList title={elem.title} key={elem.id} id={elem.id}/>
                )}
            </Nav>
       </>
    )
}
export default NavTool;