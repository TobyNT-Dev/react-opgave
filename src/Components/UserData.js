import React from 'react'
import { useState, useEffect } from "react";
import Cards from './Cards.js';

export default function UserData() {
  let [data, setData] = useState([])
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  },[])
  console.log(data)
  function refreshPage() {
    window.location.reload(false);
  }

return (
    <>
    <h1>Users</h1>
    <button onClick={refreshPage}>Update Cards</button>
    {data.map ((user) => {
      return (
        <Cards
        avatar={user.avatar}
        firstName={user.first_name}
        lastName={user.last_name}
        employments={user.employment.title}
        address1={user.address.street_address}
        address2={user.address.state}
        address3={user.address.country}
        phone={user.phone_number}
        email={user.email}
        sin={user.social_insurance_number}
        />
      )
    })}
    </>
  )
}