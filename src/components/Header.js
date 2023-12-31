import { LOGO_URL } from "../utils/constants";
import { useState, useContext, useDebugValue } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //Subscribing to the user using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-pink-100 m-2 shadow-lg ">
      <div className="logo-container">
        <img
          className="w-40"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4">
          <li>
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            {/**basically its similar to router link */}
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              Cart ({cartItems.length} Items)
            </Link>
          </li>
          <button className="login-btn"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact('LogOut') : setBtnNameReact('Login')
            }}>
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;