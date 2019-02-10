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
import "./passport";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";
import apiRouter from "./routers/apiRouter";

dotenv.config()


const app =express();

const CookieStore = connectMongo(session);

//Middlewares
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); 
app.use("/static", express.static("static"))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_USER,
    store: new CookieStore({mongooseConnection: mongoose.connection}),
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddlewares);

//Rourters
app.use(routes.home, globalRouter);
app.use(routes.location, locationRouter);
app.use(routes.menu, menuRouter);
app.use(routes.restaurant, resRouter);
app.use(routes.user, userRouter);
app.use(routes.api, apiRouter);


export default app;