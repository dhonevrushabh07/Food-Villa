
import Title from "./Title";
import { useState, useContext } from "react";
import { IMG_CDN_URL } from "./constants";
import UserContext from "../utils/userContext";


// const RestarantCard = ({ name, cloudinaryImageId, cuisines, avgRatingString }) => {
//     const user = useContext(UserContext)
//     return (
//         // <div className="card w-[200px]">
//         <div className="card  p-2 m-2 shadow-md bg-pink-100">
//             <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" style={{ width: "100%", height: "200px" }} />
//             <h2 className="font-bold text-xl">{name}</h2>
//             <h3 className="text-wrap">{cuisines?.join(",")}</h3>
//             <h4 className="font-bold">{avgRatingString} stars</h4>
//             <h5>{user?.user?.userName}</h5>
//         </div>
//     )
// }

const RestarantCard = ({ name, cloudinaryImageId, cuisines, avgRatingString }) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="Image not found" />
                <div className="card-content" >
                    <h4>Name : {name}</h4>
                    <h4>Cusines : {cuisines?.join(",")}</h4>
                    <h4>Ratings : {avgRatingString}</h4>
                </div>
            </div>

        </div>

    )
}

export default RestarantCard;