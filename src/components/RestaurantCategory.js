import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItem, setShowIndex}) => {

    
    const handleClick = (e) => {
        // setShowItem(!showItem);
        setShowIndex(e.target.value);
        console.log("clicked")
    }
    return (
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer"
                            onClick={handleClick}>
                    <span className="font-ProximaNovaBold text-xl text-customblack-3 ">
                        {data?.title}
                        ({data?.itemCards?.length})
                    </span>
                    <span>⬇️</span>
                </div>
               { showItem &&  <ItemList items={data.itemCards}  /> }
            </div>
        </div>
        
        
    )
}

export default RestaurantCategory