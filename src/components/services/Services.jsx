import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
import services from './services.css'
function Services() {
  return (
    <section id='services'>
      <h5>what I offer</h5>
      <h2> services</h2>

      <div className='container service-container'>
        <article className='service'>
          <div className='service-head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service-list'>
          <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
          </ul>

        </article>
        {/* END OF UI/UX DESGIN */}
        <article className='service'>
          <div className='service-head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
          <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
          </ul>

        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service-head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service-list'>
          <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
            <li>
              <BsCheck2 className='service-list-icon' />
              <p>Lorem ipsum dolor sit consectetur adipisicing.</p>
            </li>
          </ul>

        </article>
    </div>

    </section>
  )
}

export default Services