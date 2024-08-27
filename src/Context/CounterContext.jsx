import React from 'react';
import { createContext , useState } from "react";


export let counterContext = createContext(0);


export default function CounterContextProvider(props) {
    const [count, setCount] = useState(0)
  return  <counterContext.Provider value={{count ,setCount }}>
    {props.children}

  </counterContext.Provider>
}
