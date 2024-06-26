import express from "express";
import { test,updateUser,deleteUser , getUserListing ,getUser} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const UserRouter = express.Router();

UserRouter.get('/test',test);
UserRouter.post('/update/:id',verifyToken,updateUser)
UserRouter.delete('/delete/:id',verifyToken,deleteUser)
UserRouter.get('/listings/:id',verifyToken,getUserListing)
UserRouter.get('/:id',verifyToken,getUser)

export default UserRouter ; 

