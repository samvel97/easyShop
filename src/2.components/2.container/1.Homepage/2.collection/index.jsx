import {Row,Container,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../../../../assets/images/img.jpg'
import './style.main.scss'
const Collect = ()=>{
    const container = [
        {title:avatar},
        {title:avatar},
        {title:avatar},
        {title:avatar},
        {title:avatar},
        {title:avatar},
    ]
    return(
        <div className='collection'> 
            <Container>
                <Row >
                    {container.map((elem)=><Col xs={6} md={4} className='elem'>
                        <Image src={elem.title} roundedCircle width='300px' height='260px'/>
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default Collect;