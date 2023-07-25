import React from 'react'
import FirstFoldWrite from '../subcomponents/Write/FirstFoldWrite'
import '../css/Write.css'
import SecondFoldWrite from '../subcomponents/Write/SecondFoldWrite'
import ThirdFoldWrite from '../subcomponents/Write/ThirdFoldWrite'

const Write = () => {
  return (
    <div>
        <FirstFoldWrite />
        <SecondFoldWrite />
        <ThirdFoldWrite />
    </div>
  )
}

export default Write