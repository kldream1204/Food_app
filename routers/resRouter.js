import express from 'express';
import routes from '../routes';
import { restaurant, resDetail, resEdit, resDelete, getResUpload, postResUpload } from '../controllers/resController';

const resRouter = express.Router();

resRouter.get(routes.restaurant, restaurant);

resRouter.get(routes.resUpload, getResUpload);
resRouter.post(routes.resUpload, postResUpload);

resRouter.get(routes.resDetail(), resDetail);
resRouter.get(routes.resEdit, resEdit);
resRouter.get(routes.resDelete, resDelete);

export default resRouter;