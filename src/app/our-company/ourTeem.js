'use client'
import './ourTeem.css'
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { singleTeamGet } from '../../../servises/action/all';
const regex = /(<([^>]+)>)/gi;

const OurTeem =({our_Team})=> {
  const [singleTeam, setSingleTeam] = useState(false);
  const [team, setTeam] = useState({});

  const getSingleTeam = async(id) => {
    try {
        const { data } = await singleTeamGet(id);
        setTeam(data.our_team);
        setSingleTeam(true);
      } catch (error) {
        console.error(error);
      }
  };
  
  var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      className: "center",
      centerMode: true,
      centerPadding: "0px",

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
      ]
  };

    return(
        <>
          <div className='pb-0 md:pb-10'>
            <div className='container mx-auto px-4 md:px-[99px]'>
              <div className="text-center">
                <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>Meet Our Team</h2>
              </div>
            </div>
            <div className="overflow-hidden pb-20 ourVisionSlider">
              <div className="px-4">
                  {
                  our_Team.length >= 4 ?
                    <Slider {...settings}>
                        {our_Team.map((team) => (
                          <div key={team.id} className="text-center bg-white p-8 shadow-sm rounded-2xl overflow-hidden h-full">
                            <div className="relative">
                              <Image className='mx-auto team_image' src={team.image} width="100" height="100" alt="Your Image" />
                            </div>
                            <h2 className='text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold pt-6 pb-3 text-[#d4983d]'>{team.name}</h2>
                            <h3 className='text-lg 2xl:text-xl font-bold pb-6'>{team.degnigation}</h3>
                            <p className='text-lg text-gray-700 tracking-wider'>{`${team.details.replace(regex, " ").substring(0, 27)}...`}</p>
                            <div className='text-center flex justify-center'>
                              <button onClick={()=>getSingleTeam(team.id)} className="text-[#d4983d] mt-4 text-sm font-medium flex items-center gap-1">Read More...</button>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  :            
                  <div className='flex flex-wrap space-x-4 items-center justify-center'>
                    {our_Team.map((team) => (
                      <div key={team.id} className="text-center bg-white p-8 shadow-sm rounded-2xl h-[400px]">
                        <div className="relative">
                          <Image className='mx-auto team_image' src={team.image} width="100" height="100" alt="Your Image" />
                        </div>
                        <h2 className='text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold pt-6 pb-3 text-[#d4983d]'>{team.name}</h2>
                        <h3 className='text-lg 2xl:text-xl font-bold pb-6'>{team.degnigation}</h3>
                        <p className='text-lg text-gray-700 tracking-wider'>{`${team.details.replace(regex, " ").substring(0, 27)}...`}</p>
                        <div className='text-center flex justify-center'>
                          <button onClick={()=>getSingleTeam(team.id)} className="text-[#d4983d] mt-4 text-sm font-medium flex items-center gap-1">Read More...</button>
                        </div>
                      </div>
                    ))}
                    </div>
                  }
              </div>
            </div>
          </div>

          {/* <!-- Main modal --> */}
          {singleTeam === true ? 
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-xl m-4 sm:m-0">
                <div className='mt-6 text-center'>
                    <div className="relative">
                      <Image className='mx-auto team_image' src={team.image} width="100" height="100" alt="Your Image" />
                    </div>
                    <h2 className='text-xl sm:text-2xl md:text-4xl font-bold pt-6 pb-3 text-[#d4983d]'>{team.name}</h2>
                    <h3 className='text-lg sm:text-xl font-bold pb-6'>{team.degnigation}</h3>
                    <div className='text_details'>
                      <div className='text-start' dangerouslySetInnerHTML={{ __html: team.details }}></div>
                    </div>
                </div>
            
                <button className="absolute top-0 right-0 p-2 m-2" onClick={()=>setSingleTeam(false)}>
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

export default OurTeem; 
