import http from "./httpsService"

const getListings = async () => {
        await http.get("/listings").then((res)=>{
            console.log("Sucessfully got the data !");
            console.log(res);
            return res.data
        }).catch(error => console.log("Error Connecting Server"))
}

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
    try {
        await http.post("/listings",listing) 
        console.log("Sucessfuly posted Data !");  
    } catch (error) {
        console.log("Error while posting Listing",error)
    }
}


export  {
    getListings,
    postListings
}