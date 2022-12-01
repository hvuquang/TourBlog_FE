import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom'

import LogIn from './components/Screen/LogIn/LogIn';
import Register from './components/Screen/Register/Register';
import Profile from './components/Screen/Profile/Profile';
import Header from './components/Screen/Header/Header';
import CallLogin from './components/callLogin';
import { Provider } from "react-redux";
import store from "./redux/store";
import ForgetPassword from './components/Screen/ForgetPassword/ForgetPassword';
import callLogin from './components/callLogin';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={ <CallLogin/>}/>
        <Route path='/register' element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
