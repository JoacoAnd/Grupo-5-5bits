function authMiddleware(req, res, next) {
    if (!req.session.login) {
        res.redirect('/login');
    }

    next();
}

module.exports = authMiddleware;