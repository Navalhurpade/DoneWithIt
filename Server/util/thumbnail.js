const imageThumbnail = require('image-thumbnail');

const options = { width: 100, responseType: "base64" };

module.exports = createThumbnail = async (uri) => {
    const image = await imageThumbnail({ uri: uri }, options);
    const fullUri = `data:image/jpg;base64,${image}`;

    return fullUri;
}