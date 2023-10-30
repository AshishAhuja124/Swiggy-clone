import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";

import { useState, useEffect } from "react";

const Body = () => {

    //state varaibles for storing the state
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);

    const getTopRatedRes = () => {
        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
        setListOfFilteredRestaurants(filteredList);
        console.log(filteredList);
    }

    const filterBySearchValue = () => {
        const filteredRes = listOfRestaurants.filter((res) => (res.info.name.toLowerCase()).includes(searchText.toLowerCase()));
        setListOfFilteredRestaurants(filteredRes);
    }

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Conditional rendering


    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="search-btn" onClick={() => { filterBySearchValue() }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        {getTopRatedRes()}
                    }}
                >
                    Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfFilteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;

