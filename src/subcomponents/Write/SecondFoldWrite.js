import React from 'react'
import { data } from '../../utilities/CuriousMinds'

const SecondFoldWrite = () => {
  return (
    <div className='f2Write'>
      <p className='f2wTitle'>Join a network<br></br> of curious<br></br> minds</p>
      <ul className='f2wList'>
        {data.map((item, index)=> {
          return(
            <li key={index} className='f2wCard'>
              <img src={item.image} className='f2wAuthorImage'/>
              <div>
                <p className='f2wName'>{item.author}</p>
                <p className='f2wAtt'>{item.attributes.join(', ')}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SecondFoldWrite