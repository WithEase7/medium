import React from 'react'
import { mediumLogo } from '../../utilities/SvgIcons';
import { Link } from 'react-router-dom';

const FifthFold = () => {
    const links = ["About", "Terms", "Privacy", "Help", "Teams"]
  return (
    <div className='fifthFold'>
        <div className='f5Logo'>
            {mediumLogo}
        </div>
        <p className='f5Tagline'>Every idea needs a Medium</p>
        <ul className='f5List'>
            {links.map((item,index)=> {
                return (
                    <li key={index}>
                        <Link to={`/${item}`}>{item}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default FifthFold