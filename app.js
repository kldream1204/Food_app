import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';
import globalRouter from './routers/globalRouter';
import locationRouter from './routers/locationRouter';
import menuRouter from './routers/menuRouter';
import resRouter from './routers/resRouter';
import userRouter from './routers/userRouter';
import {localsMiddlewares} from './middlewares'

const app =express();

//Middlewares
app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(localsMiddlewares)

//Rourters
app.use(routes.home, globalRouter);
app.use(routes.location, locationRouter);
app.use(routes.menu, menuRouter);
app.use(routes.restaurant, resRouter);
app.use(routes.user, userRouter);

export default app;