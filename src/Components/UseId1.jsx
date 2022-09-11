//importere React & useId hooket
import React, { useId } from 'react'

//exportere mit Component
export default function UseId1() {
  //laver en const variabel med useId
    const id = useId()

    //returnere mit JSX og sætter id'erne på mine elementer
    return (
        <div>
          <h2>Eks. 1</h2>
        <label htmlFor={id}>Email</label>
        <input id={id} type="email"/>
    </div>
  )
}
