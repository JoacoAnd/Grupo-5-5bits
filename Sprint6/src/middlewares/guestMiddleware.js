function guestMiddleware(req, res, next) {
    if (req.session.login) {
        res.redirect('/perfil');
    }

    next();
}

module.exports = guestMiddleware;