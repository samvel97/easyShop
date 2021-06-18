import { Route, Switch } from 'react-router-dom'
import Home from "./2.components/2.container/1.Homepage";
import Bags from "./2.components/2.container/2.pagesList/bags";
import Hats from "./2.components/2.container/2.pagesList/hats";
import Jewels from "./2.components/2.container/2.pagesList/jewels";
import Watches from "./2.components/2.container/2.pagesList/watches";

const useRouters = ()=>{
    
    return(
        <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/bags' exact>
                <Bags/>
            </Route>
            <Route path='/hats' exact>
                <Hats/>
            </Route>
            <Route path='/jewels' exact>
                <Jewels/>
            </Route>
            <Route path='/watches' exact>
                <Watches/>
            </Route>
        </Switch>
    )
    }
  export default useRouters;