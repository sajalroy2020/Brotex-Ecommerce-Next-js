'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { homepageVideo, sectionOne, sectionThree, sectionTwo } from "../../../servises/action/all";
import MainLoader from "../loaders/main_loader";
import LogoSlider from "../logoSlider";

export default function HomeMain() {

    const [sectiononeText, setSectiononeText] = useState({});
    const [sectionTwoText, setSectionTwoText] = useState({});
    const [sectionThreeText, setSectionThreeText] = useState({});
    const [video, setVideo] = useState({});
    const [loading, setLoading] = useState(true);

    function getStorage(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getSectionOne = async () => {
        try {
            const { data } = await sectionOne();
            setSectiononeText(data.setting);
            setStorage('sectiononeText', data.setting);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    const getSectionTwo = async () => {
        try {
            const { data } = await sectionTwo();
            setSectionTwoText(data.setting);
            setStorage('sectionTwoText', data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    const getSectionThree = async () => {
        try {
            const { data } = await sectionThree();
            setSectionThreeText(data.setting);
            setStorage('sectionTwThreeText', data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    // const getCertificate = async () => {
    //     try {
    //         const { data } = await ourCertificate();
    //         setCertificate(data.setting);
    //         setStorage('getCertificateText', data.setting);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const getVideo = async () => {
        try {
            const { data } = await homepageVideo();
            setVideo(data.setting);
            setStorage('video', data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (getStorage('sectiononeText') == null) {
            getSectionOne();
        } else {
            setSectiononeText(getStorage('sectiononeText'));
            setLoading(false);
            getSectionOne();
        }

        if (getStorage('sectionTwoText') == null) {
            getSectionTwo();
        } else {
            setSectiononeText(getStorage('sectionTwoText'));
            getSectionTwo();
        }

        if (getStorage('sectionThreeText') == null) {
            getSectionThree();
        } else {
            setSectiononeText(getStorage('sectionThreeText'));
            getSectionThree();
        }

        if (getStorage('video') == null) {
            getVideo();
        } else {
            setSectiononeText(getStorage('video'));
            getVideo();
        }
    }, []);

    return (
        <>
            {loading ? <MainLoader /> : <>
                {video.value ? (<div className="relative service_video h-auto md:h-[650px] overflow-auto">
                    <div dangerouslySetInnerHTML={{ __html: video.value }} />
                </div>) : null}

                <div
                    style={{
                        height: 'auto',
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className='' >
                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='py-20 w-full 2xl:block hidden'>
                                <div className='mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap items-start'>
                                        <div className='w-full md:w-6/12 lg:w-7/12 xl:w-6/12 text-center md:text-left'  >
                                            <h1 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>{sectiononeText.title}</h1>
                                            <p className='text_align text-xl mb-10 text-gray-600 tracking-wider'>{sectiononeText.value}</p>
                                            <Link href={"/services"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Products & Services</Link>
                                        </div>
                                        <div className='w-full md:w-6/12 lg:w-5/12 xl:w-6/12 mt-8 md:mt-0'>
                                            <div className="pl-0 md:pl-10 mt-0 2xl:mt-4"  >
                                                <video style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }} className="rounded" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop>
                                                    <source src="/video/content_one.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='py-10 md:py-20 w-full 2xl:hidden'>
                                <div className='mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap'>
                                        <div className='w-full lg:w-7/12 xl:w-6/12 text-center md:text-left'  >
                                            <h1 className='title_font_size font-bold pb-10 text-[#d4983d]'>{sectiononeText.title}</h1>
                                        </div>
                                        <div className='w-full lg:w-7/12 xl:w-6/12'></div>
                                        <div className="w-full md:w-6/12 lg:w-7/12 xl:w-6/12 text-center md:text-left">
                                            <p className='text_align text-xl mb-10 text-gray-600 tracking-wider'>{sectiononeText.value}</p>
                                            <Link href={"/services"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Products & Services</Link>
                                        </div>
                                        <div className="w-full md:w-6/12 xl:w-6/12 lg:w-5/12">
                                            <div className="pl-0 md:pl-10 mt-8 md:mt-0 mx-auto">
                                                <video style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }} className="rounded" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop>
                                                    <source src="/video/content_one.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='pb-20 2xl:block hidden'>
                                <div className='block mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap items-start'>
                                        <div className='w-full md:w-6/12 lg:w-5/12 xl:w-6/12 mt-8 md:mt-0'>
                                            <div className="pr-0 md:pr-10 mt-0 2xl:mt-4">
                                                <video style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }} className="rounded" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop>
                                                    <source src="/video/pant-vedio.mp4" type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                        <div className='w-full md:w-6/12 lg:w-7/12 xl:w-6/12 mt-8 md:mt-0'>
                                            <div className='text-center md:text-right' >
                                                <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>{sectionTwoText.title}</h2>
                                                <p className='text_align text-xl text-gray-500 tracking-wider pb-10'>{sectionTwoText.value}</p>
                                                <Link href={"/our-promise"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Our Promise</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'bottom',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='w-full 2xl:hidden'>
                                <div className='mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap'>
                                        <div className="w-full md:w-6/12 lg:w-5/12 xl:w-6/12"></div>
                                        <div className='w-full lg:w-7/12 xl:w-6/12 text-center md:text-right' >
                                            <h1 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>{sectionTwoText.title}</h1>
                                        </div>
                                        <div className="w-full">
                                            <div className='flex flex-wrap'>
                                                <div className="w-full md:w-6/12 lg:w-5/12 xl:w-6/12">
                                                    <div className="pr-0 md:pr-10 mt-8 md:mt-0 mx-auto">
                                                        <video style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }} className="rounded" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop>
                                                            <source src="/video/pant-vedio.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-6/12 lg:w-7/12 xl:w-6/12 text-center md:text-right">
                                                    <p className='text_align text-xl mb-10 text-gray-600 tracking-wider'>{sectionTwoText.value}</p>
                                                    <Link href={"/services"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Our Promise</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'bottom',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='pb-20 2xl:block hidden'>
                                <div className='mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap items-start'>
                                        <div className='w-full md:w-6/12 lg:w-7/12 xl:w-6/12 text-center md:text-left'  >
                                            <h2 className='title_font_size font-bold pb-10 text-[#d4983d] uppercase'>{sectionThreeText.title}</h2>
                                            <p className='text_align text-xl pb-10 text-gray-500 tracking-wider'>{sectionThreeText.value}</p>
                                            <Link href={"/our-promise"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Our Mission And Vision</Link>
                                        </div>
                                        <div className='w-full md:w-6/12 lg:w-5/12 xl:w-6/12 mt-8 md:mt-0'>
                                            <div className="pl-0 md:pl-10 mt-0 2xl:mt-4">
                                                <Image className="mx-auto rounded" src="/image/home-down-img.png" width="600" height="100" alt='lgo' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                backgroundImage: `url(/image/Untitled-1.png)`,
                                height: 'auto',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'bottom',
                                backgroundAttachment: 'fixed',
                            }}>
                            <div className='py-10 md:py-20 w-full 2xl:hidden'>
                                <div className='mx-auto container px-4 md:px-[99px]'>
                                    <div className='flex flex-wrap'>
                                        <div className='w-full lg:w-7/12 xl:w-6/12 text-center md:text-left'  >
                                            <h1 className='title_font_size font-bold pb-10 text-[#d4983d]'>{sectionThreeText.title}</h1>
                                        </div>
                                        <div className='w-full lg:w-7/12 xl:w-6/12'></div>

                                        <div className="w-full md:w-6/12 lg:w-7/12 xl:w-6/12 text-center md:text-left">
                                            <p className='text_align text-xl mb-10 text-gray-600 tracking-wider'>{sectionThreeText.value}</p>
                                            <Link href={"/our-promise"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Our Mission And Vision</Link>
                                        </div>
                                        <div className="w-full md:w-6/12 lg:w-5/12 xl:w-6/12">
                                            <div className="pl-0 md:pl-10 mt-8 md:mt-0 mx-auto">
                                                <Image className="mx-auto rounded" src="/image/home-down-img.png" width="600" height="100" alt='lgo' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='pb-20'>
                            <div className='mx-auto container px-4 md:px-[99px]'>
                                <div className='flex flex-wrap items-center'>
                                    <div className='w-full md:w-6/12 lg:w-6/12 xl:w-6/12 mt-8 md:mt-0'>
                                        <div className='flex flex-wrap gap-x-8 gap-y-8'>
                                            <Image   src="/image/logo-2.jpeg" width="180" height="30" alt='logo' />
                                            <Image src="/image/global.jpeg" width="100" height="80" alt='lgo' />
                                            <Image src="/image/logo-3.jpeg" width="130" height="80" alt='logo' />
                                        </div>
                                    </div>
                                    <div className='w-full md:w-6/12 lg:w-6/12 xl:w-6/12 text-center md:text-right mt-8 md:mt-0'  >
                                        <h2 className='title_font_size font-bold pb-10 text-[#d4983d]'>{certificate.title}</h2>
                                        <p className='text_align text-xl text-gray-500 tracking-wider pb-8'>{certificate.value}</p>
                                        <Link href={"/our-promise"} className="rounded-full border-amber-400 font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> See All Certifications</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <LogoSlider />
            </>
            }
        </>
    )
}
