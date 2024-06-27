import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/Header/header';

import Home from './component/pages/Homecomponent/home';
import Navigation from './component/navigation_bar/nav';
import About from './component/pages/Aboutcomponent/about';
import Register from './component/pages/Registercomponent/register';
import Contact from './component/pages/Contactcomponent/contact';
import Service from './component/pages/Servicecomponent/service';
import Login from './component/pages/Logincomponent/login';
import Logout from './component/pages/Logoutcomponent/logout';
import Footer from './component/Footer/footer';

import Slidebarcm from './component/slidebar/slidebarcm';
import Admin from './component/pages/adminhomecomponent/admin';
import CPAdmin from './component/pages/CPAdmincomponent/CPAdmin';
import EPAdmin from './component/pages/EPAdmincomponent/EPAdmin';
import User from './component/pages/userhomecomponent/user';   
import Viewshipment from './component/pages/viewshipmentcomponent/viewshipment';
import Viewsubcategory from './component/pages/viewsubcategorycomponent/viewsubcategory';
import Manageusers from './component/pages/manageuserscomponent/manageusers';  
import Addcategory from './component/pages/Addcategorycomponent/addcategory';
import Addsubcategory from './component/pages/Addsubcategorycomponent/addsubcategory';
import Addshipment from './component/pages/Addshipmentcomponent/Addshipment';
import VSuser from './component/pages/VSusercomponent/VSuser';
import Viewbid from './component/pages/viewbidcomponent/viewbid';


function App() {
 
  
  return (
   <>
   <Slidebarcm/>
   <Header/>
   
  <Routes>
    
    <Route path ='' element={<Home/>}></Route>
    <Route path ='/about' element={<About/>}></Route>
    <Route path ='/register' element={<Register/>}></Route>
    <Route path ='/login' element={<Login/>}></Route>
    <Route path ='/logout' element={<Logout/>}></Route>
    <Route path ='/service' element={<Service/>}></Route>
    <Route path ='/contact' element={<Contact/>}></Route>
    <Route path ='/admin'   element={<Admin/>}></Route>
    <Route path ='/cpadmin'   element={<CPAdmin/>}></Route>
    <Route path ='/epadmin'   element={<EPAdmin/>}></Route>
    <Route path ='/manageusers'   element={<Manageusers/>}></Route>
    <Route path ='/addcategory'   element={<Addcategory/>}></Route>
    <Route path ='/addsubcategory'   element={<Addsubcategory/>}></Route>
    <Route path ='/addshipment'   element={<Addshipment/>}></Route>
    <Route path ='/user'   element={<User/>}></Route>
    <Route path ='/viewshipment/' element={<Viewshipment/>}></Route>
    <Route path ='/viewsubcategory/:catnm' element={<Viewsubcategory/>}></Route>
    <Route path ='/VSuser/:subcatnm' element={<VSuser/>}></Route>
    <Route path ='/Viewbid/:_id' element={<Viewbid/>}></Route>
    
    
    </Routes>      
  
  <Footer/> </>
   
  );
  
}
export default App;
