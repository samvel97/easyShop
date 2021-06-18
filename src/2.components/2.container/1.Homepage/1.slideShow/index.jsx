import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstSlide from '../../../../assets/images/slideShow.jpg'

const SlideShow = ()=>{
    const imgSlide = [
        {title:FirstSlide},
        {title:FirstSlide},
        {title:FirstSlide},
        {title:FirstSlide},
    ]
    return(
        <>
            <Carousel variant="dark">
                {imgSlide.map((elem)=>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={elem.title}
                        alt="First slide"
                        />
                    </Carousel.Item>
                )}                
            </Carousel>
        
        </>
    )
}

export default SlideShow;