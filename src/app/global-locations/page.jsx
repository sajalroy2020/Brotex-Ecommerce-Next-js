'use client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSlider from "../../components/logoSlider";
import Image from 'next/image';
import Link from 'next/link';
import './globalLocations.css';

const GlobalLocations =()=> {

	 var settings = {
	      dots: true,
	      infinite: true,
	      speed: 800,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      initialSlide: 0,
	      arrows: true,
	      autoplay: true,
	      autoplaySpeed: 3000,
	      className: "center",
	      centerMode: true,
	      centerPadding: "350px",
	      responsive: [
	      	{
	          breakpoint: 1280,
	          settings: {
	            centerPadding: "200px",
	          }
	        },
	        {
	          breakpoint: 1024,
	          settings: {
	            centerPadding: "100px",
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            centerPadding: "50px",
	            arrows: true,
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
					<div className='bodybg'>
						<div className="mx-auto">
							<Image className='w-[100%] pt-6' src="/image/World-Map.png" alt='image' 
								width={100}
								height={100}
								style={{ height: '73%', width: '73%', margin: 'auto' }} 
							/>
							<div className='w-full -translate-y-12'>
								<div className='container mx-auto px-4 md:px-[99px]'>
									<div className="text-center pt-[100px] xl:pt-0">
										<h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>Global Locations</h2>
									</div>
								</div>
								<div className="overflow-hidden globalLocationSlider w-full">
									<div className="mx-auto container px-4 md:px-[20px] lg:px-[99px] hidden sm:block">
										<div className="flex flex-wrap xl:gap-6 mx-auto pt-8 pb-8 xl:pb-0 ">
											<div className="w-full xl:w-2/12"></div>
											<div className="w-full md:w-6/12 xl:w-4/12">
												<div className="text-center p-8 whiteShadow rounded-2xl bg-white relative mr-0 md:mr-3 mb-10 md:mb-0 mx-0 sm:mx-24 md:mx-0">
													<Image className="m-auto absolute left-[40%] right-[50%] -top-7 xl:-top-8" src="/image/flag-bangladesh_0.svg" width="100" height="90" alt='lgo' />
													<h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold py-6 uppercase'>Bangladesh</h3>
													<h3 className='text-lg sm:text-xl text-gray-600 font-semibold pb-6'><span className='text-[#d4983d]'>Office</span> / Dhaka</h3>

													<div className="flex-wrap flex justify-center items-center space-y-4">
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-800 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Showroom</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Production</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Sourcing </p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-300 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Design & Innovation </p>
														</div>

														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-700 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Business Development</p>
														</div>
													</div>
													<div className="pb-5 pt-3 flex justify-center flex-col items-center space-y-2">
														{/* <Link href="/contact" className="rounded-full font-bold px-12 py-3 border-2 hover:text-[#d4983d] hover:border-amber-400 hover:bg-white bg-[#d4983d] text-white border-amber-400 transition-all ease-out duration-300">
														Contact
														</Link> */}
														<Link href="/contact" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300">Contact</Link>

														<Link href="https://www.google.com/maps/place/BRO+TEX+LIMITED+(Buying+Unit)/@23.871707,90.402979,16z/data=!4m6!3m5!1s0x3755c53abe7a9247:0xa953a3064a7d082a!8m2!3d23.8717074!4d90.4029786!16s%2Fg%2F11stjv1kfr?hl=en&entry=ttu" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300" target='_blank'>
															View On Map
														</Link>
													</div>
													<p className='text-sm text-gray-700 tracking-wider w-[80%] mx-auto'> House 25 (Ground ﬂoor) Road 11 Sector 6, Uttara, Dhaka 1230</p>
												</div>
											</div>
											<div className="w-full md:w-6/12 xl:w-4/12">
												<div className="text-center p-8 whiteShadow rounded-2xl bg-white relative ml-0 md:ml-3 mt-8 md:mt-0 mx-0 sm:mx-24 md:mx-0">
													<Image className="m-auto absolute left-[40%] right-[50%] -top-7 xl:-top-8" src="/image/flag-bangladesh_0.svg" width="100" height="90" alt='lgo' />
													<h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold py-6 uppercase'>Bangladesh</h3>
													<h3 className='text-lg sm:text-xl text-gray-600 font-semibold pb-6'><span className='text-[#d4983d]'>Factory</span> / Dhaka</h3>

													<div className="flex-wrap flex justify-center items-center space-y-4">
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-800 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Showroom</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Production</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Sourcing </p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-300 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Design & Innovation </p>
														</div>

														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-700 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Business Development</p>
														</div>
													</div>
													<div className="pb-5 pt-3 flex justify-center flex-col items-center space-y-2">
														<Link href="/contact" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300">
														Contact
														</Link>

														<Link href="https://maps.app.goo.gl/zLJzWsnmKgczVCRY6" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300" target='_blank'>
															View On Map
														</Link>
													</div>
													<p className='text-sm text-gray-700 tracking-wider w-[80%] mx-auto'> 126/2 Sheikh Bari, Dobadia,
														Uttar Khan, Dhaka-1230</p>
												</div>
											</div>
											<div className="w-full xl:w-2/12"></div>
										</div>
									</div>

									<div className="px-2 md:px-12 sm:hidden">
										<Slider {...settings}>
											<div className="pt-6">
												<div className="text-center p-8 whiteShadow rounded-2xl bg-white relative mr-0 md:mr-3 mb-10 md:mb-0 mx-0 sm:mx-24 md:mx-0">
													<Image className="m-auto absolute left-[40%] right-[50%] -top-7 xl:-top-8" src="/image/flag-bangladesh_0.svg" width="100" height="90" alt='lgo' />
													<h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold py-6 uppercase'>Bangladesh</h3>
													<h3 className='text-lg sm:text-xl text-gray-600 font-semibold pb-6'><span className='text-[#d4983d]'>Office</span> / Dhaka</h3>

													<div className="flex-wrap flex justify-center items-center space-y-4">
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-800 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Showroom</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Production</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Sourcing </p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-300 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Design & Innovation </p>
														</div>

														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-700 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Business Development</p>
														</div>
													</div>
													<div className="pb-5 pt-3 flex justify-center flex-col items-center space-y-2">
														
														<Link href="/contact" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300">Contact</Link>

														<Link href="https://www.google.com/maps/place/BRO+TEX+LIMITED+(Buying+Unit)/@23.871707,90.402979,16z/data=!4m6!3m5!1s0x3755c53abe7a9247:0xa953a3064a7d082a!8m2!3d23.8717074!4d90.4029786!16s%2Fg%2F11stjv1kfr?hl=en&entry=ttu" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300" target='_blank'>
															View On Map
														</Link>
													</div>
													<p className='text-sm text-gray-700 tracking-wider w-[80%] mx-auto'> House 25 (Ground ﬂoor) Road 11 Sector 6, Uttara, Dhaka 1230</p>
												</div>
											</div>
										
											<div className="pt-6">
												<div className="text-center p-8 whiteShadow rounded-2xl bg-white relative ml-0 md:ml-3 mt-8 md:mt-0 mx-0 sm:mx-24 md:mx-0">
													<Image className="m-auto absolute left-[40%] right-[50%] -top-7 xl:-top-8" src="/image/flag-bangladesh_0.svg" width="100" height="90" alt='lgo' />
													<h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold py-6 uppercase'>Bangladesh</h3>
													<h3 className='text-lg sm:text-xl text-gray-600 font-semibold pb-6'><span className='text-[#d4983d]'>Factory</span> / Dhaka</h3>

													<div className="flex-wrap flex justify-center items-center space-y-4">
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-800 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Showroom</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Production</p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-red-500 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Sourcing </p>
														</div>
														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-300 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Design & Innovation </p>
														</div>

														<div className="w-32 flex justify-center flex-col items-center">
															<div className="bg-sky-700 h-3 w-3 rounded-full"></div>
															<p className="text-gray-700 w-full">Business Development</p>
														</div>
													</div>
													<div className="pb-5 pt-3 flex justify-center flex-col items-center space-y-2">
														<Link href="/contact" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300">
														Contact
														</Link>

														<Link href="https://maps.app.goo.gl/zLJzWsnmKgczVCRY6" className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300" target='_blank'>
															View On Map
														</Link>
													</div>
													<p className='text-sm text-gray-700 tracking-wider w-[80%] mx-auto'> 126/2 Sheikh Bari, Dobadia,
														Uttar Khan, Dhaka-1230</p>
												</div>
											</div>

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

export default GlobalLocations;

