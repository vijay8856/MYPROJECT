import './addcategory.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {  _categoryapiurl } from '../../../Api.url';

function Addcategory() {
   const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [output , setOutput] = useState();

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
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
                           <figure><img src="assets/images/about.png" alt="#" /></figure>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="titlepage">
                           <h2>Add Category Here </h2>
                           <p> WELLCOME ADMIN
                           </p>
                           <font style={{ "color": "blue" }} >{output}</font>
                           <form>
                              <div class="form-group">
                                 <label for="catnm">Category Name:</label>
                                 <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                              </div>
                              <br />
                              <div class="form-group">
                                 <label for="file">Category Icon:</label>
                                 <input type="file" class="form-control" onChange={handleChange} />
                              </div>
                              <br />
                              <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
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

export default Addcategory;
