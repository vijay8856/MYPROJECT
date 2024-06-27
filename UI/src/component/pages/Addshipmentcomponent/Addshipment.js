import './Addshipment.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _shipmentapiurl,_categoryapiurl , _subcategoryapiurl } from '../../../Api.url';

function Addshipment() {

 
   const [file, setFile] = useState();
   const [title , setTitle] = useState();
   const [catName , setCatName] = useState();
   const [subCatName , setSubCatName] = useState();
   const [description , setDescription] = useState();
   const [basecost , setBaseCost] = useState();
   const [output , setOutput] = useState();
   const [ cList , setCategoryDetails ] = useState([]);
   const [ scList , setSubCategoryDetails ] = useState([]);
 
   useEffect(()=>{
     axios.get(_categoryapiurl+"fetch").then((response)=>{
      setCategoryDetails(response.data);    
     }).catch((err)=>{
      console.log(err);
     });   
   });  
 
   const fetchSubCat=(c)=>{
     setCatName(c);
     axios.get(_subcategoryapiurl+"fetch?catnm="+c).then((response)=>{
       setSubCategoryDetails(response.data);    
     }).catch((err)=>{
       console.log(err);
     });
   };
 
   const handleChange=(event)=>{
     setFile(event.target.files[0])
   }
 
   const handleSubmit=(event)=>{
     var formData = new FormData();
     formData.append('title', title);
     formData.append('catnm', catName);
     formData.append('subcatnm', subCatName);
     formData.append('description', description);
     formData.append('basecost', basecost);
     formData.append('caticon', file);
     const config = {
         'content-type': 'multipart/form-data'
     };
     axios.post(_shipmentapiurl+"save", formData, config).then((response) => {
       setTitle("");
       setCatName("");
       setSubCatName("");
       setDescription("");
       setBaseCost("");
       setOutput("Shipment Added Successfully....");
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
      <center>
         <div class="container">
         <div class="col-md-6">
         <h1>Add Shipment Here!!!</h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catName} onChange={e => fetchSubCat(e.target.value)} >
      <option>Select Category</option>
      {
       cList.map((row)=>(
        <option>{row.catnm}</option>  
       )) 
    }
      </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <select class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} >
      <option>Select SubCategory</option>
      {
       scList.map((row)=>(
        <option>{row.subcatnm}</option>  
       )) 
    }
      </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="description">Description:</label>
    <input type="text" class="form-control" value={description} onChange={e => setDescription(e.target.value)} />
  </div>
  
  <br/>
  <br/>
  <div class="form-group">
    <label for="basecost">Basecost:</label>
    <input type="text" class="form-control" value={basecost} onChange={e => setBaseCost (e.target.value)} />
  </div>
  
  <br/>
  <div class="form-group">
    <label for="file">Shipment Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">AddShipment Category</button>
  <br/><br/>
</form>      
               
             
                  
                  
                  
 
                     
                 
                 </div> 
               </div>
               </center>
            </div>
            
         </div>
      
      
</>
  );
}

export default Addshipment;
