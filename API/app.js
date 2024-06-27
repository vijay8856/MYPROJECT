import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();

//to link router
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import ShipmentRouter from './routes/shipment.router.js';
import Bidrouter from './routes/bid.router.js';
//to overcome cross origin problem
app.use(cors()); 

 
//file data from req
app.use(fileUpload());
//to extract body data from request 
//(POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware for url routing
app.use("/user",UserRouter); 
app.use("/category",CategoryRouter); 
app.use("/subcategory",SubCategoryRouter);
app.use("/shipment",ShipmentRouter);
app.use("/bid", Bidrouter);
app.listen(3002);
console.log("Server invoked at link http://localhost:3002");