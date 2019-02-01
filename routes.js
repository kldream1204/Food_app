//Home
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit";
const CHANGE_PASSWORD = "/:id/change-password";

//Restaurant
const RESTAURANT = "/res";
const RESTAURANT_UPLOAD = "/upload";
const RESTAURANT_DETAIL = "/:id";
const RESTAURANT_EDIT = "/:id/edit";
const RESTAURANT_DELETE = "/:id/delete";

//Location
const LOCATION = "/location";
const LOCATION_DETAIL = "/:id";

//Menu 
const MENU = "/menu";
const MENU_DETIAIL = "/:id";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    user : USER,
    userDetail : (id) => {
        if (id) {
            return `/user/${id}`;
        }else {
            return USER_DETAIL;
        };
    },
    editProfile : (id) => {
        if (id) {
            return `/user/${id}/edit`
        }else {
            return EDIT_PROFILE
        }
    },
    changePassword : (id) => {
        if (id) {
            return `/user/${id}/change-password`
        }else {
            return CHANGE_PASSWORD
        }
    },
    restaurant : RESTAURANT,
    resUpload : RESTAURANT_UPLOAD,
    resDetail : (id) => {
        if (id) {
            return `/res/${id}`;
        }else {
            return RESTAURANT_DETAIL;
        };
    },
    resEdit : RESTAURANT_EDIT,
    resDelete : RESTAURANT_DELETE,
    location : LOCATION,
    locationDetail : LOCATION_DETAIL,
    menu : MENU,
    menuDetail : MENU_DETIAIL
};

export default routes;