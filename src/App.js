// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import LandingPage from './components/landingpage/LandingPage';
import SignIn from './components/login/SignIn';
import SignUp from './components/signup/SignUp';
import SideNav from './components/sidenav/SideNav';
import Questions from './components/questions/Questions';
import Tags from './components/tags/Tags';
import Users from './components/users/Users';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/home'  element={<LandingPage />} />
      <Route path='/sidenav' element={<SideNav />} >

      <Route path='/sidenav/users' element={<Users/>} />
      <Route path='/sidenav/tags' element={<Tags />}/>
      <Route path='/sidenav/questions' element={<Questions/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>} />
    </Routes>
    </>
  );
}

export default App;
