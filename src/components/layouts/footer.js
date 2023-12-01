'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoYoutube } from 'react-icons/io';
import { FaLinkedin, FaBars } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { passSubscription } from '../../../servises/action/all';
import { productType } from '../../../servises/action/product';
import { getfacebook, getinstagram, getlinkedin, gettwitter, getyoutube } from '../../../servises/action/all';

export default function Footer() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [productTypes, setProductTypes] = useState([]);
    const d = new Date();
    const [footerSubmitted, setFooterSubmitted] = useState(false);
    const [facebook, setFacebook] = useState({});
    const [instagram, setInstagram] = useState({});
    const [linkedin, setLinkedin] = useState({});
    const [twitter, setTwitter] = useState({});
    const [youtube, setYoutube] = useState({});

    const onFooterSubmit = async (subscriptionData) => {
        try {
            const { data } = await passSubscription(subscriptionData);
            showToastMessage();
        } catch (error) {
            console.log(error, 'contact error');
        };

        setFooterSubmitted(true);
        setTimeout(() => {
            setFooterSubmitted(false);
        }, 1000);
    };

    const getProductType = async () => {
        try {
            const { data } = await productType();
            setProductTypes(data.product_type.slice(0, 4));
        } catch (error) {
            console.error(error);
        }
    };

    function showToastMessage() {
        toast.success('Subscribe successfully !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    function getStorage(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getFacebook = async () => {
        try {
            const { data } = await getfacebook();
            setStorage('facebook', data.setting);
            setFacebook(data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    const getInstagram = async () => {
        try {
            const { data } = await getinstagram();
            setStorage('instagram', data.setting);
            setInstagram(data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    const getTwitter = async () => {
        try {
            const { data } = await gettwitter();
            setStorage('twitter', data.setting);
            setTwitter(data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    const getLinkedin = async () => {
        try {
            const { data } = await getlinkedin();
            setStorage('linkedin', data.setting);
            setLinkedin(data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    const getYoutube = async () => {
        try {
            const { data } = await getyoutube();
            setStorage('youtube', data.setting);
            setYoutube(data.setting);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProductType();
        if (getStorage('facebook') == null) {
            getFacebook();
        } else {
            setFacebook(getStorage('facebook'));
            getFacebook();
        }

        if (getStorage('instagram') == null) {
            getInstagram();
        } else {
            setInstagram(getStorage('instagram'));
            getInstagram();
        }

        if (getStorage('twitter') == null) {
            getTwitter();
        } else {
            setTwitter(getStorage('twitter'));
            getTwitter();
        }

        if (getStorage('linkedin') == null) {
            getLinkedin();
        } else {
            setLinkedin(getStorage('linkedin'));
            getLinkedin();
        }

        if (getStorage('youtube') == null) {
            getYoutube();
        } else {
            setYoutube(getStorage('youtube'));
            getYoutube();
        }
    }, []);


    return (
        <>
            <footer className="  pt-8 pb-6"
                style={{
                    backgroundImage: `url(/image/banner-bg.png)`,
                    height: 'auto',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="container mx-auto px-4 md:px-[99px]">
                    <div className="flex flex-wrap text-left lg:text-left mb-4">
                        <div className="w-full sm:w-6/12 lg:w-2/12">
                            {/* <Link href={'/'}>
                            <Image src="/image/logo.png" width="60" height="50" alt='logo' />
                        </Link>
                        <p className="text-sm my-4 text-gray-600 select-none pr-0 lg:pr-8 text_align font-medium">
                            Our mission is to set an industry benchmark for ethical business
                            practices by providing a secure working environment. We achieve
                            this by implementing cutting-edge, eco-friendly technologies
                            through a highly trained and knowledgeable workforce, resulting
                            in the utmost level of customer satisfaction. Our commitment to
                            sustainable growth drives us to continuously innovate while
                            maintaining operational efficiencies, ensuring a brighter future
                            for both our company and the world we inhabit.
                        </p> */}
                            <h4 className="text-base 2xl:text-xl font-medium text-[#d4983d] pb-4 pr-0 lg:pr-4">Office Location</h4>
                            <ul className="list-unstyled pr-0 sm:pr-4">
                                <li className='text-gray-500 block text-sm font-medium pr-0 lg:pr-4'>
                                    House 25 (Ground ﬂoor)
                                    Road 11 Sector 6, Uttara, Dhaka 1230
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-6/12 lg:w-2/12 mt-8 sm:mt-0">
                            <h4 className="text-base 2xl:text-xl font-medium text-[#d4983d] pb-4">Factory Location</h4>
                            <ul className="list-unstyled">
                                <li className='text-gray-500 block text-sm font-medium'>
                                    126/2 Sheikh Bari, Dobadia,
                                    Uttar Khan, Dhaka-1230
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-6/12 sm:w-6/12 pl-0 lg:pl-8 ml-auto">
                                    <h4 className="font-medium pb-4 text-[#d4983d] text-base 2xl:text-xl">Product Types</h4>
                                    <ul className="list-unstyled">
                                        {productTypes && productTypes.map((items) => (
                                            <li key={items.id}>
                                                <Link className="hover:text-[#d4983d] font-medium text-gray-500 block pb-2 text-sm"
                                                    href={{
                                                        pathname: '/product',
                                                        query: {
                                                            type_name: items.slug,
                                                        }
                                                    }}
                                                >{items.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-6/12 sm:w-6/12 pl-0 lg:pl-6">
                                    <h4 className="text-base 2xl:text-xl font-medium pb-4 text-[#d4983d]">Company Info</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/our-company"}>Our Company</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/promise"}>Our Promise</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/our-company"}>Meet Our Team</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/our-company"}>History of Brotex</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-6/12 sm:w-6/12 pl-0 lg:pl-8 ml-auto">
                                    <h4 className="text-base 2xl:text-xl font-medium pb-4 text-[#d4983d]">Privacy & Cookies</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/privacy-policy"}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/cookie-policy"}>Cookie Policy</Link>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-6/12 sm:w-6/12 pl-0 lg:pl-4">
                                    <div className='flex lg:justify-end w-full pr-2'>
                                        <span>
                                            <h4 className="text-base 2xl:text-xl font-medium pb-4 text-[#d4983d]">Customer Enquiries</h4>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/contact"}>Contact Us</Link>
                                                </li>
                                                <li>
                                                    <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/global-locations"}> Global Locations </Link>
                                                </li>
                                                {/* <li>
                                        <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/newsfeed"}>Newsfeed</Link>
                                        </li> */}
                                                <li>
                                                    <a className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm font-medium" href={"/image/Brotex.pdf"} download>Download Profile</a>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="w-full lg:w-2/12 pl-0 lg:pl-8">
                        <h4 className="text-base font-medium pb-4 text-[#d4983d]">Privacy & Cookies</h4>
                        <ul className="list-unstyled">
                            <li>
                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm" href={"/privacy-policy"}>Privacy Policy</Link>
                            </li>
                            <li>
                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm" href={"/cookie-policy"}>Cookie Policy</Link>
                            </li>
                        </ul>
                    </div> 
                    <div className="w-full lg:w-2/12 pl-0 lg:pl-8">
                        <h4 className="text-base font-medium pb-4 text-[#d4983d]">Customer Enquiries</h4>
                        <ul className="list-unstyled">
                            <li>
                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm" href={"/contact"}>Contact Us</Link>
                            </li>
                            <li>
                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm" href={"/global-locations"}> Global Locations </Link>
                            </li>
                            <li>
                            <Link className="hover:text-[#d4983d] text-gray-500 block pb-2 text-sm" href={"/newsfeed"}>Newsfeed</Link>
                            </li>
                        </ul>
                    </div>  */}

                        {/* <div className="w-full lg:w-32/12 pl-0 lg:pl-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-xl font-medium pb-4 text-[#d4983d]">Newsletter Subscription</h4>
                            <lable className="text-sm pl-2 text-[#d4983d]"> Email Address : </lable>
                            <input {...register('email', { required: true })} type="email" className="bg-gray-50 outline outline-offset-2 outline-0 border border-gray-400 text-gray-900 text-sm block py-2 px-3 w-full rounded-full" placeholder="Email Address" required />
                            {errors.email && errors.email.type == 'required' && <p className='text-red-600'>Please enter your email</p>}
                            <p className="text-sm my-4 text-gray-500 font-medium"> By clicking Subscribe, I am requesting that Brotex International send me newsletters and updates to this email address. I agree to the <Link href="/">Privacy Policy</Link> & <Link href="/">Cookie Policy.</Link> </p>
                            <div>
                                <button className="rounded-full border-amber-400 font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300">Subscribe</button>
                            </div>
                        </form>
                    </div> */}

                    </div>


                    <div className="flex flex-wrap text-left lg:text-left items-center pb-3">
                        <div className="w-full lg:w-4/12">
                            <form onSubmit={handleSubmit(onFooterSubmit)}>
                                <h4 className="text-base 2xl:text-xl font-medium pb-4 text-[#d4983d]">Newsletter Subscription</h4>
                                <lable className="text-sm pl-2 text-[#d4983d] md:block hidden"> Email Address : </lable>
                                {!footerSubmitted ?
                                    <input {...register('email', { required: true })} type="email" className="bg-gray-50 outline outline-offset-2 outline-0 border border-gray-400 text-gray-900 text-sm block py-2 px-3 w-full rounded-full" placeholder="Email Address" required />
                                    :
                                    <input {...register('email', { required: true })} type="email" value='' className="bg-gray-50 outline outline-offset-2 outline-0 border border-gray-400 text-gray-900 text-sm block py-2 px-3 w-full rounded-full" placeholder="Email Address" required />
                                }
                                {errors.email && errors.email.type == 'required' && <p className='text-red-600'>Please enter your email</p>}
                                <p className="text-sm my-4 text-gray-500"> By clicking Subscribe, I am requesting that Brotex International send me newsletters and updates to this email address. I agree to the <Link href="/">Privacy Policy</Link> & <Link href="/">Cookie Policy.</Link> </p>
                                <div>
                                    <button className="rounded-full font-bold px-6 py-3 bg-[#d4983d] hover:bg-amber-600 text-white transition-all ease-out duration-300">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/12 mt-8 lg:mt-0"></div>
                        <div className="w-full lg:w-7/12">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full sm:w-6/12 lg:w-7/12 ml-auto ">
                                   
                                    <div className='flex lg:justify-center'>
                                        <Image className='' src="/image/QR_Code.png" width="180" height="180" alt='QR_Code' />
                                    </div>

                                </div>
                                <div className="w-full sm:w-6/12 lg:w-5/12 pl-0 lg:pl-8 mt-6 lg:mt-0">
                                    <div className='flex lg:justify-center'>
                                        <div className='pl-0 lg:pl-4 2xl:pl-20'>
                                            <h4 className="text-base 2xl:text-xl font-medium text-[#d4983d] pb-4 lg:text-end"> Our Social Platform </h4>
                                            <div className="flex flex-wrap gap-x-3 gap-y-2 h-full">
                                                {youtube && youtube.value && <button className="group bg-gray-100 hover:bg-amber-600 text-gray-800 shadow-lg h-7 w-7 2xl:h-10 2xl:w-10 flex flex-wrap items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                                    <Link href={youtube.value} target="_blank"><IoLogoYoutube className="text-[#d4983d] h-5 w-5 group-hover:text-white" /></Link>
                                                </button>}
                                                {linkedin && linkedin.value && <button className="group bg-gray-100 hover:bg-amber-600 text-gray-800 shadow-lg h-7 w-7 2xl:h-10 2xl:w-10 flex flex-wrap items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                                    <Link href={linkedin.value} target="_blank"><FaLinkedin className="text-[#d4983d] h-5 w-5 group-hover:text-white  " /> </Link>
                                                </button>}
                                                {facebook && facebook.value && <button className="group bg-gray-100 hover:bg-amber-600 text-gray-800 shadow-lg h-7 w-7 2xl:h-10 2xl:w-10 flex flex-wrap items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                                    <Link href={facebook.value} target='_blank'><BiLogoFacebookSquare className="text-[#d4983d] h-5 w-5 group-hover:text-white  " /></Link>
                                                </button>}
                                                {instagram && instagram.value && <button className="group bg-gray-100 hover:bg-amber-600 text-gray-800 shadow-lg h-7 w-7 2xl:h-10 2xl:w-10 flex flex-wrap items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                                    <Link href={instagram.value} target='_blank'><AiFillInstagram className="text-[#d4983d] h-5 w-5 group-hover:text-white  " /></Link>
                                                </button>}
                                                {twitter && twitter.value && <button className="group bg-gray-100 hover:bg-amber-600 text-gray-800 shadow-lg h-7 w-7 2xl:h-10 2xl:w-10 flex flex-wrap items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                                    <Link href={twitter.value} target='_blank'><AiFillTwitterSquare className="text-[#d4983d] h-5 w-5 group-hover:text-white  " /></Link>
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12">
                        </div>
                    </div>

                    <hr className="mb-6 border-blueGray-300"></hr>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 mx-auto text-center">
                            <div className="text-sm text-gray-500 font-medium py-1">
                                © <span id="get-current-year">{d.getFullYear()} All rights reserved by</span>
                                <Link href="/" className="text-[#d4983d] "> Coder`s Zone</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}