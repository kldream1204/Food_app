import routes from './routes';
import multer from 'multer';

const multerRes = multer({ dest : "uploads/restaurant/"});

export const localsMiddlewares = (req, res, next) => {
    res.locals.routes = routes,
    res.locals.user = {
        id:1
    },
    next()
};

export const uploadRes = multerRes.single("photo");
