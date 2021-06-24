import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages';
import { useSelector } from 'react-redux';
import { addCard } from '../../../store/selectors';
const PageList = ()=>{
  const pageList = useSelector(addCard)
  console.log(pageList);
    return(
        <>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {pageList.map((elem)=><Pages title={elem.title} price={elem.price} count={elem.count}/>)
          }
        </>
    )
}

export default PageList;