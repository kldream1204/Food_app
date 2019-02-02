import routes from '../routes';
import resModel from '../models/resModel';

export const location = (req, res) => res.render("location", { pageName: "Location" });
export const locationDetail = (req, res) => res.render("locationDetail", { pageName: "LocationDetail" });
export const menu = (req, res) => res.render("menu", { pageName: "Menu" });
export const menuDetail = (req, res) => res.render("menuDetail", { pageName: "MenuDetail" });
export const restaurant = (req, res) => res.render("restaurant", { pageName: "Restaurant" });

export const getResUpload = (req, res) => {
    res.render("resUpload", { pageName: "ResUpload" });
}

export const postResUpload = async (req, res) => {
    const {
        body : {title, description},
        file : {path}
    } = req;
    const restaurants = await resModel.create({
        photo: path,
        title,
        description
    })
    res.redirect(routes.resDetail(restaurants.id));
}

export const resDetail = async (req, res) => {
    const {params:{id}} = req;
    const restaurants = await resModel.findById(id)
    res.render("resDetail", { pageName: "ResDetail", restaurants });
}

export const getResEdit = async (req, res) => {
    const {params:{id}} = req;
    const restaurants = await resModel.findById(id)
    res.render("resEdit", { pageName: "RedEdit", restaurants });
}

export const postResEdit = async (req, res) => {
    const {
        params:{id},
        body: {title, description}
    } = req;
    await resModel.findByIdAndUpdate({_id : id}, {title, description})
    res.redirect(routes.resDetail(id));
}

export const resDelete = async (req, res) => {
    const {
        params:{id}
    } = req;
    await resModel.findByIdAndDelete({_id : id});
    res.redirect(routes.home);
}

export const search = (req, res) => {
    const {query:{search}} = req;
    res.render("search", { pageName: "Search", search });
}