import express from 'express';
import routes from '../routes';
import { restaurant, resDetail, resDelete, getResUpload, postResUpload, getResEdit, postResEdit } from '../controllers/resController';
import { uploadRes } from '../middlewares';

const resRouter = express.Router();

resRouter.get(routes.restaurant, restaurant);

resRouter.get(routes.resUpload, getResUpload);
resRouter.post(routes.resUpload, uploadRes, postResUpload);

resRouter.get(routes.resDetail(), resDetail);

resRouter.get(routes.resEdit(), getResEdit);
resRouter.post(routes.resEdit(), postResEdit);

resRouter.get(routes.resDelete(), resDelete);

export default resRouter;