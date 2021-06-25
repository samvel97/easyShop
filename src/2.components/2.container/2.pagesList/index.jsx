import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages';
import { useSelector } from 'react-redux';
import { titles } from '../../../store/selectors';
const PageList = ()=>{
  const data = useSelector(titles)
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
          {data.map((elem)=>elem.card.map((el)=><Pages title={el.title} price={el.price} count={el.count}/>))}
        </>
    )
}

export default PageList;