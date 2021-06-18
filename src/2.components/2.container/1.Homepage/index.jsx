import SlideShow from "./1.slideShow"
import Collect from "./2.collection";
import './style.main.scss'

const Home = ()=>{
    return(
        <>
            <SlideShow/>
            <div className="paragraph">
                <h3>OUR COLLECTION</h3>
            </div>
            <Collect/>
        </>
    )
}

export default Home;