import express from 'express';
import routes from '../routes';
import { userDetail, getEditProfile, postEditProfile, getChangePassword, postChangePassword, getMe } from '../controllers/userController';
import { uploadAvatar, onlyPublic, onlyPrivate } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.me, onlyPrivate, getMe);

userRouter.get(routes.userDetail(), userDetail);

userRouter.get(routes.editProfile(), onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile(), onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword(), onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword(), onlyPrivate, postChangePassword);

export default userRouter;