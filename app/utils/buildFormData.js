const buildFormData = (listing) => {
  const data = new FormData();

  for (const key in listing) {
    if (key == "images") {
      listing.images.forEach((img, index) => {
        console.log(img);
        data.append("images", {
          name: "image" + index,
          type: "image/jpeg",
          uri: img,
        });
      });
    } else if (key == "location") {
      if (listing.location != undefined)
        data.append(key, JSON.stringify(listing[key]));
    } else data.append(key, listing[key]);
  }

  return data;
};

module.exports = buildFormData;
