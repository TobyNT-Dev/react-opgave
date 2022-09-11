import React, { useState, createContext } from 'react'
import Child1 from './Child1'

//exportere vores data i en createContext state
export const DataContext = createContext(0)

export default function Parent() {
  const [data, setData] = useState(0)
  
    return (
      //bruger context.provider til at pass data til vores children
    <DataContext.Provider value={data}>
        <h1>Parent - Data: {data}</h1>
        <button onClick={() => setData(data + 1)}>Add 1 to data</button>
        <Child1 />
    </DataContext.Provider>
  )
}
