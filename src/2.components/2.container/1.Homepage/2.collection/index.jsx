import {Row,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.main.scss'
import { NavLink } from 'react-router-dom';
const Collect = ()=>{
    const container = [
        {title:'Bags'},
        {title:'Hats'},
        {title:'Jewels'},
        {title:'Watches'},
        {title:'Watches'},
        {title:'Watches'},
    ]
    return(
        <div className='collection'> 
            <Container>
                <Row >
                    {container.map((elem)=><Col xs={6} md={4} className='elem'>
                        <h1><NavLink href='#' className='sortBy' to={elem.title} >{elem.title}</NavLink></h1>
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default Collect;