import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg'
import Footer from './footer';
import Head from './header';

const navbar=(
  <div>
    <Head/>
    <ul className='nav-list'>
      <li>pricing</li>
      <li> about </li>
      <li> config </li> 
    </ul>
    <Footer/>
  </div>  
)

function Haha(){
  return navbar
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<Haha/>)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
