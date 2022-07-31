import React from 'react'
import portfolio from './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    img: IMG1,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  },
  {
    id: 2,
    img: IMG2,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  },
  {
    id: 3,
    img: IMG3,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  },
  {
    id: 4,
    img: IMG4,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  },
  {
    id: 5,
    img: IMG5,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  },
  {
    id: 6,
    img: IMG6,
    title: 'Note Keeper',
    github: 'https://github.com/hjharotiya',
    demo:'https://github.com/hjharotiya'

  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container container-portfolio'>
        {
          data.map(({ id, github, img, demo, title }) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio-item-image'>
                  <img src={img} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio-item-cta'>
                  <a href={github} className='btn' target='_blank' >GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                </div>
              </article>
            );
          })
      }
        
      </div>      
   </section>
  )
}

export default Portfolio