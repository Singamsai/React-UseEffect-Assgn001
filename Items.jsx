import React from 'react'
import './items.css'

const Items = (props) => {
  return (
    <div className='items'>
      <img src={props.img} alt=""></img>
      <p>{props.label}</p>
      <a href={props.url}>Recipe url</a>
    </div>
  )
}

export default Items
