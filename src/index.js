import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import LandingPage from './components/landingpage/LandingPage';
import SignIn from './components/login/SignIn';
import SignUp from './components/signup/SignUp'
import SideNav from './components/sidenav/SideNav';
import Questions from './components/questions/Questions';
import Tags from './components/tags/Tags';
import Users from './components/users/Users';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='sidenav' element={<SideNav />} />
      </Routes> */}
    </BrowserRouter>  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
