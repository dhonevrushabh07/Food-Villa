
import { useState, useEffect } from "react"
const useRestaurantList = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurent, setAllRestaurent] = useState([])

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // data is readable stream convert this readable stream into json
        const jsonData = await data.json();
        setAllRestaurent(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return [filteredRestaurants, allRestaurent]
}

export default useRestaurantList