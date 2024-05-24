import React from 'react'
import bannerImg from '../../Assets/Images/citizenBanner.png'
import '../../Assets/Styles/LoginBanner.css'

function LoginBanner() {
  return (
    <div>
      <div className='citizen_banner' >
        <img src={bannerImg} className='img-fluid' alt='citizen_banner' />
      </div>
    </div>
  )
}

export default LoginBanner
