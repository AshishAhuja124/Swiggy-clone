import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>
            Status: {onlineStatus ? "online": "offline"}
          </li> */}
          <li>
            {/**basically its similar to router link */}
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact('LogOut') : setBtnNameReact('Login')
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;