import React from 'react'
import Admin from '../components/Admin'
import { results } from '../data/Admin'


function About() {
  return (
    <div className='nov'>
        {
            results.map((item) => (
                <Admin key={item.id} wow={item}/>

            ))
        }
    </div>
  )
}

export default About
