import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import NewProject from './components/pages/NewProject'
import UserLogout from './components/auth/UserLogout'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Project from './components/pages/Project';
import UserRegister from './components/auth/UserRegister';
import UserLogin from './components/auth/UserLogin';
import RecoveryPassword from './components/auth/RecoveryPassword';
import NewPassword from './components/auth/NewPassword';
import NewCategory from './components/project/NewCategory';


function App() {
  const userValue = 'logado'
  const userAuth = sessionStorage.setItem('userToken', userValue)
  console.log(userValue)
  
  if (userAuth === 'logado') {
    return (
        
      <Router>
          <Routes>
            <Route exact  path="*" element={<UserLogin />} />
            <Route exact  path="/userlogin" element={<UserLogin />} />
            <Route exact  path="/userregister" element={<UserRegister />} />
            <Route exact  path="/recoverypassword" element={<RecoveryPassword />} />
          </Routes>
    </Router>
    )

  }  else {

 
    return (
    <Router>
      <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact  path= "/" element={<Home />} />
            <Route exact  path= "*" element={<Home />} />
            <Route exact  path= "/projects" element={<Projects />} />
            <Route exact  path="/profile" element={<Profile />} />
            <Route exact  path="/userlogout" element={<UserLogout />} />
            <Route exact  path="/newproject" element={<NewProject />} />
            <Route exact  path="/project/:id" element={<Project />} />
            <Route exact  path="/newpassword" element={<NewPassword />} />
            <Route exact  path="/userregister" element={<UserRegister />} />
            <Route exact  path="/recoverypassword" element={<RecoveryPassword />} />
            <Route exact  path="/newcategory" element={<NewCategory />} />
          </Routes>
        </Container>
      <Footer/>
    </Router>
  );
}
}

export default App;
