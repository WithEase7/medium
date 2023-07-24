import React from 'react'
import { footerLogo } from "../utilities/SvgIcons";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <a href='' className='footerLogo'>{footerLogo}</a>
        <ul className='footerLinks'>
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
        <hr className='seperatorLine'/>
        <p className='footerText'>Get the Medium app</p>
        <div className='installAppCta'>
            <img src='https://miro.medium.com/v2/resize:fit:270/1*Crl55Tm6yDNMoucPo1tvDg.png'/>
            <img src='https://miro.medium.com/v2/resize:fit:270/1*W_RAPQ62h0em559zluJLdQ.png'/>
        </div>
    </div>
  )
}

export default Footer