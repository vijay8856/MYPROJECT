import './EPAdmin.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../../Api.url';
import { useNavigate } from 'react-router-dom';
function EPAdmin() {
   const navigate=useNavigate();
   const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput]=useState();
   
   useEffect(()=>{
      axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
         setName(response.data[0].name)
         setEmail(response.data[0].email)
        setMobile(response.data[0].mobile)
         setAddress(response.data[0].address)
         setCity(response.data[0].city)
         setGender(response.data[0].gender)
;
      }).catch((error)=>{
      console.log(error);
      });
         },[]);

      const handleSubmit=()=>{
         let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}}
         axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
           navigate("/epadmin")
         }).catch((error)=>{
         console.log(error);
         });
      }   
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
                     <h2>Edit Profile</h2>
                     <p> WELLCOME ADMIN
                     </p>
                     <font color="blue"> {output}</font>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text"  value={name} onChange={ e => setName(e.target.value) } />
  </div>
  
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email"  value={email} onChange={ e => setEmail(e.target.value) } />
  </div>
  
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text"  value={mobile} onChange={ e => setMobile(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea value={address} onChange={ e => setAddress(e.target.value) } rows="5" ></textarea>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select  value={city} onChange={ e => setCity(e.target.value) } >
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
    </select>
  </div>
  <div class="form-group5">
    <label for="gender">Gender:</label>
    
    Male <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={ e => setGender(e.target.value) } />
    
    Female <input type="radio" name="gender" value="female"checked={gender==="female"} onChange={ e => setGender(e.target.value) } />
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
</form>
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

export default EPAdmin;
