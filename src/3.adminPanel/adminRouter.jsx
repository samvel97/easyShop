import { Route, Switch } from 'react-router-dom'
import { useSelector } from "react-redux";
import { titles } from "../store/selectors";
import CardCreating from './cardCreating';

const AdminRouters = ()=>{
    const title = useSelector(titles)
    return(
    <>
        <Switch>
            {title.map((elem)=><Route path={`/Admin/${elem.title}`} exact>
                <CardCreating/>
            </Route>)}
        </Switch>
    </>
    )
    }
  export default AdminRouters;