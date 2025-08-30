"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from "@/public/vivekanand.jpg";
import img2 from "@/public/dayanand ji.jpg";
import img3 from "@/public/amritvachan.jpg"
import img4 from "@/public/valmiki ji.jpg"
import img5 from "@/public/gangadhar ji.jpg"
import img7 from "@/public/Guru_Gobind_Singh_Sahib.jpg"

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: img1.src,
    caption: 'Slide 1'
  },
  {
    url: img2.src,
    caption: 'Slide 2'
  },
  {
    url: img3.src,
    caption: 'Slide 3'
  },
  {
    url: img4.src,
    caption: 'Slide 4'
  },
  {
    url: img5.src,
    caption: 'Slide 5'
  },
  {
    url: img7.src,
    caption: 'Slide 7'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow