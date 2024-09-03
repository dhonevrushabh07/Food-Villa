import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/"> <li>Home</li></Link>
                    <Link to="/about"> <li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                    <Link to="/instamart"><li>Instamart</li></Link>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={() => {
                    setIsLoggedIn(false)
                }}>Logout</button> : <button onClick={() => {
                    setIsLoggedIn(true)
                }}>Login</button>
            }
        </div>
    );
};

