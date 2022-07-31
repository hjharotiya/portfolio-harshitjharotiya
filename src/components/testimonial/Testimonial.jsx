import React from 'react'
import testimonial from './testimonial.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [

  {
    avatar: AVATAR1,
    name: 'Tine Snow',
    review: 'Modi alias animi dolorem aliquan es eum bestse maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molesties. Dolorem, perspiciatis aspernatur labore distinctie ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
  },
  {
    avatar: AVATAR2,
    name: 'Tine Snow',
    review: 'Modi alias animi dolorem aliquan es eum bestse maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molesties. Dolorem, perspiciatis aspernatur labore distinctie ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
  },
  {
    avatar: AVATAR3,
    name: 'Tine Snow',
    review: 'Modi alias animi dolorem aliquan es eum bestse maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molesties. Dolorem, perspiciatis aspernatur labore distinctie ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
  },
  {
    avatar:AVATAR4,
    name: 'Tine Snow',
    review: 'Modi alias animi dolorem aliquan es eum bestse maiores, consectetur praesentium quibusdam, commodi velit porroblanditiis consequatur qui molesties. Dolorem, perspiciatis aspernatur labore distinctie ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
  },
]

function Testimonial() {
  return (
    <section id='testimonial'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonial-container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      
        {
          data.map(({avatar,name,review},index) => {
            
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client-Avtar'>
                  <img src={avatar} />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>
                 {review}
                </small>
              </SwiperSlide>
            );
             })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial