function adminRoutes(req, res, next) {

    if (!res.locals.admin) {
        res.redirect("/products")
    }

    next();
}

module.exports = adminRoutes;