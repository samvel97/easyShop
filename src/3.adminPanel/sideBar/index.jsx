import { useSelector } from 'react-redux';
import { titles } from '../../store/selectors';
import { NavLink, useHistory } from 'react-router-dom'; 
import SideBarLists from './sidebarTitels';
import './style.main.scss'
const SideBar = ()=>{
    const title = useSelector(titles)
    return(
        <>
            <div className='sidebar'>
                <ul>
                    <li>Admin Panel</li>
                    {title.map((elem)=><SideBarLists title={elem.title} id={elem.id} key={elem.id}/>)}
                </ul>
            </div>
        </>
    )
}

export default SideBar;