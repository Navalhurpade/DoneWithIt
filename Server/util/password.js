const argon2 = require('argon2');

module.exports.password_hash = async password => {
    try {
        const hash = await argon2.hash(password, {
            type: argon2.argon2id,
            hashLength: 50,
            timeCost: 5
        });
        return hash;
    } catch {
        console.log('Error hashing password');
    }
}

module.exports.password_verify = async (databasePassword, requestPassword) => {
    try {
        if (await argon2.verify(databasePassword, requestPassword)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
    }
}