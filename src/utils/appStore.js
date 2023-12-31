import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);


export const appStore = configureStore({
    reducer: {
        cart: persistedReducer,
    }
});
export const persistor = persistStore(appStore);

