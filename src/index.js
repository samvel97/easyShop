import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import firebase from "firebase";
import rootStore from './store/index'


const {store} = rootStore


const firebaseConfig = {
  apiKey: "AIzaSyDcWFp5h41CH04hu3KFmnA95UuHh53ykz0",
    authDomain: "shopisauth.firebaseapp.com",
    databaseURL: "https://shopisauth-default-rtdb.firebaseio.com",
    projectId: "shopisauth",
    storageBucket: "shopisauth.appspot.com",
    messagingSenderId: "651412345797",
    appId: "1:651412345797:web:ac28a21ff5bbdba34571ac"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
