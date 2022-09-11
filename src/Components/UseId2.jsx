//importere React & useId hooket
import React, { useId } from 'react'

//exportere mit Component
export default function UseId2() {
    //laver en const variabel med useId
    const id = useId()

    //returnere mit JSX
    // LINJE 14 - 15 bruger mine unikke id'er med "-email" efter til at koble email label og input sammen
    // LINJE 17 - 18 bruger det samme unikke id,  bare med "-name" efter
    return (
        <div>
            <h2>Eks. 2</h2>
        <label htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email"/>
        <br/>
        <label htmlFor={`${id}-name`}>Name</label>
        <input id={`${id}-name`} type="text" />
    </div>
  )
}