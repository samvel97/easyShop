import SideBar from "./sideBar";
import CardCreating from "./cardCreating";
import './style.main.scss'
import AdminRouters from "./adminRouter";

const AdminPanel = ()=>{
    const adminRouters = AdminRouters()
    return(
        <>
            <div className='adminPanel'>
                <SideBar/>
                {adminRouters}
            </div>
        </>
    )
}

export default AdminPanel;