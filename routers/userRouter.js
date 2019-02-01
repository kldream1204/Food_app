import express from 'express';
import routes from '../routes';
import { userDetail, getEditProfile, postEditProfile, getChangePassword, postChangePassword } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), postEditProfile);

userRouter.get(routes.changePassword(),getChangePassword);
userRouter.post(routes.changePassword(), postChangePassword);

export default userRouter;