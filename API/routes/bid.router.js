import express from 'express';
const router = express.Router();

//to link controller
import * as bidController from '../controller/bid.controller.js'; 

router.post("/save",bidController.save);

router.post("/login",bidController.login);

router.get("/fetch",bidController.fetch);

router.delete("/delete",bidController.deleteUser);

router.patch("/update",bidController.updateUser);

export default router;