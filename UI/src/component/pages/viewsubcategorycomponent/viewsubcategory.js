import './viewsubcategory.css';
import React from 'react';
import  { useState, useEffect } from 'react';
import { _userapiurl,_categoryapiurl,_subcategoryapiurl } from '../../../Api.url';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
function Viewsubcategory() {
  const params =useParams();
   const [scList , setSubCategoryDetails]=useState([]);
   useEffect(() => {
      axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm)
      
        .then((response) => {
         setSubCategoryDetails(response.data);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },);
  return (<>
  <center>
     
   <h1 style={{"color":"black"}}>!!! View Sub Category Here !!!</h1>
   

  
  <br/>
  <div id="main_category" >


  {
                  scList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`} >
                    <div class="category_part" >
                      <img src={`../assets/upload/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
                      <br/>
                      <b>{row.subcatnm}</b>
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
export default Viewsubcategory;
