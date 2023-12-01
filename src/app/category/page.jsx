'use client'
import './category.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { useEffect, useState } from "react";
import LogoSlider from "../../components/logoSlider";
import Link from 'next/link'
import { category } from '../../../servises/action/product';

const Division =()=> {

	const [categories, setCategory] = useState([]);

  const getCategory = async () => {
    try {
        const { data } = await category();
        setCategory(data.categories);
    } catch (error) {
        console.error(error);
    }
  };

  var settings = {
    
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 500,

      className: "center",
      centerMode: true,
      centerPadding: "80px",
      speed: 500,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "20px",
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: "10px",
            arrows: true,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: "0px",
            arrows: true,
            slidesToShow: 1,
          }
        }
      ]
  };

  useEffect(() => {
    getCategory();
  }, []);

    return(
        <>
          <div 
              style={{
                backgroundImage: `url(/image/banner-bg.png)`,
                height: 'auto',
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
          >	
            <div className='bodybg pb-20'>

              <div className='pb-20'>
                <div className='container mx-auto'>
                  <div className="px-4 text-center pt-12">
                    <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>Category</h2>
                  </div>
                </div>
                <div className="overflow-hidden pb-20 ourVisionSlider">
                  <div className="mx-auto container">
                    <div className="px-2 md:px-12">
                      <Slider {...settings}>

                      {categories && categories.map((items) => (
                        <div key={items.id} className="text-center p-8 shadow-sm rounded-2xl">
                            <div className="h-[300px] w-full">
                              <Image src={items.image} className="mx-auto py-2"
                              width={200}
                              height={300}
                              style={{ height: '100%', width: 'auto' }} 
                              alt='img' />
                            </div>
                            <div className='flex justify-center pt-6'>
                              <Link href={"/contact"} className="rounded-full border-[#d4983d] text-sm font-bold px-4 py-2 border-2 bg-[#d4983d] hover:bg-[#d4983d] hover:border-amber-400 text-white transition-all ease-out duration-300"> Submit Enquiry </Link>
                            </div>
                        </div>
                      ))}

                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <LogoSlider />

      </>
    )
}

export default Division;
