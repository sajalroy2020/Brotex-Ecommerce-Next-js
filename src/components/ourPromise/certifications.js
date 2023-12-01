'use client'
import './ourPromise.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { CiCircleInfo, } from 'react-icons/ci'
import { get_certificate, singleCertificateGet } from '../../../servises/action/all';
const regex = /(<([^>]+)>)/gi;

function Certifications() {
  const [certificate, setCertificate] = useState([]);
  const [certificateModal, setCertificateModal] = useState(false);
  const [singleCard, setSingleCard] = useState({});

  const getSingleCertificate = async(id) => {
    try {
        const { data } = await singleCertificateGet(id);
        setSingleCard(data.certificate);
        setCertificateModal(true);
      } catch (error) {
        console.error(error);
      }
  };

  const getCertificate = async () => {
    try {
        const { data } = await get_certificate();
        setCertificate(data.certificate);
    } catch (error) {
        console.error(error);
    }
};


  var settings = {
    
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 900,
      className: "center",
      centerMode: true,
      centerPadding: "0px",
      speed: 3000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "0px",
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "0px",
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

  useEffect(() => {
    getCertificate();
  }, []);


    return(

      <>
        <div className='pb-0 md:pb-12'>
          <div className='container mx-auto px-4 md:px-[99px]'>
            <div className="text-center">
              <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>Brotex Certifications</h2>
            </div>
          <div className="overflow-hidden pb-20 ourVisionSlider">
            <div className="mx-auto container">
              <div className="px-2 md:px-12">

                  {certificate.length >= 4 ?
                      <Slider {...settings}>
                        {certificate.map((item) => (
                          <div key={item.id} className="text-center p-8 shadow-sm rounded-2xl">
                            <div className="h-[80px] mx-auto">
                              <Image className="m-auto" src={item.logo} alt='logo'
                                width={150}
                                height={80}
                                style={{ height: '100%', width: 'auto' }} 
                              />
                            </div>
                            <h3 className='text-lg sm:text-xl font-bold py-8 text-[#d4983d]'>{`${item.title.substring(0, 16)}`}</h3>
                            <p className='text-lg text-gray-600 tracking-wider'>{`${item.details.replace(regex, " ").substring(0, 25)}...`}</p>
                            <div className='flex justify-center pt-6'>
                              <button onClick={()=>getSingleCertificate(item.id)} className="text-[#d4983d] text-sm font-medium flex items-center gap-1">Read More <CiCircleInfo className='text-xl' /></button>
                            </div>
                          </div>
                        ))}
                      </Slider>
                  :
                    <div className='flex flex-wrap items-center justify-center space-x-8'>
                      {certificate.map((item) => (
                          <div key={item.id} className="text-center p-8 shadow-sm rounded-2xl bg-[#202734] w-[80%] sm:w-[40%] lg:w-[25%]">
                            <div className="h-[80px] mx-auto">
                              <Image className="m-auto" src={item.logo} alt='lgo'
                                width={150}
                                height={80}
                                style={{ height: '100%', width: 'auto' }} 
                              />
                            </div>
                            <h3 className='text-lg sm:text-xl font-bold py-8 text-[#d4983d]'>{item.title}</h3>
                            <p className='text-lg text-gray-600 tracking-wider'>{`${item.details.replace(regex, " ").substring(0, 25)}...`}</p>
                            <div className='flex justify-center pt-6'>
                              <button onClick={()=>getSingleCertificate(item.id)} className="text-[#d4983d] text-sm font-medium flex items-center gap-1">Read More <CiCircleInfo className='text-xl' /></button>
                            </div> 
                          </div>
                        ))}
                    </div>
                  }

              </div>
            </div>
          </div>
          </div>
        </div>

        {/* <!-- Main modal --> */}
        {certificateModal === true ? 
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-xl m-4 sm:m-0">
              <div className='mt-6 text-center'>
                  <div className="relative">
                    <Image className='mx-auto team_image' src={singleCard.logo} width="100" height="100" alt="Your Image" />
                  </div>
                  <h2 className='text-xl sm:text-2xl md:text-4xl font-bold pt-6 pb-3 text-[#d4983d]'>{singleCard.title}</h2>
                  <p className='text-lg text_align text-gray-600 tracking-wider'>{singleCard.details}</p>
              </div>
          
              <button className="absolute top-0 right-0 p-2 m-2" onClick={()=>setCertificateModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7 text-[#d4983d]">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
         : ''}
         </>
    )
}

export default Certifications; 