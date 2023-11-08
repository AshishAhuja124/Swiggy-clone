import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); //Using custom hook
    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, areaName }
        = resInfo.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards,'itemCards');

    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories,'categories');

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">
                {name}
            </h1>
            <h3 className="font-semibold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {categories.map((category,index) =>
                <RestaurantCategory
                    key={category.card.card.title}
                    data={category.card.card}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            )}
        </div>
    )
}

export default RestaurantMenu