import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const MyContext = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyContext.Provider value={{name: 'Stefan', age: 17}}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </MyContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {
    MyContext
}
