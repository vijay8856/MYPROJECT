
import "./slidebarcmp.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Auth from '../AuthComponent/Auth'


function Slidebarcm() {


  const [navbarVisible, setNavbarVisible] = useState(false);

  // Function to toggle visibility of the navbar
  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  const [SlideContent, setSlideContent] = useState();

  useEffect(() => {
    if (localStorage.getItem("role") == "admin") {
      setSlideContent(<> <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#0f98f8"}}>
        <div class="container-fluid">
          <a class="navbar-brand" >Navbar</a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">

                <a class="nav-link active"></a>
              </li>
              <li ><Link to="/admin">AdminHome</Link ></li>
              <li ><Link to="/addcategory">Addcategory</Link ></li>
              <li ><Link to="/addshipment">Addshipment</Link ></li>
              <li ><Link to="/addsubcategory">Addsubcategory</Link ></li>
              <li><Link to="/manageusers">Manage users</Link></li>
              <li><Link to="/cpadmin">Change Password</Link></li>
              <li><Link to="/epadmin">Edit Profile</Link></li>



              <li><a><Link to="/logout">Logout</Link></a></li>
              <li><a>
                {localStorage.getItem("email")}
              </a>
              </li>


            </ul>

          </div>
        </div>
      </nav>


      </>)
    }
    else if (localStorage.getItem("role") == "user") {
      setSlideContent(<> <nav >
        
          <div id="navbar1">
          
            <li><a><Link to="/user">USER HOME- </Link></a></li>
            <li><Link to="/viewshipment">VIEW SHIPMENT-</Link></li>
            <li><Link to="/logout">LOGOUT-</Link></li>
           
                {localStorage.getItem("email")}
              
            </div>

       
        
      </nav>


      </>)
    }
    else {
      setSlideContent(<> <header>
           
        <div className="header">
       
          <div className="container-fluid">
          <h1 className="logo2">Quick Shipping </h1>
            <div className="row">


            </div>

            <div className="right_button">
           
              <button className="openbtn" onClick={toggleNavbar}><img src="assets/images/menu_icon.png" alt="Menu" /> </button>
              
            {/* <h2>Menu</h2> */}
            </div>
          </div>
        </div>



        {/* Render the navbar based on navbarVisible state */}
        {navbarVisible && (
          <nav className="navbar navbar-inverse" style={{backgroundColor:"#0f98f8"}}>
            <div className="container-fluid">
              <div className="navbar-header">

              </div>
              <ul className="nav navbar-nav">
                <br /><br /><br />
                <li><a><Link to="/">Home</Link></a></li><br />
                <li><a><Link to="/about">About</Link></a></li><br />
                <li><a><Link to="/service">Service</Link></a></li><br />
                <li><a><Link to="/register">Register</Link></a></li><br />
                <li><a><Link to="/login">Login</Link></a></li>
              </ul>
            </div>
          </nav>
        )}
      </header>
      </>)


      // State to manage visibility of the navbar

    };
  });

  return (<>
    <Auth />
    {SlideContent} </>
  );
};


export default Slidebarcm;


