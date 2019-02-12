import express from 'express';
import routes from '../routes';
import { postAddComment, postLocationList } from '../controllers/resController';

const apiRouter = express.Router();

apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.locationList, postLocationList);

export default apiRouter;