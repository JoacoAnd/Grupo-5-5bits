function adminMiddleware(req, res, next) {
    res.locals.admin = false;
    if(res.locals.userLogged && res.locals.isLogged){
        if (res.locals.userLogged.rol == "admin") {
            res.locals.admin = true;
        }
    }

    next();
}

module.exports = adminMiddleware;