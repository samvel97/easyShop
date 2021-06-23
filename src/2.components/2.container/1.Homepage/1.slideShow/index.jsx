import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSlide from '../../../../assets/images/slideShow.jpg'
import { nanoid } from 'nanoid';

const SlideShow = ()=>{
    const imgSlide = [
        {id:nanoid(), title:FirstSlide},
        {id:nanoid(), itle:FirstSlide},
        {id:nanoid(), title:FirstSlide},
        {id:nanoid(), title:FirstSlide},
    ]
    return(
        <>
            <Carousel variant="dark">
                {imgSlide.map((elem)=>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={elem.title}
                        key={elem.id}
                        alt="First slide"
                        />
                    </Carousel.Item>
                )}                
            </Carousel>
        
        </>
    )
}

export default SlideShow;