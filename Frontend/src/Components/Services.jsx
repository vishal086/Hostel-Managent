import React from 'react'
import '../Style/Services.css'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../Images/mmm1.jpg'
import img2 from '../Images/mmm2.jpg'
import img3 from '../Images/mmm3.jpg'
import img4 from '../Images/mmm4.jpg'
import img5 from '../Images/mmm5.jpg'
import img6 from '../Images/mmm6.jpg'
import img7 from '../Images/mmm7.jpg'
import img8 from '../Images/mmm8.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Services() {
  return (
     <>
        <div className="services">
      
          <Carousel
          infiniteLoop
          autoPlay
          showThumbs = {false}
          showStatus = {false} 
          showArrows = {true} 
          interval={1000}>

              <div>
                 <img src={img1} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img2} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img3} alt="" className='caro-img'/>
              </div>
              <div>
                 <img src={img4} alt="" className='caro-img'/>
              </div>

              <div>
                 <img src={img5} alt="" className='caro-img'/>
              </div>

              <div>
                 <img src={img6} alt="" className='caro-img'/>
              </div>
              <div>

                 <img src={img7} alt="" className='caro-img'/>
              </div>

              <div>
                 <img src={img8} alt="" className='caro-img'/>
              </div>
          </Carousel>
      <h1 className='service-section'>Introduction</h1>
       <p className='sevice-box'>
        The website is designed to streamline the process of registering and addressing hostel complaints. Students can easily file complaints related to issues like fans, bathrooms, and other hostel amenities. Once a complaint is submitted, it is directly forwarded to the hostel warden for prompt action. This system enhances communication between students and the warden, ensuring that problems are addressed more efficiently. By providing a direct channel for reporting issues, the website aims to improve the overall living experience in the hostel, making it more comfortable and responsive to students' needs.
        </p>
        </div>
     </>
  )
}

export default Services
