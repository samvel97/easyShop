import { Route, Switch } from 'react-router-dom'
import SideBar from "./sideBar";
import CardCreating from "./cardCreating";
import './style.main.scss'
import { useSelector } from 'react-redux';
import { titles } from '../store/selectors';


const AdminPanel = ()=>{
    const pageNames = useSelector(titles)
    return(
        <>
            <div className='adminPanel'>
                <SideBar/>
                <Switch>
                    {pageNames.map((elem)=>
                            <Route path={`/Admin/${elem.title}`}>
                                <CardCreating id={elem.id} title={elem.title} card={elem.card} key={elem.id}/>
                            </Route>
                        )}
                </Switch>
            </div>
        </>
    )
}

export default AdminPanel;