import './viewshipment.css';
import React from 'react';
import  { useState, useEffect } from 'react';
import { _categoryapiurl } from '../../../Api.url';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Viewshipment() {
   const [cList , setCategoryDetails]=useState([]);
   useEffect(() => {
      axios.get(_categoryapiurl+"fetch")
      
        .then((response) => {
         setCategoryDetails(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },);
  return (<>
  <center>
    <br></br>
     
   <h1 style={{"color":"black"}}>!!!! VIEW SHIPMENT HERE !!!!</h1>
   

  
  <br/>
  <div id="main_category" >


  {
      cList.map((row)=>(
        <Link to={`/viewsubcategory/${row.catnm}`}>
         <div class ="part_category">
         <img src={`assets/upload/caticons/${row.caticonnm}`}/>
         <br/>
         <b>{row.catnm}</b>
         </div>
         </Link>
      ))
   }
 </div>
  <br/>
  <br/>
  <br/>
  <br/>
  </center>

  </>)
  }
export default Viewshipment;
