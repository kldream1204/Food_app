import express from 'express';
import routes from '../routes';
import { home, logout, getJoin, postJoin, getLogin, postLogin } from '../controllers/userController';
import { search } from '../controllers/resController';
import { onlyPublic, onlyPrivate } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);


export default globalRouter;