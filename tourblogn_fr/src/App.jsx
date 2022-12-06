
import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom'


import Register from './components/Screen/Register/Register';
import Profile from './components/Screen/Profile/Profile';
import Header from './components/Screen/Header/Header';
import DetailPost from './components/Screen/DetailPost/DetailPost';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css'
import ForgetPassword from './components/Screen/ForgetPassword/ForgetPassword';
import AddPost from './components/AddPost/AddPost';
import Post from './components/Post/Post';
import LogIn from './components/Screen/LogIn/LogIn';
//import DetailPost from './components/Screen/DetailPost/DetailPost';

function App() {


  return (

    <div id='App'>
    
      <Header />
   
      
      <Routes>
      <Route path='/forgetPassword' element={<ForgetPassword/>} />
        <Route path='/' element={<Post/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/detailpost' element={<DetailPost/>} />
        <Route path='/addpost' element={<AddPost/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
       
      </Routes>
     
    </div>
   

  );
}

export default App;
