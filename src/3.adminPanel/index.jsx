import { Route, Switch } from 'react-router-dom'
import SideBar from "./sideBar";
import CardCreating from "./cardCreating";
import './style.main.scss'


const AdminPanel = ()=>{
    return(
        <>
            <div className='adminPanel'>
                <SideBar/>
                <Switch>
                    <Route path='/Admin/add'  component={CardCreating} />
                </Switch>
            </div>
        </>
    )
}

export default AdminPanel;