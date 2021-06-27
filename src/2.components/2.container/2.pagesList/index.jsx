import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './pages';
import { useSelector } from 'react-redux';
import { titles } from '../../../store/selectors';
import style from './style.module.scss'
const PageList = ({title, card})=>{
  const data = useSelector(titles)
    return(
        <>
        <h1>{title} Collection</h1>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Man</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Woman</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Kids</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" >New</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className='row'>
            {card.map((el)=><Pages title={el.title} price={el.price} count={el.count}/>)}
          </div>
        </>
    )
}

export default PageList;