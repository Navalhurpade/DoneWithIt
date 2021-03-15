const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const { User } = require("../database/model");

router.post('/profile-image', auth, (req, res) => {
    User.findById(req.user.userId, (err, doc) => {
        if(err) throw err;
        if(!doc) return res.status(422).send({ error: "User does not exist" });

        doc.profileImage = req.body.image;
        doc.save(error => {
            if(error) throw err;

            const token = jwt.sign({
                userId: doc._id,
                userImage: doc.profileImage,
                name: doc.name,
                email: doc.email
            }, process.env.SECRET);

            return res.end(token);
        });
    });
});

module.exports = router;