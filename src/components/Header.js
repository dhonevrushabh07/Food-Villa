import Title from "./Title";
import { useState, useContext } from "react";
import { Link, redirect } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const user = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items)
    // console.log(cartItems)
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            {
                isLoggedIn ? <div className="nav-items">
                    <ul className="flex py-10">
                        <Link to="/"> <li className=" px-2">Home</li></Link>
                        <Link to="/about"> <li className=" px-2">About</li></Link>
                        <Link to="/contact"><li className=" px-2">Contact</li></Link>
                        <Link to="/cart"><li className=" px-2">Cart - {cartItems.length}</li></Link>
                        <Link to="/instamart"><li className=" px-2">Instamart</li></Link>
                        <Link to="/logout"> <button onClick={() => {
                            setIsLoggedIn(false)
                        }}>Logout</button>
                        </Link>
                    </ul>
                </div> : <div className="nav-items">
                    <ul className="flex py-10">
                        <Link to="/" ><button onClick={() => {
                            // redirect("/about")
                            setIsLoggedIn(true)
                        }}>Login</button></Link>
                    </ul>
                </div>
            }

        </div >
    );
};

