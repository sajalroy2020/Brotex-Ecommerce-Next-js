"use client";
import LogoSlider from "../../components/logoSlider";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { newsfeed, newsfeedLatest, singleNews } from "../../../servises/action/all";
import SingleNews from "./single-news";
import Loader from "@/components/loaders/loader";

const NewsFeed =()=> {

    const [newsfeedText, setNewsfeedText] = useState([]);
    const [newsLatest, setNewsLatest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [singleNewsfeedText, setSingleNewsfeedText] = useState({});
    const [singleNewsCheeck, setSingleNewsCheeck] = useState(false);
 	const regex = /(<([^>]+)>)/gi;

	 const getSingleNews = async (slug) => {
        try {
            const { data } = await singleNews(slug);
			setSingleNewsfeedText(data.newsfeed);
			setSingleNewsCheeck(true);
			setLoading(true);
        } catch (error) {
            console.error(error);
        }
    };

	const getNewsFeed = async () => {
        try {
            const { data } = await newsfeed();
			setNewsfeedText(data.newsfeed.data);
			setLoading(true);
        } catch (error) {
            console.error(error);
        }
    };

	const getNewsfeedLatest = async () => {
        try {
            const { data } = await newsfeedLatest();
			setNewsLatest(data.newsfeed);
        } catch (error) {
            console.error(error);
        }
    };

	useEffect(() => {
        getNewsFeed();
		getNewsfeedLatest();
    }, []);
	

	function formatDate(dateString) {
		const date = new Date(dateString);
	  	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	  	return date.toLocaleDateString('en-US', options);
	}

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

			{singleNewsCheeck ?
				<div className='container mx-auto pt-5 px-4 md:px-[99px]'>
					<button onClick={() => setSingleNewsCheeck(false)} className="flex items-center justify-center gap-2 rounded-full border-amber-400 font-bold pr-5 pl-3 py-2 border-0 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> <MdOutlineKeyboardDoubleArrowLeft className="text-[21px]" /> Back </button>
				</div>
			: ''}

			{singleNewsCheeck ? <SingleNews singleNewsfeedText={singleNewsfeedText} /> : <>

			{loading ? 
				<div className='bodybg'>
					<div className='pt-8'>
						<div className='container mx-auto px-4 md:px-[99px]'>
							<div className="">
								<h2 className='title_font_size font-bold pb-4 text-[#d4983d]'>Newsfeed</h2>
								<p className='text-2xl text-gray-700 tracking-wider pb-6'>Stay Connected</p>
								<hr />
							</div>
						</div>
					</div>

					<div className='pb-16 pt-8'>
						<div className='container mx-auto px-4 md:px-[99px]'>
							<div className='flex flex-wrap'>
								<div className='w-full lg:w-8/12'>
									<div className='flex flex-wrap space-y-4 md:space-y-0'>

										{newsfeedText && newsfeedText.map((newsItem) => (
											<div key={newsItem.id} className='w-full md:w-6/12 pb-6'>
												<div className='bg-white shadow-xl rounded-xl mx-4 pt-4 h-full relative'>
													<div className="h-[200px] w-full cursor-pointer" onClick={()=>getSingleNews(newsItem.slug)}>
														<Image src={newsItem.thumble} className="mx-auto py-2"
														width={200}
														height={200}
														style={{ height: '100%', width: 'auto' }} 
														alt='img' />
													</div>
													<div className='px-5 pt-2 pb-5'>
														<p className="text-xs text-[#d4983d] pb-3"><span className="text-gray-900 text-base font-medium">Jubran</span> | {formatDate(newsItem.created_at)}</p>
														<span onClick={()=>getSingleNews(newsItem.slug)} className="cursor-pointer text-xl font-bold text-[#d4983d]">{`${newsItem.title.substring(0, 50)}...`}</span>
														<p className="text-base text-gray-800 pb-5 pt-4">{`${newsItem.details.replace(regex, " ").substring(0, 70)}...`}</p>
														<div className="flex flex-wrap space-x-2">
															<Link className="text-sm font-medium text-[#d4983d]" href={'/'}>#{newsItem.tegs}</Link>
														</div>
														<div className='absolute bottom-6 right-6'>
															<button onClick={()=>getSingleNews(newsItem.slug)} className="text-[#d4983d] text-sm font-medium flex items-center gap-1">Read More...</button>
														</div>
													</div>
												</div>
											</div>
										))}

									</div>
								</div>
								<div className='w-full lg:w-4/12 pt-10 lg:pt-0'>
									<div className='flex flex-wrap justify-start'>
										<div className="px-4 text-center">
											<h3 className="text-xl font-bold text-[#d4983d] uppercase">Our letest news</h3>
											<p className="text-base text-gray-800 pb-1 pt-3">See the latest announcements, news & updates from our Global Teams. Hit like & follow to stay tuned.</p>
										</div>

										{newsLatest.map((item) => (
											<div key={item.id} className='w-full sm:w-6/12 lg:w-full xl:w-6/12 pt-4'>
												<div className='bg-white shadow-xl rounded-xl mx-2 h-full'>
													<div className='px-5 pt-5 pb-3'>
														<div className="flex-wrap flex items-center justify-between px-2 gap-2">
															<div className="flex-wrap flex justify-between w-full items-center gap-4">
																<div className="h-[40px]">
																	<Image src="/image/logo.png" className=" py-2"
																	width={200}
																	height={40}
																	style={{ height: '100%', width: 'auto' }} 
																	alt='img' />
																</div>
																<div>
																	<h4 className="text-sm font-bold text-[#d4983d]">Brotex</h4>
																	<p className="text-xs text-[#d4983d]">{formatDate(item.created_at)}</p>
																</div>
															</div>
														</div>
														<p className="text-sm text-gray-800 w-full pt-4">{`${item.title.replace(regex, " ").substring(0, 14)}...`}</p>
													</div>
													
													<div className="h-[80px] w-full">
														<Image src={item.thumble} className="mx-auto py-2"
														width={200}
														height={80}
														style={{ height: '100px', width: 'auto' }} 
														alt='img' />
													</div>

													<div className='px-5 pb-5'>
														<button onClick={()=>getSingleNews(item.slug)} className="text-[#d4983d] mt-6 text-sm font-medium flex items-center gap-1">Read More...</button>
													</div>
												</div>
											</div>
										))}

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			: 
				<Loader/>
			}
			
			</>}

			</div>
				<LogoSlider />
			</>
		)
}

export default NewsFeed;
