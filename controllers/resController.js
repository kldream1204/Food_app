import routes from "../routes";

export const location = (req, res) => res.render("location", { pageName: "Location" });
export const locationDetail = (req, res) => res.render("locationDetail", { pageName: "LocationDetail" });
export const menu = (req, res) => res.render("menu", { pageName: "Menu" });
export const menuDetail = (req, res) => res.render("menuDetail", { pageName: "MenuDetail" });
export const restaurant = (req, res) => res.render("restaurant", { pageName: "Restaurant" });

export const getResUpload = (req, res) => {
    res.render("resUpload", { pageName: "ResUpload" });
}

export const postResUpload = (req, res) => {
    res.redirect(routes.resDetail(1));
}

export const resDetail = (req, res) => res.render("resDetail", { pageName: "ResDetail" });
export const resEdit = (req, res) => res.render("resEdit", { pageName: "RedEdit" });
export const resDelete = (req, res) => res.render("resDelete", { pageName: "RedDelete" });

export const search = (req, res) => {
    const {query:{search}} = req;
    res.render("search", { pageName: "Search", search });
}