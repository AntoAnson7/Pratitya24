import React from 'react'
import "./Home.css"
import Carousel from "../components/Carousel"
import {Contact} from "../components/Contact"
import { Footer } from "../components/Footer";

function Home() {
  const slides = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/FOT02849-min.jpg?alt=media&token=aac0f6ec-0629-4290-9326-eb7d8feb2bb7",
      alt: 'Slide 1'
    },
    {
      src:  "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/FOT02873-min.jpg?alt=media&token=e7ca2317-6b07-4d76-92d0-2fa3ceb8bed9",
      alt: 'Slide 2'
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/FOT02926-min.jpg?alt=media&token=153dc518-7082-463d-938f-24fcbfe03205",
      alt: 'Slide 3'
    },
  ];
  return (
    <div className='Home'>
        <div className="r1">
        </div>

        <div className="r2" id="about">
          <div className="r2-head">
            About us
          </div>
          <div className="r2-content">
          <div className='r2-carousel'>
              <Carousel slides={slides} />
          </div>
          
          <div className="r2-text">
            Welcome to the vibrant celebration of creativity and talent at Saintgits College of Engineering! Join us for an extraordinary journey into the world of art and culture as our 4th-year engineering students proudly present a mesmerizing cultural fest. Immerse yourself in a kaleidoscope of artistic expressions, ranging from captivating performances to visually stunning exhibits. This event is a testament to the diverse talents of our students, showcasing their passion for the arts alongside their technical prowess. Come and be a part of this dynamic fusion of engineering innovation and artistic brilliance, as we unite in the spirit of creativity and cultural enrichment.
          </div>
          </div>
        </div>
        
        <div className="empty">
          
        </div>

        <div className="r3">
          <div className="r3-head">
            Contact us
          </div>
          <div className="r3-content">
            <Contact/>
          </div>
        </div>

        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default Home