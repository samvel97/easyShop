import { Redirect, Route, Switch } from 'react-router-dom'
import Home from "./2.components/2.container/1.Homepage";
import Bags from "./2.components/2.container/2.pagesList/bags";
import Hats from "./2.components/2.container/2.pagesList/hats";
import Jewels from "./2.components/2.container/2.pagesList/jewels";
import Watches from "./2.components/2.container/2.pagesList/watches";
import UserAuth from './1.userAuthorize';
import { useSelector } from 'react-redux';
import { isTrue } from './store/selectors';
import AdminPanel from './3.adminPanel';

const useRouters = ()=>{
    const isAuth = useSelector(isTrue)
    return(
    <>
       {isAuth?
         <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/Bags' exact>
                <Bags/>
            </Route>
            <Route path='/Hats' exact>
                <Hats/>
            </Route>
            <Route path='/Jewels' exact>
                <Jewels/>
            </Route>
            <Route path='/Watches' exact>
                <Watches/>
            </Route><Route path='/Admin' exact>
                <AdminPanel/>
            </Route>
        </Switch>:
        <Switch>
            <Route path='/Login' exact>
                <UserAuth/>
            </Route>
            <Redirect to='/Login'/>
        </Switch>
       }
       </>
    )
    }
  export default useRouters;