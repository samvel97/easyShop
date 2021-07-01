import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from './2.components/1.navbar';
import './App.css';
import useRouters from './router';
import { isTrue } from './store/selectors';

function App() {
  const isAuth = useSelector(isTrue)
  const route = useRouters()
  const history = useHistory()
  
  useEffect(()=>{
    if(isAuth){
    history.push('/')
    }
  },[isAuth,history])

  
  return (
    <>
    <div className="App">
      <NavBar/>
      {route}
    </div>
    </>
  );
}

export default App;
