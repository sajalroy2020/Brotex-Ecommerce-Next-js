'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { get_certificate } from '../../servises/action/all';

function LogoSlider() {

  const [certificate, setCertificate] = useState([]);

  const getCertificate = async () => {
    try {
        const { data } = await get_certificate();
        setCertificate(data.certificate);
    } catch (error) {
        console.error(error);
    }
};

  var settings = {
    
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 500,
      speed: 2000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };

  useEffect(() => {
    getCertificate();
  }, []);

    return(
      
          <div className="overflow-hidden py-6 logoSlider"
                style={{
                    backgroundImage: `url(/image/banner-bg.png)`,
                    height: 'auto',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
            >
          <div className="mx-auto container">
            {
              certificate.length >= 8 ?
                <Slider {...settings}>
                  {certificate.map((item) => (
                    <div key={item.id}><Image className="m-auto" src={item.logo} width="100" height="80" alt='lgo' /></div>
                  ))}
              </Slider>
              :            
              <div className='flex flex-wrap space-x-4 items-center justify-center'>
                {certificate.map((item) => (
                  <div key={item.id}><Image className="m-auto" src={item.logo} width="100" height="80" alt='lgo' /></div>
                ))}
            </div>
            }
          </div>
        </div>
    )
}

export default LogoSlider; 