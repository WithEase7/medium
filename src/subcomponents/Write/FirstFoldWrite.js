import React from 'react'

const FirstFoldWrite = () => {
  return (
    <div className='f1Write'>
      <div className='f1wContainer'>
        <div className='f1wTop'>
        <p className='f1wMiniTag'>start a blog for free</p>
      <p className='f1wTitle'>
        Publish, grow, and earn, all in one place.
        </p>
        <p className='f1wDesc'>If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Here, your writing can thrive in a network supported by millions of readers — not ads.</p>
        <button className='f1wButton'>Start Writing</button>
      </div>
        
        <div className='f1wBottom'>
        <img src='https://cdn-static-1.medium.com/sites/medium.com/creator-tools/images/White_face_left_Final.svg' alt='f1write_img' className='f1wImage'/>
        <p className='f1wText'>Download our app so you can read whereever you are.</p>
        <div className='installAppCtaWrite'>
            <img src='https://miro.medium.com/v2/resize:fit:270/1*Crl55Tm6yDNMoucPo1tvDg.png'/>
            <img src='https://miro.medium.com/v2/resize:fit:270/1*W_RAPQ62h0em559zluJLdQ.png'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FirstFoldWrite