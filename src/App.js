import NavBar from './2.components/1.navbar';
import './App.css';
import Home from './2.components/2.container/1.Homepage';
import useRouters from './router';

function App() {
  const route = useRouters()
  return (
    <>
    <div className="App">
      <div className="navContact">
        <span>Welcome to Devicer</span>
        <span>Contact us +374-999999</span>
      </div>
      <NavBar/>
      {route}
    </div>
    </>
  );
}

export default App;
