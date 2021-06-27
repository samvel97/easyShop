import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './style.module.scss'
const Pages = ({title})=>{
    return(
        <>
          <Card style={{ width: '18rem'}} className='col-md-4'>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">add to buscket</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Pages;