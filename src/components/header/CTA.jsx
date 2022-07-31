import React from 'react'
import jhCV from '../../assets/jhCV.pdf'
const CTA = () => {
  return (
	  <div className='cta'>
	<a href={jhCV} download className='btn'>Download CV</a>
	  <a href="#contact" className='btn btn-primary' >Let's Talk</a>
	 </div>
  )
}

export default CTA