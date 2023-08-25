import UserController from "../controller/userController.js";
import { Router } from "express";


const userController=new UserController();
const router=Router();

router.post('/add',userController.addUser);
router.get('/users',userController.getUsers);
router.get('/user/:id',userController.getUser);
router.put('/update/:id',userController.updateName);
router.delete('/delete/:id',userController.deleteUser);


export default router;