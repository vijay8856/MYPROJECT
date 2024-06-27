import './header.css';
import {motion} from 'framer-motion';

import {useState ,useEffect} from 'react'
function Header() {
  
   const [HeaderContent , setHeaderContent] = useState();

   useEffect(()=>{
      if(localStorage.getItem("role")=="admin"){
         setHeaderContent(<></>)
      }
      else if (localStorage.getItem("role")=="user"){
         setHeaderContent(<></>)
      }
      else{
         setHeaderContent(<> <section class="banner_main">
             <div id="banner1"class="carousel slide banner_slide" data-ride="carousel"> 
                     <ol class="carousel-indicators">
                  <li data-target="#banner1" data-slide-to="0" class="active"></li>
                  <li data-target="#banner1" data-slide-to="1"></li>
                  <li data-target="#banner1" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container-fluid">
                        <div class="carousel-caption">
                           <div class="row">
                              <div class="col-md-7 col-lg-5">
                                 <div class="text-bg">
                                    <h1>BEST SHIPPING PLATFORM</h1>
                                    <span>Your Cargo, Our Commitment
                                       Beyond Boundaries, Onboard Reliability
                                       Delivering the World to Your Doorstep</span>
                                
                                 </div>

                              </div>
                              
                       

                              <div class="col-md-12 col-lg-7">
                                 <div class="row">
                                    <div class="col-md-6">
                                       <div class="ban_track">
                                          <figure><img src="assets/images/track.png" alt="#"/></figure>
                                       </div>
                                    </div>
                                   
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container-fluid">
                        <div class="carousel-caption">
                           <div class="row">
                              <div class="col-md-7 col-lg-5">
                                 <div class="text-bg">
                                    <h1>BEST SHIPPING PLATFORM</h1>
                                    <span>Your Cargo, Our Commitment
                                       Beyond Boundaries, Onboard Reliability
                                       Delivering the World to Your Doorstep</span>
                                       
   
                                 </div>
                              </div>
                              <div class="col-md-12 col-lg-7">
                                 <div class="row">
                                    <div class="col-md-6">
                                       <div class="ban_track">
                                          <figure><img src="assets/images/track.png" alt="#"/></figure>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container-fluid">
                        <div class="carousel-caption">
                           <div class="row">
                              <div class="col-md-7 col-lg-5">
                                 <div class="text-bg">
                                    <h1>BEST SHIPPING PLATFORM</h1>
                                  <span> Cargo, Our Commitment
                                       Beyond Boundaries, Onboard Reliability
                                       Delivering the World to Your Doorstep</span>
                                      
                                 </div>
                              </div>
                              <div class="col-md-12 col-lg-7">
                                 <div class="row">
                                    <div class="col-md-6">
                                       <div class="ban_track">
                                          <figure><img src="assets/images/track.png" alt="#"/></figure>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* role="button" to add > button-------------------^ here */}
               <a class="carousel-control-prev" href="#banner1"  data-slide="prev">
               {/* <i class="fa fa-angle-left" aria-hidden="true"></i> */}
               </a>
               <a class="carousel-control-next" href="#banner1"data-slide="next">
               {/* <i class="fa fa-angle-right" aria-hidden="true"></i> */}
               </a> 
            </div>
         </section>

               <div className='rajw'>
                 
               </div>
               <div className='contain'>
               <div className='box1'>
               <img className='center2' src='https://tse2.mm.bing.net/th?id=OIP.A3QWlEHfpmNBKKWF4CrXVAHaHY&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Connecting Your World, <br/>One Shipment at a Time."  </h1>
        
               </div>
               
               <div className='box2'>
               <img className='center2' src='https://tse1.mm.bing.net/th?id=OIP.6z15ctsi9MfccmX90w5fZAHaHa&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Ship Smarter, Not Harder."  </h1>
        
               </div>
               <div className='box2'>
               <img className='center2' src='https://tse3.mm.bing.net/th?id=OIP.xhXPxLqpyxLBk-ia9mxdcAHaHa&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'>"Where Speed Meets Precision." </h1>
        
               </div>
               <div className='box2'>
               <img className='center2' src='https://tse2.mm.bing.net/th?id=OIP.cjLCijlSVtTuqmVXS71SXgHaDD&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Seamless Shipping, Simplified." </h1>
        
               </div>
               <div className='box2'>
               <img className='center2' src='https://tse2.mm.bing.net/th?id=OIP.Ud_bsGQ7D1_gvKSKwX0TTAHaFL&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Navigate Your Shipping Needs." </h1>
        
               </div>
               <div className='box2'>
               <img className='center2' src='https://tse1.mm.bing.net/th?id=OIP.lMB0hWmf1NlPL8Y8bv7zCgHaFI&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Delivering Beyond Borders." </h1>
        
               </div>
               <div className='box2'>
               <img className='center2' src='https://tse4.mm.bing.net/th?id=OIP.btal6QolAcdV01ktzyQeTgAAAA&pid=Api&P=0&h=180'>
             
               </img>  <br></br><h1 className='center1'> "Fast. Reliable. Everywhere."  </h1>
        
               </div>
               </div>
         {/* end banner */}
        </> ) 
      }
   })
    return(
       <>{HeaderContent}
       </>
    )
}

export default Header