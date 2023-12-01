"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { singleNews } from '../../../../servises/action/all';

export default function News({params}){
    const regex = /(<([^>]+)>)/gi;
    const [newsfeedText, setNewsfeedText] = useState({});
	const getSingleNews = async (slug) => {
        try {
            const { data } = await singleNews(slug);
			setNewsfeedText(data.newsfeed);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        let slug = params.slug;
        getSingleNews(slug);
      }, [params.slug]);


    return(
        <>
            <div className='bodybg'>
				<div className='container mx-auto pt-10 pb-20'>
					<div className="flex flex-wrap px-4 md:px-10">
                        <div className="w-full">
                            <div className="bg-white shadow-xl rounded-xl">
                                <Image className="rounded-t-xl object-cover" src={newsfeedText.thumble} alt='img'
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '200px' }}
                                 />

                                 <div className="p-8 mx-auto">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-8/12 mx-auto">
                                            <h2 className="text-2xl md:text-5xl font-bold text-[#d4983d]">
                                                {newsfeedText.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap pt-12 px-0 md:px-20 lg:px-40">
                                        <div className="w-full md:w-3/12">
                                            <Image className="rounded-full" src="/image/rezvy.jpg" width="150" height="90" alt='lgo' />
                                            <p className="text-gray-400 text-sm pt-3">Meet the author</p>
                                            <h4 className="tet-xl py-2 font-bold text-[#d4983d]"> MD. Hasan Rezvy </h4>
                                            <p className="text-gray-400 text-sm"> Marketing & Merchandising Manager</p>
                                            <p className="text-gray-400 text-sm pb-5"> rezvy@brotexbd.com</p>
                                            <hr></hr>
                                        </div>
                                        <div className="w-full md:w-9/12 pb-12">
                                            <div className="pl-0 md:pl-8">
                                                <div className="text-gray-700 leading-loose" dangerouslySetInnerHTML={{ __html: newsfeedText.details }} />
                                            </div>
                                        </div>
                                        <div className="w-full"><hr /></div>

                                        <div className="flex flex-wrap justify-center pb-10 md:justify-start space-x-2 pt-4">
                                            <p className="w-full pb-3 text-[#d4983d]">Related Tags:: </p>
                                            <Link className="text-lg font-medium text-[#d4983d]" href={'/'}>#{newsfeedText.tegs}</Link>
                                        </div>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                
        </>
    )
}
