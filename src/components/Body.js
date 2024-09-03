import RestarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { restarantList } from "./constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

function filterdata(searchText, restaurants) {
    console.log(restaurants)
    const data = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))

    console.log(data)
    return data
}
const Body = () => {

    const [searchText, setSearchText] = useState("")
    const isOnline = useOnline()

    // Custom Hook created for below code
    const [filteredRestaurants, allRestaurent] = useRestaurantList()
    // const [filteredRestaurants, setFilteredRestaurants] = useState([])
    // const [allRestaurent, setAllRestaurent] = useState([])
    // useEffect(() => {
    //     getRestaurants()
    // }, [])

    // async function getRestaurants() {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     // data is readable stream convert this readable stream into json
    //     const jsonData = await data.json();
    //     // console.log(jsonData?.data?.cards[4].card.card)
    //     setAllRestaurent(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    //     setFilteredRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // }

    //Custom hook to check is user online or not

    if (!isOnline) {
        return <h1>offline, please check your internet connection</h1>
    }
    return (allRestaurent.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterdata(searchText, allRestaurent)
                    console.log(data)
                    setFilteredRestaurants(data)
                }}>Search</button>
            </div>

            <div className="restarant-list">
                {
                    filteredRestaurants.length === 0 ? <h1>No Restaurent found</h1> : filteredRestaurants.map((res) => {
                        return (
                            <>
                                <Link to={"/restaurant/" + res.info.id} key={res.info.id}><RestarantCard  {...res.info} /></Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};


export default Body;