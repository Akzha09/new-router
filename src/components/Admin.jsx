import React from 'react'
import "./Admin.css"

function Admin({wow}) {
  return (
    <div className='product'>
      <div className={`servis ${wow.id % 2 === 0 ? "green" : "red" } `}>

      <div className='product-img'>
        <img src={wow.image} alt="" />
        <div className='product-content'>
            <h3>{wow.title}</h3>
            <p>{wow.currency}</p>
        </div>
        <div className='prices'>
            <p>{wow.price}</p>
            <p>{wow.text}</p>
          
      </div>
      
        </div>
      </div>
    </div>
  )
}

export default Admin
