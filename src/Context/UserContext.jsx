import React from 'react'
import { createContext ,useState} from "react";


export let UserContext = createContext();

export default function UserContextProvider(props) {
    const [userData, setUserData] = useState('')

  return <UserContext.Provider value={{userData , setUserData}}>
    {props.children}

  </UserContext.Provider>
}
