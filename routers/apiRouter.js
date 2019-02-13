import express from 'express';
import routes from '../routes';
import { postAddComment, postLocationList, getLocationList } from '../controllers/resController';

const apiRouter = express.Router();

apiRouter.post(routes.addComment, postAddComment);
apiRouter.get(routes.locationList, getLocationList);
apiRouter.post(routes.locationList, postLocationList);

export default apiRouter;