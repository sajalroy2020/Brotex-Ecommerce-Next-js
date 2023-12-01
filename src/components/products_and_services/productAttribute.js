'use client'
import './productAttribute.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { CiCircleInfo, } from 'react-icons/ci'


function ProductAttribute({productAttributeText}) {

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
      centerPadding: "50px",
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
            slidesToShow: 1,
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

    return(

        <div className='pb-20'>
          <div className='container mx-auto'>
            <div className="px-4 text-center">
              <h2 className='text-3xl sm:text-5xl font-bold pb-5 text-[#d4983d]'>{productAttributeText.title}</h2>
              <p className='text-xl text-gray-700 tracking-wider pb-10'>{productAttributeText.value}</p>
            </div>
          </div>
          <div className="overflow-hidden pb-20 ourVisionSlider">
            <div className="mx-auto container">
              <div className="px-2 md:px-12">
                <Slider {...settings}>

                  <div className="text-center p-3 shadow-sm rounded-2xl bg-white">
                    <Image className="m-auto mt-2" src="/image/environmental-specification_0.png" width="100" height="90" alt='lgo' />
                    <h3 className='text-lg sm:text-xl font-bold py-6 text-[#d4983d]'>Environmental Speciﬁcations</h3>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>The Global Organic Textile S is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                  </div>

                  <div className="text-center p-3 shadow-sm rounded-2xl bg-white">
                    <Image className="m-auto mt-2" src="/image/Printing Embroidery Process.png" width="60" height="90" alt='lgo' />
                    <h3 className='text-lg sm:text-xl font-bold py-6 text-[#d4983d]'>GOTS (Global Textile Standard)</h3>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>The Global Organic Textile S is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                  </div>

                  <div className="text-center p-3 shadow-sm rounded-2xl bg-white">
                    <Image className="m-auto mt-2" src="/image/environmental-specification_0.png" width="100" height="90" alt='lgo' />
                    <h3 className='text-lg sm:text-xl font-bold py-6 text-[#d4983d]'>GOTS (Global Textile Standard)</h3>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>The Global Organic Textile S is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                  </div>

                  <div className="text-center p-3 shadow-sm rounded-2xl bg-white">
                    <Image className="m-auto mt-2" src="/image/Printing Embroidery Process.png" width="60" height="90" alt='lgo' />
                    <h3 className='text-lg sm:text-xl font-bold py-6 text-[#d4983d]'>GOTS (Global Textile Standard)</h3>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>The Global Organic Textile S is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                  </div>

                  <div className="text-center p-3 shadow-sm rounded-2xl bg-white">
                    <Image className="m-auto mt-2" src="/image/environmental-specification_0.png" width="100" height="90" alt='lgo' />
                    <h3 className='text-lg sm:text-xl font-bold py-6 text-[#d4983d]'>GOTS (Global Textile Standard)</h3>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                    <div className="bg-gray-100 shadow p-4 rounded-xl">
                        <p className='text-sm text-gray-700 tracking-wider'>The Global Organic Textile S is a voluntary, certified standard that covers all aspects of the production of all </p>
                    </div>
                  </div>


                </Slider>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProductAttribute; 