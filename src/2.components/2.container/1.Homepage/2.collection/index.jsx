import {Row,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.main.scss'
const Collect = ()=>{
    const container = [
        {title:'WOMAN'},
        {title:'MAN'},
        {title:'KIDS'},
        {title:'NEW'},
        {title:'SALE'},
        {title:'STORY'},
    ]
    return(
        <div className='collection'> 
            <Container>
                <Row >
                    {container.map((elem)=><Col xs={6} md={4} className='elem'>
                        <h1><a href='#' className='sortBy'>{elem.title}</a></h1>
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default Collect;