import RestaurantCard,{withOfferTextOnCard} from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    const {loggedInUser,setUserName} = useContext(UserContext);

    //state varaibles for storing the state
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);
    const RestaurantCardOfferText = withOfferTextOnCard(RestaurantCard);

    const getTopRatedRes = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
        setListOfFilteredRestaurants(filteredList);
        console.log(filteredList);
    }

    const filterBySearchValue = () => {
        const filteredRes = listOfRestaurants.filter((res) => (res.info.name.toLowerCase()).includes(searchText.toLowerCase()));
        setListOfFilteredRestaurants(filteredRes);
    }

    console.log("Body Rendered",listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Hey it looks like your internet connection is down</h1>
        )
    //Conditional rendering


    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="flex">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button type="button" className="px-4 py-1 bg-blue-100 m-4 rounded-lg"
                        onClick={() => { filterBySearchValue() }}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-1 bg-gray-100 rounded-lg"
                        onClick={() => {
                            { getTopRatedRes() }
                        }}
                    >
                        Top Rated restaurants
                    </button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <label>Username</label>
                    <input className="border border-black p-2"
                    value = {loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                    ></input>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {listOfFilteredRestaurants?.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={"/restaurants/" + restaurant?.info?.id} >
                        {restaurant.info.aggregatedDiscountInfoV3 ? (
                            <RestaurantCardOfferText resData={restaurant} />) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;

