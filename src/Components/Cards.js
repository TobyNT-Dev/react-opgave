import React from 'react'
import './cards.css'

export default function Cards(props) {
  return (
    <div className="container">

    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <h2>{props.firstName} {props.lastName}</h2>
                <p>{props.employments}</p>
                <img src={props.avatar} alt="Avatar" style={{width:"200px", height: "200px"}} />
            </div>
            <div className="flip-card-back">
                <h3>{props.email}</h3>
                <h3>{props.phone}</h3>
                <h3>{props.sin}</h3>
                <p>{props.address1}, {props.address2}, {props.address3}</p>
            </div>
        </div>
    </div>
    </div>
  )
}
