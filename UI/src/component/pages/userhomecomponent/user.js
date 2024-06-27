import './user.css';
import React from 'react';

function user() {
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
                     <h2>User page</h2>
                     <p> WELLCOME TO USER PAGE  </p>
                     <a class="readmore" href="#">Read More</a>
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

export default user;
