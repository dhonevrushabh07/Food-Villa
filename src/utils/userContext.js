import { createContext } from "react";

const UserContext = createContext({
    user: {
        userName: 'DummyUser',
        email: "dummyUser@gmail.com"
    }
})

export default UserContext;