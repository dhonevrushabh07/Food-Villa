// import { useSelector } from "react-redux"
// import { store } from "../utils/cartSlice"
// import { useDispatch } from "react-redux"
// import { removeItem, clearCart } from "../utils/cartSlice"
// import RestarantCard from "./RestaurantCard.js"
// import FoodItem from "./FoodItem.js"

// const Cart = () => {
//     const cartItems = useSelector(store => store.cart.items)
//     const dispatch = useDispatch()
//     const removeFoodItem = (item) => {
//         dispatch(removeItem(item))
//     }
//     const cearCart = () => {
//         dispatch(clearCart())
//     }
//     return (
//         <>
//             <h1>This is Cart</h1>
//             {
//                 // <button className="p-1 m-2 bg-green-200" onClick={() => removeFoodItem(e)}>Remove Item</button>
//                 cartItems?.map((e) => {
//                     console.log("e--", e)
//                     return (
//                         < div className="flex">
//                             <FoodItem props={e} />
//                             <button className="p-2 m-2 bg-green-300" style={{ width: "100px", height: "100px" }} onClick={() => { removeFoodItem(e) }} >Remove Item</button>
//                         </div >
//                     )
//                 })
//             }
//             <button className="p-2 m-5 bg-red-400" onClick={() => cearCart()}>Clear Cart</button>
//         </>
//     )
// }
// export default Cart


import { useSelector } from "react-redux"
import { store } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
import { removeItem, clearCart } from "../utils/cartSlice"
import RestarantCard from "./RestaurantCard.js"
import FoodItem from "./FoodItem.js"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const removeFoodItem = (item) => {
        dispatch(removeItem(item))
    }
    const cearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="cart-holder">
            {
                cartItems.length > 0 ? cartItems?.map((e) => {
                    return (
                        < div className="cart-container">
                            <FoodItem props={e} />
                            <button onClick={() => { removeFoodItem(e) }} >Remove Item</button>
                        </div >
                    )
                })
                    : <div className="empty-cart"><h1>cart is empty</h1></div>
            }

            {
                cartItems.length > 0 ? < button className="clear-cart-btn" onClick={() => cearCart()}>Clear Cart</button> : ""
            }
        </div >
    )
}
export default Cart