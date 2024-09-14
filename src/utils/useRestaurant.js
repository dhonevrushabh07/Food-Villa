import { useState, useEffect } from "react"
import { RESTAURANT_MENU } from "../components/constants"
const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {
        getRestaurant()
    }, [])
    async function getRestaurant() {
        const data = await fetch(RESTAURANT_MENU + resId)
        const restaurantData = await data.json()
        setRestaurant(restaurantData)
    }
    return restaurant
}
export default useRestaurant;