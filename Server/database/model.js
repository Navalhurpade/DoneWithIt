require("dotenv").config();
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

mongoose.connect(process.env.DB_URL, { dbName: "donewithit", useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }).then(() => {
    console.log("Connected to Atlas Cluster successfully!");
}).catch((err) => console.log(err));

const messageSchema = new mongoose.Schema({
    text: String,
    createdAt: Date,
    listing: {
        _id: mongoose.Types.ObjectId,
        name: String
    },
    user: {
        _id: mongoose.Types.ObjectId,
        name: String,
        avatar: String
    },
    receiver: {
        _id: mongoose.Types.ObjectId,
        name: String,
        image: String
    },
    image: String
}, { versionKey: false });

const imageSchema = new mongoose.Schema({
    url: String,
    thumbnail: String
}, { versionKey: false, _id: false });

const connectionSchema = new mongoose.Schema({
    senderID: mongoose.Types.ObjectId,
    senderName: String,
    senderImage: String,
    timestamp: Date,
    messages: [messageSchema]
}, { versionKey: false });

const listingSchema = new mongoose.Schema({
    title: String,
    images: [imageSchema],
    price: Number,
    categoryId: Number,
    userId: mongoose.Types.ObjectId,
    description: String,
    location: {
        latitude: mongoose.Types.Decimal128,
        longitude: mongoose.Types.Decimal128,
    }
}, { versionKey: false });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        minlength: 8
    }, 
    expoPushToken: String,
    profileImage: { type: String, default: "https://img.icons8.com/color/96/000000/gender-neutral-user.png" },
    connections: [connectionSchema]
}, { versionKey: false });

const encKey = process.env.ENC_KEY; //32-byte length 64-bit characters
const sigKey = process.env.SIG_KEY; //64-byte length 64-bit characters

userSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields:['password'] });

const Message = mongoose.model('Message', messageSchema);
const Connection = mongoose.model('Connection', connectionSchema);
const Image = mongoose.model('Image', imageSchema);
const Listing = mongoose.model('Listing', listingSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, Listing, Image, Connection, Message }