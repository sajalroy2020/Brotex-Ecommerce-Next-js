"use client";
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios";
import { IoLogoYoutube } from 'react-icons/io';
import { FaLinkedin, FaBars } from 'react-icons/fa';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { MdOutlineFavorite } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { MdKeyboardArrowDown, } from 'react-icons/md'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { category, product, productType, getCartProduct, get_feature_product } from '../../../servises/action/product';
import { getCart, } from '../../../features/CartSlice';
import { getProductSuccess } from '../../../features/productSlice';
import { IoIosArrowUp } from "react-icons/io";
import { getfacebook, getinstagram, getlinkedin, gettwitter, getyoutube } from '../../../servises/action/all';


export default function Header(){

    const cartProduct = useSelector((state) => state.cart.cart);

    //Responsive Button Start
    const [click, setClick] = useState(false)
    const [serviceShow, setServiceShow] = useState(false)
    const [productMenu, setProductMenu] = useState(false)
    const [productTypeMenu, setProductTypeMenu] = useState(false)
    const [featureProduct, setFeatureProduct] = useState([]);
    // category api 
    const [categories, setCategory] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [facebook, setFacebook] = useState({});
    const [instagram, setInstagram] = useState({});
    const [linkedin, setLinkedin] = useState({});
    const [twitter, setTwitter] = useState({});
    const [youtube, setYoutube] = useState({});
    const [ip, setIP] = useState("");


    const handleClick = () => setClick(!click);
    const dispatch = useDispatch();

    const serviceClick = () => {
        if (serviceShow == false) {
            setServiceShow(true)
        }
        if (serviceShow == true){
            setServiceShow(false)
        }
    }

    const productClick = () => {
        if (productMenu == false) {
            setProductMenu(true)
        }
        if (productMenu == true){
            setProductMenu(false)
        }
    }

    const productTypeClick = () => {
        if (productTypeMenu == false) {
            setProductTypeMenu(true)
        }
        if (productTypeMenu == true){
            setProductTypeMenu(false)
        }
    }

    const getFeatureProduct = async () => {
        try {
            const { data } = await get_feature_product();
            setFeatureProduct(data.product.slice(0, 1));
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    const cartProductGet= async (ip) => {
        try {
            const { data } = await getCartProduct(ip);
            data.wishlist.map((item)=>{
                dispatch(getCart(item));
            })
        } catch (error) {
            console.error(error);
        }
    };

    const getCategory = async () => {
        try {
            const { data } = await category();
            setCategory(data.categories);
        } catch (error) {
            console.error(error);
        }
    };

    const getProductType = async () => {
        try {
            const { data } = await productType();
            setProductTypes(data.product_type);
        } catch (error) {
            console.error(error);
        }
    };

    const getProduct = async () => {
        try {
            const { data } = await product();
            dispatch(getProductSuccess(data.product));
        } catch (error) {
            console.error(error);
        }
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
        getCategory();
        getProductType();
        getProduct();
        getData();
        cartProductGet(ip);
        getFeatureProduct();
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
    }, [ip]);


    return (
        <>
            <div className="... sticky top-0 py-2 z-30 shadow-sm"
                style={{
                    backgroundImage: `url(/image/banner-bg.png)`,
                    height: 'auto',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="mx-auto container px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center justify-between w-20 sm:w-auto">
                            <Link href={'/'}>
                                <Image src="/image/logo.png" width="60" height="50" alt='logo' />
                            </Link>

                            <div className="xl:block hidden pl-6">
                                <ul className="flex flex-wrap space-x-6 items-center">
                                    <li><Link className="text-[#d4983d] hover_color text-base 2xl:text-xl font-medium" href={"/our-company"}>Our Company </Link></li>
                                    <li className="relative dropdown inline-block">
                                        <Link href={"/product"}><span className="mainDrropdownButton cursor-pointer text-[#d4983d] hover_color flex items-center justify-between text-base 2xl:text-xl font-medium">Products<MdKeyboardArrowDown className="ml-2 mt-1 text-2xl drropdownArrow" /></span></Link>

                                        <div className="w-[500px] hidden drropdownMenu bg-gray-100 p-6 customeShadow top-7 absolute left-0 rounded-md">
                                            <div className="flex flex-wrap gap-x-12">
                                                <div className='mx-auto'>
                                                    <Link href={"/product"}><h6 className="text-sm font-medium text-gray-900 pb-4">All Product</h6></Link>
                                                    {featureProduct && featureProduct.map((items) => (
                                                        <div className="border rounded p-4" key={items.id}>
                                                            <div className="h-[170px] w-full cursor-pointer" onClick={()=>showProduct(items.slug)}>
															    <Image src={items.front_thumbnails} className="mx-auto py-2"
															    width={200}
															    height={170}
															    style={{ height: '100%', width: 'auto' }} 
															    alt='img' />
														    </div>
                                                        </div>
                                                        
                                                    ))}
                                                </div>
                                                <div>
                                                    <Link href={"/product-type"}> <h6 className="text-sm font-medium text-gray-900 pb-3">Product Type</h6></Link>
                                                    <ul className="text-xs space-y-2 font-normal text-gray-600">
                                                        {productTypes && productTypes.map((items) => (
                                                            <li key={items.id}>
                                                                <Link className="hover_color"
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

                                                <div>
                                                    <Link href={"/category"}><h6 className="text-sm font-medium text-gray-900 pb-3">Category</h6></Link>
                                                    <ul className="text-xs space-y-2 font-normal text-gray-600">
                                                        {categories && categories.map((items) => (
                                                            <li key={items.id}>
                                                                <Link
                                                                    href={{
                                                                        pathname: '/product',
                                                                        query: {
                                                                            category_name: items.name,
                                                                        }
                                                                    }}>{items.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link className="text-[#d4983d] hover_color text-base 2xl:text-xl font-medium" href={"/services"}>Services</Link></li>
                                    <li><Link className="text-[#d4983d] hover_color text-base 2xl:text-xl font-medium" href={"/our-promise"}> Our Promise</Link></li>
                                    <li><Link className="text-[#d4983d] hover_color text-base 2xl:text-xl font-medium" href={"/global-locations"}>Global Locations </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                            <div className='md:block hidden '>
                                <Link href={"/contact"} className="text-base 2xl:text-xl flex gap-4 items-center rounded-full px-4 py-1 mr-1 text-[#d4983d] border-[#d4983d] border hover:text-[#d4983d] hover:border-amber-600 transition-all ease-out duration-300">
                                    <MdOutlinePermPhoneMsg className="text-xl xl:text-2xl text-[#d4983d]" />
                                    Contact
                                </Link>
                            </div>
                            
                            <Link href={"/search"}><FiSearch className="text-[#d4983d] h-6 w-6 hover_color " /> </Link>
                            <div className="relative">
                                <Link href={"/wishlist"}>
                                    <MdOutlineFavorite className="text-[#d4983d] sm:h-8 sm:w-8 h-6 w-6" />
                                    <div className="w-5 h-5 text-xs absolute -top-4 sm:left-1 left-0 transform translate-x-4 bg-[#d4983d] rounded text-white flex items-center justify-center">
                                        <p>{cartProduct.length}</p>
                                    </div>
                                </Link>
                            </div>

                            {youtube && youtube.value && <Link href={youtube.value} target="_blank"><IoLogoYoutube className="text-[#d4983d] h-6 w-6 hover_color " /></Link>}
                            {linkedin && linkedin.value && <Link href={linkedin.value} target="_blank"><FaLinkedin className="text-[#d4983d] h-6 w-6 hover_color " /> </Link>}
                            {facebook && facebook.value && <Link href={facebook.value} target='_blank'><BiLogoFacebookSquare className="text-[#d4983d] h-7 w-7 hover_color " /></Link>}
                            {instagram && instagram.value && <Link href={instagram.value} target='_blank'><AiFillInstagram className="text-[#d4983d] h-7 w-7 hover_color " /></Link>}
                            {twitter && twitter.value && <Link href={twitter.value} target='_blank'><AiFillTwitterSquare className="text-[#d4983d] h-7 w-7 hover_color " /></Link>}
                        </div>
                        {/* serviceClick */}
                        <div onClick={handleClick} className="navigation xl:hidden pl-2 sm:pl-4">
                            {click ? (<>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7 text-[#d4983d]">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>) : (<FaBars className='text-2xl cursor-pointer text-[#d4983d]' />)}
                        </div>
                    </div>
                </div>
            </div>


            {/* ============================================== */}
            {click ? (
                <div className="sideBar fixed inset-0 flex items-start mx-[26px] my-[76px] justify-center z-50">
                    <div className="bg-white menu-list mobile_bar rounded-md sticky w-full shadow-xl py-2 h-[400px] overflow-y-auto">
                        <ul>
                            <li className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <Link className="pl-3 bg-main-bg-color rounded-md" onClick={handleClick} href={"/"}>
                                    <span className="text-base pl-4 text-text-color-1 text">Home</span>
                                </Link>
                            </li>
                            <li onClick={handleClick} className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <Link className="pl-3 bg-main-bg-color rounded-md" href={"/our-company"}>
                                    <span className="text-base pl-4 text-text-color-1 text">Our Company</span>
                                </Link>
                            </li>

                            <li className="cursor-pointer list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <div onClick={()=>serviceClick()} className="px-3 bg-main-bg-color rounded-md flex justify-between items-center">
                                    <span className="text-base pl-4 text-text-color-1 text"> Product</span>
                                    {serviceShow ? <IoIosArrowUp className='text-xl text-gray-700' /> :
                                        <MdKeyboardArrowDown className='text-2xl text-gray-700' />
                                    }
                                </div>

                                {serviceShow ?
                                    <ul className='px-4 py-2 ml-4 bg-gray-50 rounded'>
                                        <li className='mb-3 mt-4' onClick={handleClick}>
                                            <Link href={'/product'} className="px-3 flex justify-between items-center bg-main-bg-color rounded-md">
                                                <span className="text-base pl-1 text-text-color-1 text">Product</span>
                                            </Link>
                                        </li>
                                        <li className='mb-3 mt-4'>
                                            <span onClick={()=>productClick()} className="px-3 flex justify-between items-center bg-main-bg-color rounded-md">
                                                <span className="text-base pl-1 text-text-color-1 text">Category</span>
                                                {productMenu ? <IoIosArrowUp className='text-xl text-gray-700' /> :
                                                    <MdKeyboardArrowDown className='text-2xl text-gray-700' />
                                                }
                                            </span>
                                            {productMenu ?
                                                <>
                                                    {categories && categories.map((items) => (
                                                        <div key={items.id} className='py-3'>
                                                            <Link onClick={handleClick} className="pl-6 bg-main-bg-color rounded-md"
                                                                href={{
                                                                    pathname: '/product',
                                                                    query: {
                                                                        category_name: items.name,
                                                                    }
                                                                }}
                                                            >
                                                                <span className="text-base pl-4 text-gray-500 text">{items.name}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </>
                                                : "" }
                                        </li>
                                        <li className='mt-4 mb-3'>
                                            <span onClick={()=>productTypeClick()} className="px-3 flex justify-between items-center bg-main-bg-color rounded-md">
                                                <span className="text-base pl-1 text-text-color-1 text">Product Type</span>
                                                {productTypeMenu ? <IoIosArrowUp className='text-xl text-gray-700' /> :
                                                    <MdKeyboardArrowDown className='text-2xl text-gray-700' />
                                                }
                                            </span>
                                            {productTypeMenu ?
                                                <>
                                                    {productTypes && productTypes.map((items) => (
                                                        <div key={items.id} className='py-3'>
                                                            <Link onClick={handleClick} className="pl-6 bg-main-bg-color rounded-md"
                                                                href={{
                                                                    pathname: '/product',
                                                                    query: {
                                                                        type_name: items.slug,
                                                                    }
                                                                }}>
                                                                <span className="text-base pl-4 text-gray-500 text">{items.name}</span>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </>
                                                : "" }
                                        </li>
                                    </ul>
                                    : ""}
                            </li>

                            <li className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <Link onClick={handleClick} className="pl-3 bg-main-bg-color rounded-md" href={"/services"}>
                                    <span className="text-base pl-4 text-text-color-1 text">Services</span>
                                </Link>
                            </li>

                            <li className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <Link onClick={handleClick} className="pl-3 bg-main-bg-color rounded-md" href={"/our-promise"}>
                                    <span className="text-base pl-4 text-text-color-1 text">Our Promise</span>
                                </Link>
                            </li>
                            <li className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <Link onClick={handleClick} className="pl-3 bg-main-bg-color rounded-md" href={"/global-locations"}>
                                    <span className="text-base pl-4 text-text-color-1 text">Global Locations</span>
                                </Link>
                            </li>
                            <li className=" list-item hover:bg-side-hover-color my-4 mx-3 rounded-lg">
                                <div className='pl-7 w-[160px]'>
                                    <Link onClick={handleClick} href={"/contact"} className="pl-3 flex gap-4 items-center text-base 2xl:text-xl rounded-full px-4 py-1 mr-1 text-[#d4983d] border-amber-400 border hover:text-[#d4983d] hover:border-amber-400 transition-all ease-out duration-300">
                                        <MdOutlinePermPhoneMsg className='text-xl text-[#d4983d]' /> Contact
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : ''}
        </>
    )
}
