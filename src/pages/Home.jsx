import React from 'react'
import { products } from '../data/product'
import Card from '../components/Card'

function Home() {
  return (
    <div className='box'>
          {
              products.map((item) => (
                  <Card key={item.id} data={item}/>

              ))
          }
      
    </div>
  )
}

export default Home

