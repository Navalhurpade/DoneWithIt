const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { Message, User } = require("../database/model");

router.get('/', auth, (req, res) => {
    Message.find({ to: req.user.userId }, (err, docs) => {
        if(err) throw err;
        if(!docs) return res.send("No Messages");

        return res.json(docs);
    });
});

module.exports = router;