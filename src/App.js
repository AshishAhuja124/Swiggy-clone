import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from  "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/cart";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./utils/persistStore"

//lazy loading the component
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));






const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an api call to fetch username, password

    const data = {
      name: "Ashish Ahuja",
    }
    setUserName(data.name);
  }, []);


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </PersistGate>
    </Provider>
  );
};

const appRouter = createBrowserRouter ([

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },

      {
        path: "/about",
        element:
          <Suspense fallback={<div>loading ....</div>}>
            <About />
          </Suspense>
      },
    
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element:
          <Suspense fallback={<div>loading ....</div>}>
            <Grocery />
          </Suspense>
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },

  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);