import './about.css';
import React from 'react';

function about() {
  return (
<>
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
                     <h2>About Us</h2>
                     <p> Since the world of shipping and fulfillment can seem complex when you’re not familiar with it, we’ve got an overview of everything you’ll need to know to make the best choice for your business.
                     </p>
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

export default about;
