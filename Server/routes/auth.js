require('dotenv').config();
const express = require('express');
const router = express.Router();
const argon2 = require('../util/password');
const jwt = require('jsonwebtoken');
const { User } = require('../database/model');

router.post('/', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, async (err, docs) => {
        if(err) throw err;
        if(!docs) return res.status(422).send({ error: "User does not exist" });

        const match = await argon2.password_verify(docs.password, password);

        if(!match) return res.status(409).send({ error: "Incorrect password" });

        const token = jwt.sign({
            userId: docs._id,
            userImage: docs.profileImage,
            name: docs.name,
            email
        }, process.env.SECRET);

        return res.end(token); 
    });
});

router.post('/register', async (req, res) => {
    const hashedPassword = await argon2.password_hash(req.body.password);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    User.findOne({ email: req.body.email }, (err, docs) => {
        if(err) throw err;
        if(docs) return res.status(409).send({ error: "User already exists" });

        user.save(err => {
            if(err) throw err;
            console.log(`Successfully created user ${user._id}`);
            return res.end("Successful registration");
        });
    });
});

module.exports = router;
