function userLogged(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.session.login) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.login;
    }

    next();
}

module.exports = userLogged;