import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold"> Cart </h1>
            <div className="w-6/12 m-auto">
                <button className="className='p-2 border border-slate-300 text-green-500 cursor-pointer"
                onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && 
                    <div className='flex flex-col justify-center items-center h-screen'>
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                            alt='Your cart is empty'
                            className='w-72 h-64'
                        />
                        <div>Your cart is empty</div>
                        <div>You can go to the home page to view more restaurants</div>
                    </div>
                }
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default cart;