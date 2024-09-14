// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { IMG_CDN_URL } from "./constants";
// import Shimmer from "./Shimmer";
// import useRestaurant from "../utils/useRestaurant";
// import useOnline from "../utils/useOnline";
// import { addItem, removeItem, clearCart } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

// const RestaurantDetails = () => {
//     const param = useParams();
//     const { id } = param
//     const isOnline = useOnline()
//     // Custom Hook
//     const restaurant = useRestaurant(id)
//     if (!isOnline) {
//         return <h1>offline, please check your internet connection</h1>
//     }
//     const dispatch = useDispatch()
//     // const handleAddItem = () => {
//     //     dispatch(addItem("grapes"))
//     // }
//     const addFoodItem = (item) => {
//         dispatch(addItem(item))
//     }
//     // const removeFoodItem = (item) => {
//     //     dispatch(removeItem(item))
//     // }
//     const cearCart = () => {
//         dispatch(clearCart())
//     }
//     return !restaurant ? <Shimmer /> : (
//         <div className="flex">
//             <div>
//                 <h1>Restaurant Id : {param.id}</h1>
//                 <h1>Restaurant Name : {restaurant?.data?.cards[2]?.card?.card?.info?.name}</h1>
//                 <img src={IMG_CDN_URL + restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
//                 <h1>Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</h1>
//                 <h1>Average Retaing : {restaurant?.data?.cards[2]?.card?.card?.info?.avgRatingString}</h1>
//                 <h1>City : {restaurant?.data?.cards[2]?.card?.card?.info?.city}</h1>
//                 <h1>Cost for two : {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
//                 <h1>Ratings : {restaurant?.data?.cards[2]?.card?.card?.info?.totalRatings}</h1>
//             </div>
//             <div >
//                 <h1>{restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h1>
//                 {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e) => {
//                     console.log("eee: ", e.card)
//                     return (
//                         <>
//                             <ul>
//                                 <li key={e.card.info.id}>{e.card.info.name} <button className="p-1 m-2 bg-green-200" onClick={() => addFoodItem(e.card.info)}>Add Item</button></li>
//                             </ul>
//                         </>

//                     )
//                 })}
//                 {/* <button onClick={() => cearCart()}>Clear Cart</button> */}
//             </div>

//         </div>
//     )
// }

// export default RestaurantDetails;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
    const param = useParams();
    const { id } = param
    const isOnline = useOnline()
    // Custom Hook
    const restaurant = useRestaurant(id)
    if (!isOnline) {
        return <h1>offline, please check your internet connection</h1>
    }
    const dispatch = useDispatch()
    // const handleAddItem = () => {
    //     dispatch(addItem("grapes"))
    // }
    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
    // const removeFoodItem = (item) => {
    //     dispatch(removeItem(item))
    // }
    const cearCart = () => {
        dispatch(clearCart())
    }
    return !restaurant ? <Shimmer /> : (
        <div className="menu-details">
            <div className="rest-details">

                <img src={IMG_CDN_URL + restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
                <h1>Restaurant Id : {param.id}</h1>
                <h1>Restaurant Name : {restaurant?.data?.cards[2]?.card?.card?.info?.name}</h1>
                <h1>Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</h1>
                <h1>Average Retaing : {restaurant?.data?.cards[2]?.card?.card?.info?.avgRatingString}</h1>
                <h1>City : {restaurant?.data?.cards[2]?.card?.card?.info?.city}</h1>
                <h1>Cost for two : {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
                <h1>Ratings : {restaurant?.data?.cards[2]?.card?.card?.info?.totalRatings}</h1>
            </div>
            <div >
                <table className="menu-table">
                    <tr>
                        <th>{restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</th>
                        <th></th>
                    </tr>


                    {/* <h1>{restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h1> */}
                    {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e) => {
                        // console.log("eee: ", e.card)
                        return (
                            <>
                                <tr>
                                    <td key={e.card.info.id}> {e.card.info.name} </td>
                                    <td> <button className="p-1 m-2 bg-green-200" onClick={() => addFoodItem(e.card.info)}>Add Item</button></td>
                                </tr >
                                {/* <ul>
                                    <li key={e.card.info.id}>{e.card.info.name} <button className="p-1 m-2 bg-green-200" onClick={() => addFoodItem(e.card.info)}>Add Item</button></li>
                                </ul> */}
                            </>

                        )
                    })}
                    {/* <button onClick={() => cearCart()}>Clear Cart</button> */}
                </table>
            </div>

        </div >
    )
}

export default RestaurantDetails;