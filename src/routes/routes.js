import express from 'express';
import AuthController from "../controllers/AuthController/AuthController.js"
import ViewUserListController from "../controllers/ViewUserListController/ViewUserListController.js"
import UpdateUserNameController from "../controllers/UpdateUserNameController/UpdateUserNameController.js"
const router = express.Router();

router.post('/signUp', AuthController.SignUp);
router.get('/viewList', ViewUserListController.ViewUserList);
router.put('/updatetitle/:name', UpdateUserNameController.UpdateUserName);

export default router;
