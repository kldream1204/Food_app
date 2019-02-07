import express from 'express';
import routes from '../routes';
import { restaurant, resDetail, resDelete, getResUpload, postResUpload, getResEdit, postResEdit } from '../controllers/resController';
import { uploadRes, onlyPrivate } from '../middlewares';

const resRouter = express.Router();

resRouter.get(routes.restaurant, restaurant);

resRouter.get(routes.resUpload, onlyPrivate, getResUpload);
resRouter.post(routes.resUpload, uploadRes, onlyPrivate, postResUpload);

resRouter.get(routes.resDetail(), resDetail);

resRouter.get(routes.resEdit(), onlyPrivate, getResEdit);
resRouter.post(routes.resEdit(), onlyPrivate, postResEdit);

resRouter.get(routes.resDelete(), onlyPrivate, resDelete);

export default resRouter;