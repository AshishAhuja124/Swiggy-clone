import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Defaualt User",
})

export default UserContext;