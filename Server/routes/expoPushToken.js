const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { User } = require("../database/model");

router.post('/', auth, (req, res) => {
    User.findById(req.user.userId, async (err, docs) => {
        if(err) throw err;
        if(!docs) return res.status(422).send({ error: "User does not exist" });

        docs.expoPushToken = req.body.token;
        await docs.save();
        res.status(201).send("Sucessfully added push token");
    });
});

module.exports = router;