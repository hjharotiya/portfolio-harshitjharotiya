import React from 'react'
import CTA from './CTA'
import me from '../../assets/pp2.jpg'
import HeaderSocial from './HeaderSocial'
import header from './header.css'
const Header = () => {
  return (
	  <header>
		  <div className='container header-container'>
			  <h5>Hello I,m</h5>
			  <h1>Harshit Jharotiya</h1>
			  <h5 className='text-light'>Frontend Web Developer</h5>

			  <CTA />
			  <HeaderSocial/>
			  <div className='me'>
				<img src={me}></img>
			  </div>
			  <a href='#contact' className='scroll__down'>Scroll down</a>
	</div>
   </header>
  )
}

export default Header