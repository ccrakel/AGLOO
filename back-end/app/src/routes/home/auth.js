"use strict";

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // console.log(req.body.token);
    const token = req.body.token;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return res.json({
            success: true,
            id: decoded.id,
            name: decoded.name
        });
    } catch (err) {
        return res.json({ success: false });
    }
};

module.exports = {
    auth,
};
