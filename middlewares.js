import routes from './routes';
import multer from 'multer';

const multerRes = multer({ dest : "uploads/restaurant/"});
const multerAvatar = multer({ dest: "uploads/avatar/"});


export const localsMiddlewares = (req, res, next) => {
    res.locals.routes = routes ;
    res.locals.loginUser = req.user || null ;
    next(); 
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    }else {
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    }else {
        res.redirect(routes.home);
    }
}

export const uploadRes = multerRes.single("photo");
export const uploadAvatar = multerAvatar.single("photo");