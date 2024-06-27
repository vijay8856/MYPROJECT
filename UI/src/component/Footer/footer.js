import './footer.css';
import React from 'react';
import {useState,useEffect} from 'react';

function Footer() {

   const [FooterContent ,setFooterContent]=useState();

   useEffect(()=>{
      if (localStorage.getItem("token")!=undefined)
      {
         setFooterContent(<>
         <div class="copyright_2">
               <div class="container_1">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2024-2025 All Rights Reserved. Design by<a> VIJAY DHAKAD </a></p>
                     </div>
                  </div>
               </div>
            </div>
         
         </>)
      }
      else 
      {
         setFooterContent(<>
         
         <div id="footer">
            {/*  footer */}
      <footer>
         <div class="footer bottom_cross1">
            <div class="container">
               <div class="row">
                  <div class="col-md-4">
                     <ul class="location_icon">
                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a> Address : INDORE [M.P.]<br/> VIJAYNAGAR
                        </li>
                        <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>Phone :  7909355257</li>
                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>Email : vijaydhakad8871gmail.com</li>
                     </ul>
                    
                  </div>
                  <div class="col-md-8">
                     <div class="map">
                        <figure><img src="assets/images/map.png" alt="#"/></figure>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2024-2025 All Rights Reserved. Design by<a> VIJAY DHAKAD </a></p>
                     </div>
                  </div>
               </div>
            </div>
         
         </div>
      </footer>
        </div>
         </>)
      }
   })
    return (
 <> 
     {FooterContent}   
 </>
);
}

export default Footer;
