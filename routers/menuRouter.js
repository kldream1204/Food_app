import express from 'express';
import routes from '../routes';
import { menu, menuDetail } from '../controllers/resController';

const menuRouter = express.Router();

menuRouter.get(routes.menu, menu);
menuRouter.get(routes.menuDetail, menuDetail);

export default menuRouter;
