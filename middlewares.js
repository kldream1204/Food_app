import routes from './routes'

export const localsMiddlewares = (req, res, next) => {
    res.locals.routes = routes,
    res.locals.user = {
        id:1
    },
    next()
}