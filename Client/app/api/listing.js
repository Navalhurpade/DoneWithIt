import http from "./httpsService";

const endpoint = "/listings";

const getListings = async () => {
  const res = await http.get(endpoint);
  console.log("Sucessfully got the Listings data !");
  if (!res.ok) console.log("Error Geting the data !");
  return res.data;
};

// const listing = new Listing({
//     title: data.title,
//     price: data.price,
//     images: images,
//     description: data.description,
//     categoryId: data.categoryId,
//     userId: req.user.userId,
//     location: data.location
// });

const postListings = async (listing) => {
  const res = await http
    .post("http://192.168.2.228:9000/listings", listing)
    .catch((error) => console.log(error));
  if (!res.ok) {
    console.log("Error while posting Listing");
    return;
  } else {
    console.log("Sucessfuly posted Data !");
  }
};

export { getListings, postListings };
