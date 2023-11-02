import { useState, useEffect } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    }

    if(resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, areaName }
        = resInfo.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <div className='restaurant_otherDetails'>
                <div className='cost-details'>
                    <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
                    <div className='cost'>{costForTwoMessage}</div>
                </div>
            </div>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => 
                    <li key={item.card.info.id}>{item.card.info.name} -  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu