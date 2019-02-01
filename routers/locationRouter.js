import express from 'express';
import routes from '../routes';
import { location, locationDetail } from '../controllers/resController';

const locationRouter = express.Router();

locationRouter.get(routes.location, location);
locationRouter.get(routes.locationDetail, locationDetail);

export default locationRouter;