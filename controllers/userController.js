import routes from '../routes';
import resModel from '../models/resModel';
import userModel from "../models/userModel";
import passport from "passport";

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

export const postJoin = async (req, res, next) => {
    const {
        body:{ ID, name, password, password2}
    } = req;
    try {
        if (password !== password2) {
            res.status(400);
            res.redirect(routes.join)
        }else {
            try {
                const user = await userModel({
                    ID,
                    name
                });
                await userModel.register(user, password);
                next();
            } catch (error) {
                console.log(error),
                res.redirect(routes.join)
            }
        }
    } catch (error) {
        console.log(error);
        res.redirect(routes.join);
    }
    
}

export const getLogin = (req, res) => {
    res.render("login", { pageName: "Login" });
}

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
})

export const logout = (req, res) => {
    req.logout()
    res.redirect(routes.home);
}

export const getMe = (req, res) => {
    const user = req.user;
    res.render("userDetail", { pageName: "UserDetail", user });
}

export const userDetail = async (req, res) => {
    const {params:{id}} = req;
    try {
    const user = await userModel.findById(id);
    res.render("userDetail", { pageName: "UserDetail", user });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getEditProfile = (req, res) => {
    const user = req.user;
    res.render("editProfile", { pageName: "EditProfile" ,user});
}

export const postEditProfile = async (req, res) => {
    const {params:{id}} = req;
    const {
        body:{name},
        file
    } = req;
    try {if (req.user.id === id) {
        await userModel.findByIdAndUpdate(id, {
            avatarUrl: file ? file.path : req.user.avatarUrl,
            name
        })
    } else {

    }} catch (error) {
        console.log(error)
    }
    res.redirect(`/user/${routes.me}`);
}

export const getChangePassword = (req, res) => {
    const user = req.user;
    res.render("changePassword", { pageName: "ChangePassword", user });
}

export const postChangePassword = async (req, res) => {
   const {
       body:{oldPassword, newPassword, newPassword2}
   } = req;
   try {
    if (newPassword === newPassword2) {
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(`/user/${routes.me}`);     
    } else {
         res.redirect(routes.home);
    }
   } catch (error) {
       console.log(error);
       res.redirect(routes.home);
   }
   
}