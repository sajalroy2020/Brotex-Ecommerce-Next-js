'use client'
import LogoSlider from "../../components/logoSlider";
import Link from 'next/link'
import ProductRoadmap from "../../components/products_and_services/productRoadmap";
import { useEffect, useState } from "react";
import { convertionRoadmap, productDevelopment } from "../../../servises/action/all";
import Loader from "@/components/loaders/loader";
import Image from 'next/image';

const Products_services = () => {
    const [productDevelopmentText, setProductDevelopmentText] = useState({});
    // const [productAttributeText, setProductAttributeText] = useState({});
    const [convertionRoadmapText, setConvertionRoadmapText] = useState({});
    const [loading, setLoading] = useState(true);
    const [modalVideo, setModalVideo] = useState(false);

    function getStorage(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getProductDevelopment = async () => {
        try {
            const { data } = await productDevelopment();
            setProductDevelopmentText(data.setting);
            setStorage('productDevelopmentText', data.setting);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    // const getProductAttribute = async () => {
    //     try {
    //         const { data } = await productAttribute();
    //         setProductAttributeText(data.setting);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const getconvertionRoadmap = async () => {
        try {
            const { data } = await convertionRoadmap();
            setConvertionRoadmapText(data.setting);
            setStorage('convertionRoadmapText', data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // getProductAttribute();

        if (getStorage('convertionRoadmapText') == null) {
            getconvertionRoadmap();
        } else {
            setConvertionRoadmapText(getStorage('convertionRoadmapText'));
            setLoading(false);
            getconvertionRoadmap();
        }

        if (getStorage('productDevelopmentText') == null) {
            getProductDevelopment();
        } else {
            setProductDevelopmentText(getStorage('productDevelopmentText'));
            setLoading(false);
            getProductDevelopment();
        }
    }, []);

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <div className="relative service_video h-auto md:h-[650px] overflow-auto">
            <iframe src="https://player.vimeo.com/video/887328751?h=c6d8075918&amp;background=1&amp;loop=1&amp;autoplay=1&amp;autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>

            <div
                style={{
                    backgroundImage: `url(/image/banner-bg.png)`,
                    height: 'auto',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {loading ? <Loader /> : <>

                    <div className='bodybg'>
                        {/* ============================ */}
                        <div className='container mx-auto px-4 md:px-[99px]'>
                            <div className="flex flex-wrap items-center py-10 md:py-20">
                                <div className='w-full md:w-7/12 lg:w-6/12 text-center md:text-left'>
                                    <h2 className='title_font_size font-bold text-[#d4983d] md:uppercase'>{productDevelopmentText.title}</h2>
                                    <p className='text_align text-xl pt-6 mb-10 text-gray-700 tracking-wider'>{productDevelopmentText.value}</p>
                                    <Link href={"/services"} className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Products & Services</Link>
                                </div>
                                <div className='w-full md:w-5/12 lg:w-6/12'>
                                    <div className="pl-0 md:pl-10 mt-8">
                                        <div className="w-full">
                                            <div className="background-service flex items-center justify-center">
                                                <div className="relative cursor-pointer ">
                                                    <Image
                                                        src="/image/Logo-Type.png"
                                                        className="mx-auto rounded h-[110px] w-[210px] mb-10"
                                                        width="100"
                                                        height="100"
                                                        alt="img"
                                                    />
                                                    <Image onClick={() => setModalVideo(true)}
                                                        src="/image/video-btn.png"
                                                        className="mx-auto rounded h-[50px] w-[50px] z-20"
                                                        width="100"
                                                        height="100"
                                                        alt="img"
                                                    />
                                                    <div className="absolute top-[135px] left-[66px]" onClick={() => setModalVideo(true)}>
                                                        <span className="relative flex h-20 w-20">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* ============================ */}
                        <ProductRoadmap convertionRoadmapText={convertionRoadmapText} />
                    </div>
                </>}

            </div>

            <LogoSlider />


            {/* <!-- Main modal --> */}
            {modalVideo === true ?
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="relative bg-white rounded-lg shadow-lg p-6 m-4 sm:m-0 xl:w-[50%]">
                        <div className='mt-8 flex justify-center items-center'>
                            <video className="w-[100%] rounded" webkit-playsinline playsinline autoplay="autoplay" muted defaultMuted loop  opts={opts}>
                                <source src="http://admin.brotexbd.com/public/videos/sports.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <button className="absolute top-0 right-0 p-2 m-2" onClick={() => setModalVideo(false)}>
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
export default Products_services;
