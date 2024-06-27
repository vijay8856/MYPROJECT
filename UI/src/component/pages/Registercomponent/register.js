import './register.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../../Api.url';

function Register() {

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput]=useState();
  const handleSubmit=()=>{
    var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
    axios.post(_userapiurl+"save",userDetails).then((response)=>{
      alert("registration sucessfull....")
      setOutput("");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((error)=>{
      alert("Registration failed.....");    
    });
  };

  return (
<>
    {/* about section */}
  
    <section class="about_section">
      <div class="container">
        
          
            <div class="detail-box">
<br/>
<h1>Register Here!!!</h1>

<br/>

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
    <label for="pwd">Password:</label>
    <input type="password"  value={password} onChange={ e => setPassword(e.target.value) } />
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
    
    Male <input type="radio" name="gender" value="male" onChange={ e => setGender(e.target.value) } />
    
    Female <input type="radio" name="gender" value="female" onChange={ e => setGender(e.target.value) } />
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
</form>
<br/>
            </div>
          </div>
        
     
    </section>
  
    {/* end about section */}

</>

  );
}

export default Register;