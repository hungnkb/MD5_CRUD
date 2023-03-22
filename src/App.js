import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Table2 from './components/user/table/table2.user';
import NavbarHeader from './components/header/navbar.header';
import Table from './components/user/table/table.user';
import Register from './components/user/register/register';
import Login from './components/user/login/login';
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import axios from 'axios';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    let tokenLocal = localStorage.getItem('token');
    console.log(token);
    if (tokenLocal == token) {
      setIsLogin(true)
    } else {
      setIsLogin(false);
    }
  }, [isLogin])

  let checkLogin = data => {
    setToken(data)
  }

  useEffect(() => {
    let getUser = async () => {
      let tokenLocal = localStorage.getItem('token');
      let userData = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/auth/get-user',
        data: {token: tokenLocal},
      });
      if (userData) {
        setUser(userData);
      } else {
        setUser(null);
      }
    }
    getUser()
  }, [])

  return (
    <>
      <NavbarHeader />
      <Routes>
        <Route path='/register' element={ user.data ? <Navigate to='/' /> : <Register />} />
        <Route path='/login' element={user.data ? <Navigate to='/' /> : <Login />} />
        <Route path='/table2' element={<Table2 />} />
        <Route path='/' element={<Table2 />} />
      </Routes>
    </>
  );
}

export default App;
