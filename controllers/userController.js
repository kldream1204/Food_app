import routes from '../routes';
import resModel from '../models/resModel';

export const home = async (req, res) => {
    const restaurants = await resModel.find({}).sort({_id:-1});
    try {
        res.render("home", { pageName: "Home" ,restaurants});
    }catch {
        res.render("home", { pageName: "Home" ,restaurants: [] });
    }
}
    
export const getJoin = (req, res) => {
    res.render("join", { pageName: "Join"});
}

export const postJoin = (req, res) => {
    console.log(req);
    const {body:{ id, name, password1, password2}} = req;
    if (password1 !== password2) {
        res.redirect(routes.join)
    }else {
        res.redirect(routes.login)
    }
}

export const getLogin = (req, res) => {
    res.render("login", { pageName: "Login" });
}

export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    res.redirect(routes.home);
}

export const userDetail = (req, res) => res.render("userDetail", { pageName: "UserDetail" });

export const getEditProfile = (req, res) => {
    res.render("editProfile", { pageName: "EditProfile" });
}

export const postEditProfile = (req, res) => {
    res.redirect(routes.userDetail(1));
}

export const getChangePassword = (req, res) => {
    res.render("changePassword", { pageName: "ChangePassword" });
}

export const postChangePassword = (req, res) => {
    res.redirect(routes.userDetail(1));
}