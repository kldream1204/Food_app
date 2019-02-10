import express from 'express';
import routes from '../routes';
import { postAddComment } from '../controllers/resController';

const apiRouter = express.Router();

apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;