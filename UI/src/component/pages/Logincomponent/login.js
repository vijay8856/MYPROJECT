import './login.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../../Api.url';
import {useNavigate} from 'react-router-dom';
function Login() {
  const navigate =useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput]=useState(); 
  const handleSubmit=()=>{
    var userDetails={"email":email,"password":password,};
    axios.post(_userapiurl+"login",userDetails).then((response)=>{
      setOutput("User registered successfully.....");
     console.log(response.data);
     var users = response.data.userDetails;
     localStorage.setItem("_id",users._id);
     localStorage.setItem("name",users.name);
     localStorage.setItem("email",users.email);
     localStorage.setItem("mobile",users.mobile);
     localStorage.setItem("address",users.address);
     localStorage.setItem("city",users.city);
     localStorage.setItem("gender",users.gender);
     localStorage.setItem("info",users.info);
     localStorage.setItem("role",users.role);
     localStorage.setItem("token",response.data.token);
     
     users.role=="admin"?navigate("/admin"):navigate("/user");
     
    }).catch((error)=>{
      setOutput("invalid user ")
      setEmail("");
      setPassword("");
    });
  };
return(
<>

<font color="blue" > {output}</font>
<form >
<div class="form-group">
    <label for="email">Email address:</label>
    <input type="email"  value={email} onChange={ e => setEmail(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password"  value={password} onChange={ e => setPassword(e.target.value) } />
  </div>


    <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
   
  

  {/* <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a >password?</a></span>
  </div> */}
</form>
    </>
  );
}

export default Login;
