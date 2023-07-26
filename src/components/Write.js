import React from 'react'
import FirstFoldWrite from '../subcomponents/Write/FirstFoldWrite'
import '../css/Write.css'
import SecondFoldWrite from '../subcomponents/Write/SecondFoldWrite'
import ThirdFoldWrite from '../subcomponents/Write/ThirdFoldWrite'
import FourthFoldWrite from '../subcomponents/Write/FourthFoldWrite'
import FaqSection from '../subcomponents/Write/FaqSection'

const Write = () => {
  return (
    <div>
        <FirstFoldWrite />
        <SecondFoldWrite />
        <ThirdFoldWrite />
        <FourthFoldWrite />
        <FaqSection />
    </div>
  )
}

export default Write