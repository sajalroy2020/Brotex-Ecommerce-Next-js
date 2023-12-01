"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function SingleNews({singleNewsfeedText}){

    return(
        <>
            <div className='bodybg'>
				<div className='container mx-auto px-4 md:px-[99px] pt-10 pb-20'>
					<div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="bg-white shadow-xl rounded-xl">
                                <Image className="rounded-t-xl object-cover" src={singleNewsfeedText.thumble} alt='img'
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%' }}
                                 />

                                 <div className="p-8 mx-auto">
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-8/12 mx-auto">
                                            <h2 className="title_font_size font-bold text-[#d4983d]">
                                                {singleNewsfeedText.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap pt-12 px-4 md:px-[99px] lg:px-20">
                                        <div className="w-full md:w-3/12 text-center">
                                            <div className="relative">
                                                <Image className='mx-auto team_image' src={singleNewsfeedText.author.image} width="100" height="100" alt="Your Image" />
                                            </div>
                                            <p className="text-gray-400 text-xl font-bold pt-3">{singleNewsfeedText.author.name}</p>
                                            <p className="text-gray-400 text-sm pb-5">{singleNewsfeedText.author.email}</p>
                                            <hr></hr>
                                        </div>
                                        <div className="w-full md:w-9/12 pb-12">
                                            <div className="pl-0 md:pl-8">
                                                <div className="text-gray-700 leading-loose" dangerouslySetInnerHTML={{ __html: singleNewsfeedText.details }} />
                                            </div>
                                        </div>
                                        <div className="w-full"><hr /></div>

                                        <div className="flex flex-wrap justify-center pb-10 md:justify-start space-x-2 pt-4">
                                            <p className="w-full pb-3 text-[#d4983d]">Related Tags:: </p>
                                            <Link className="text-lg font-medium text-[#d4983d]" href={'/'}>#{singleNewsfeedText.tegs}</Link>
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

