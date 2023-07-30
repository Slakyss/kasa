import React from 'react'
import Rating from './Rating'
import "../styles/AppartementDetailsHeader.css"

function AppartementHeader(props) {
    
const name = props.appartementData.host.name    
const [firstName, lastName] = name.split (" ");

  return (
    <div className='appartement__header'>
        <div className='appartement__title'>
            <h1>{props.appartementData.title}</h1>
            <h2>{props.appartementData.location}</h2>
            <div className='appartement__tags'>
              {props.appartementData.tags.map((tag) => (<span key ={tag}>{tag}</span>))}
            </div>
        </div>
            <div className='appartement__owner'>
            <div className='appartement__owner__bloc'>
                <h3>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
            <div className='appartement__owner__badge'>
                <img src={props.appartementData.host.picture} alt=""/>
            </div>
            </div>
            <Rating rating={props.appartementData.rating} />
        </div>
    </div>
  )
}

export default AppartementHeader