import './service.css';
import React from 'react';



function Service() {

  return (
<>
<div id="content">
        
       {/* service section */}
      <div id="service" class="service">
         <div class="container">
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <div class="titlepage">
                     <h2>Our Services</h2>
                     <p>Standard Shipping: This is the most commonly used shipping option. You can plan to have customer orders delivered within a fixed number of days, like 3-5 days. 
                        <br/><br/>Expedited Shipping: This is a kind of emergency shipping option since it guarantees delivery within 1-3 days. This could be offered at slightly higher prices over standard shipping costs.  
                        <br/><br/>Same-day Shipping: This is one of the high-cost shipping options and should be offered as a premium service. It guarantees delivery on the same day as the day of the order.  
                       <br/> <br/>International Shipping: This shipping service can be offered if you have the processes in place, like compliance with international regulations and customs. 
                       <br/> <br/>Freight Shipping: This method is offered for large, heavy, or bulky products that require special handling and transportation.</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div class="service_main">
                     <div class="service_box blu_colo">
                        <i><img src="assets/images/ser1.png" alt="#"/></i>
                        <h4>FLY ANYWHERE</h4>
                     </div>
                     <div class="service_box yelldark_colo">
                        <i><img src="assets/images/ser2.png" alt="#"/></i>
                        <h4>Cargo service</h4>
                     </div>
                     <div class="service_box yell_colo">
                        <i><img src="assets/images/ser3.png" alt="#"/></i>
                        <h4> COURIER SERVICES</h4>
                     </div>
                     <div class="service_box yelldark_colo">
                        <i><img src="assets/images/ser4.png" alt="#"/></i>
                        <h4>BOX STORAGE</h4>
                     </div>
                     <div class="service_box yell_colo">
                        <i><img src="assets/images/ser5.png" alt="#"/></i>
                        <h4>100% safe</h4>
                     </div>
                  </div>
               </div>
               <div class="col-md-12">
                  <a class="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
      {/* end service section */}
      {/* vehicles section */}
      <section id="vehicles" class="vehicles">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Our Vehicles</h2>
                     <p>Semi trailer.</p>
                     <p>Flatbed freight truck.</p>
                     <p>Step deck.</p>
                     <p>Box truck.</p>
                     <p>Tanker.</p>
                     <p>Ice road trucking .</p>
                  </div>
               </div>
            </div>
         </div>
         <div id="veh" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#veh" data-slide-to="0" class="active"></li>
               <li data-target="#veh" data-slide-to="1"></li>
               <li data-target="#veh" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="row">
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc1.png" alt="#"/></figure>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc2.png" alt="#"/></figure>
                              </div>
                              <h3 class="blac_co">Truck</h3>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc3.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="row">
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc1.png" alt="#"/></figure>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc2.png" alt="#"/></figure>
                              </div>
                              <h3 class="blac_co">Truck</h3>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc3.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="row">
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc1.png" alt="#"/></figure>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc2.png" alt="#"/></figure>
                              </div>
                              <h3 class="blac_co">Truck</h3>
                           </div>
                           <div class="col-md-4">
                              <div class="vehicles_truck">
                                 <figure><img src="assets/images/truc3.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#veh" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a class="carousel-control-next" href="#veh" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <a class="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </section>
      {/* end vehicles section */}
       
      </div>
</>
  );
}

export default Service;
