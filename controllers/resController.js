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
    try {
        const restaurants = await resModel.create({
            photo: path,
            title,
            description,
            creator: req.user.id
        });
        req.user.restaurants.push(restaurants._id);
        req.user.save();
        res.redirect(routes.resDetail(restaurants.id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
    
}

export const resDetail = async (req, res) => {
    const {params:{id}} = req;
    try {
        const restaurants = await resModel.findById(id).populate("creator")
        res.render("resDetail", { pageName: "ResDetail", restaurants });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home)
    }
    
}

export const getResEdit = async (req, res) => {
    const {params:{id}} = req;
    try {
        const restaurants = await resModel.findById(id)
        res.render("resEdit", { pageName: "RedEdit", restaurants });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const postResEdit = async (req, res) => {
    const {
        params:{id},
        body: {title, description}
    } = req;
    try {
        const restaurant = await resModel.findById(id).populate("creator");
        if ( restaurant.creator.id === req.user.id ) {
            await resModel.findByIdAndUpdate({_id : id}, {title, description})
            res.redirect(routes.resDetail(id));
        } else {
            res.redirect(routes.resDetail(id));
        }   
    } catch (error) {
        console.log(error);
        res.redirect(routes.resDetail(id));
    }
}

export const resDelete = async (req, res) => {
    const {
        params:{id}
    } = req;
    try {
        const restaurant = await resModel.findById(id).populate("creator");
        if ( restaurant.creator.id === req.user.id ) {
            await resModel.findByIdAndDelete({_id : id});
            res.redirect(routes.home);
        } else {
            res.redirect(routes.home);
        }
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const search = async (req, res) => {
    const {query:{search}} = req;
    try {
        const restaurants = await resModel.find({title:{ $regex : search , $options: 'i' }})
        res.render("search", { pageName: "Search", search, restaurants });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
    
}