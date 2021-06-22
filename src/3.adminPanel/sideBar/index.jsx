import { useSelector } from 'react-redux';
import { titles } from '../../store/selectors';
import { Link } from 'react-router-dom'; 
import './style.main.scss'
const SideBar = ()=>{
    const title = useSelector(titles)
    return(
        <>
            <div className='sidebar'>
                <ul>
                    <li>Admin Panel</li>
                    {title.map((elem)=><li key={elem.id}><Link to={`/Admin/${elem.title}`}>{elem.title}</Link></li>)}
                </ul>
            </div>
        </>
    )
}

export default SideBar;