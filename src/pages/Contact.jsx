import React, { useState, useEffect } from 'react'
import "./Contact.css"
const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
function Profile() {

  const [boxes, setBoxes] = useState([])

  async function getBoxes() {

    try {
      const res = await fetch(API)
      const data = await res.json()
      console.log(data);
      setBoxes(data.meals)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getBoxes()
  }, [])

  return (
    <div className='vop'>
      {
        boxes?.map((item) => (
          <div className='bots' key={item.id}>
            <h3>{item.strArea}</h3>
            <img src={item.strMealThumb} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default Profile