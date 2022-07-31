import React from 'react'
import experience from './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
          <article className='experience-details'>
              <BsFillPatchCheckFill  className='experience-details-icons'/>
              <div>
              <h4>HTML</h4>
                <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill  className='experience-details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill  className='experience-details-icons'/>
              <div>
              <h4>JavaScript</h4>
                <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icons' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icons' />
              <div>
              <h4>React</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience-backend'>
          <h3>Backend Development</h3>
          <div className='experience-content'>
          <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icons' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icons' />
              <div>
              <h4>C</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill  className='experience-details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience-details-icons' />
              <div>
              <h4>Github</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Experience