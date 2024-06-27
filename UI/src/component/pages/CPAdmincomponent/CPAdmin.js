import './CPAdmin.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../../Api.url';
import { useNavigate } from 'react-router-dom';
function CPAdmin() {
   const navigate = useNavigate();
   const[output,setOutput]=useState();
   const [opassword,setOldPassword]=useState();
   const [npassword,setNewPassword]=useState();
   const [cnpassword,setConfirmNewPassword]=useState();
   const handleSubmit=()=>{
     axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then(()=>{
      if(npassword==cnpassword){
         let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}}
         axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            alert ("password changed successfully ,please login again")
            navigate("/logout")
         }).catch((error)=>{
         console.log(error);
         });

      }else{
          setOutput("new&confirm password is not match");
          setNewPassword("");
          setConfirmNewPassword("");
      }
     }).catch()
   };
  return (
<>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div id="content">
        
          {/* about section */}
      <div id="about" class="about ">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-6">
                  <div class="about_right">
                     <figure><img src="assets/images/about.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="titlepage">
                     <h2>Change Password Here!!!!</h2>
                     <p> WELLCOME ADMIN
                     </p> 
                     <div>
                     <font color="blue"> {output}</font>
<form >

  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password"  value={opassword} onChange={ e => setOldPassword(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="npwd"> New Password:</label>
    <input type="password"  value={npassword} onChange={ e => setNewPassword(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password"  value={cnpassword} onChange={ e => setConfirmNewPassword(e.target.value) } />
  </div>


    <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
   
  

  {/* <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a >password?</a></span>
  </div> */}
</form>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* about section */}
      </div>
</>
  );
}

export default CPAdmin;
