import { Redirect, Route, Switch } from 'react-router-dom'
import Home from "./2.components/2.container/1.Homepage";
import PageList from './2.components/2.container/2.pagesList';
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
            <Route path='/PageList' exact>
                <PageList/>
            </Route>
            <Route path='/Admin' >
                <AdminPanel/>
            </Route>
        </Switch>:
        <Switch>
            <Route path='/login' exact>
                <UserAuth/>
            </Route>
            <Redirect to='/login'/>
        </Switch>
       }
       </>
    )
    }
  export default useRouters;