import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const RestaurantDetails = () => {
    const param = useParams();
    const { id } = param
    const isOnline = useOnline()
    // Custom Hook
    const restaurant = useRestaurant(id)
    if (!isOnline) {
        return <h1>offline, please check your internet connection</h1>
    }
    return !restaurant ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant Id : {param.id}</h1>
                <h1>Restaurant Name : {restaurant?.data?.cards[2]?.card?.card?.info?.name}</h1>
                <img src={IMG_CDN_URL + restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
                <h1>Area : {restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</h1>
                <h1>Average Retaing : {restaurant?.data?.cards[2]?.card?.card?.info?.avgRatingString}</h1>
                <h1>City : {restaurant?.data?.cards[2]?.card?.card?.info?.city}</h1>
                <h1>Cost for two : {restaurant?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
                <h1>Ratings : {restaurant?.data?.cards[2]?.card?.card?.info?.totalRatings}</h1>
            </div>
            <div >
                <h1>{restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h1>
                {restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((e) => {
                    return (
                        <>
                            <ul>
                                <li key={e.card.info.id}>{<h2>{e.card.info.name}</h2>}</li>
                            </ul>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default RestaurantDetails;