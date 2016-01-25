function index(req, res, next) {
    res.json({ ok: Date.now() });
}

module.exports = index;
