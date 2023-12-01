'use client';
import './division.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import LogoSlider from "../../components/logoSlider";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { productType } from '../../../servises/action/product';

const Division =()=> {
  const [productTypes, setProductTypes] = useState([]);

  const getProductType = async () => {
    try {
        const { data } = await productType();
        setProductTypes(data.product_type);
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
    getProductType();
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
                <div className='container mx-auto px-4 md:px-[99px]'>
                  <div className="text-center pt-12">
                    <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>Product Type</h2>
                  </div>
                </div>
                <div className="overflow-hidden pb-20 ourVisionSlider">
                  <div className="mx-auto container px-4 md:px-[99px]">
                    <div className="">
                      <Slider {...settings}>

                        {productTypes && productTypes.map((items) => (
                            <div key={items.id} className="text-center p-8 shadow-sm rounded-2xl">
                                <div className="h-[280px] w-full">
                                  <Image src={items.image} className="mx-auto py-2"
                                  width={200}
                                  height={280}
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
