'use client'
import Image from 'next/image'
import Link from 'next/link'
import axios from "axios";
import { MdOutlineFavorite } from 'react-icons/md';
import { useEffect, useState } from "react";
import { addwishlistProduct, removeProduct, singleProduct } from '../../../../servises/action/product';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeItem } from '../../../../features/CartSlice';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { toast } from 'react-toastify';
import Loader from '@/components/loaders/loader';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';

export default function Product({params}){

    const [product, setProduct] = useState([]);
	const [ip, setIP] = useState("");
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart.cart);
    const [loading, setLoading] = useState(false);

    const getSingleProduct = async (slug) => {
        try {
            const { data } = await singleProduct(slug);
            setProduct(data.product);
            setLoading(true);
        } catch (error) {
            console.error(error);
        }
    };

   const getData = async () => {
		const res = await axios.get("https://api.ipify.org/?format=json");
		setIP(res.data.ip);
	};


  const addToCart = async (ip, id) => {
    const wishlistProduct ={
        "ip_address": ip,
        "product_id": id
    };
    try {
        const { data } = await addwishlistProduct(wishlistProduct);
        dispatch(getCart(product));
        showToastMessage();
    } catch (error) {
        console.error(error);
    }
  }

  const removeWishlistProduct = async (id) =>{
    try {
        const { data } = await removeProduct(id);
        dispatch(removeItem(id))
        showRemoveMessage();
    } catch (error) {
        console.error(error);
    }
  }

  function showToastMessage() {
    toast.success('Product added successfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  function showRemoveMessage() {
    toast.success('Product remove successfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  useEffect(() => {
    let slug = params.slug;
    getSingleProduct(slug);
    getData()
  }, [params.slug]);

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
                {loading ? 
                    <div className='bodybg'>
                        <div className='container mx-auto pt-10 pb-20 px-4 md:px-[99px]'>
                            <Tabs>
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-5/12">
                                        <div className="bg-white shadow-xl p-5 rounded-xl">
                                            <TabPanel>
                                            {product.front_thumbnails &&( <Image src={product.front_thumbnails} className="mx-auto py-2" width="300" height="100" alt='img' /> )}
                                            </TabPanel>
                                            <TabPanel>
                                            {product.back_thumbnails &&( <Image src={product.back_thumbnails} className="mx-auto py-2" width="300" height="100" alt='' /> )}
                                            </TabPanel>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-5/12 ">
                                        <div className="flex items-center justify-center md:justify-start gap-3 md:hidden mt-5">
                                            <TabList>
                                                {product.front_thumbnails &&
                                                    <Tab>
                                                        <button className="bg-white shadow-xl p-2 rounded-md h-[80px] w-[60px]">
                                                            <Image className="mx-auto" src={product.front_thumbnails} 
                                                                width={50}
                                                                height={70}
                                                                style={{ height: '100%', width: 'auto' }} 
                                                                alt='IMG' 
                                                            />
                                                        </button>
                                                    </Tab>
                                                }
                                                {product.back_thumbnails &&
                                                    <Tab>
                                                        <button className="bg-white shadow-xl p-2 rounded-md h-[80px] w-[60px]">
                                                            <Image className="mx-auto" src={product.back_thumbnails} 
                                                                width={50}
                                                                height={70}
                                                                style={{ height: '100%', width: 'auto' }} 
                                                                alt='' 
                                                            />
                                                        </button>
                                                    </Tab>
                                                }
                                            </TabList>
                                        </div>

                                        <div className="pl-0 md:pl-8 pt-8 md:pt-0">
                                            <h2 className="text-2xl font-semibold text-[#d4983d]">{product.name}</h2>
                                            <div className="py-4">
                                                <h6 className="text-sm font-medium text-[#d4983d]">Style Number :</h6>
                                                <p className="text-gray-700">{product.style_number}</p>
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-medium text-[#d4983d]">Composition :</h6>
                                                <p className="text-gray-700 w-[70%]">{product.composition}</p>
                                            </div>
                                            <div className="pt-4">
                                                <label className="text-sm font-medium text-[#d4983d]">Colour : </label>
                                                <span>{product.color_name}</span>
                                            </div>
                                            <div className='hidden md:block'>
                                                <div className="flex items-center justify-center md:justify-start gap-2">
                                                    <TabList>
                                                        <Tab>
                                                            <button className="bg-white shadow-xl p-2 rounded-md h-[80px] w-[60px]">
                                                                <Image className="mx-auto" src={product.front_thumbnails} 
                                                                    width={50}
                                                                    height={70}
                                                                    style={{ height: '100%', width: 'auto' }} 
                                                                    alt='IMG' 
                                                                />
                                                            </button>
                                                        </Tab>
                                                        {product.back_thumbnails &&
                                                            <Tab>
                                                                <button className="bg-white shadow-xl p-2 rounded-md h-[80px] w-[60px]">
                                                                    <Image className="mx-auto" src={product.back_thumbnails} 
                                                                        width={50}
                                                                        height={70}
                                                                        style={{ height: '100%', width: 'auto' }} 
                                                                        alt='' 
                                                                    />
                                                                </button>
                                                            </Tab>
                                                        }
                                                    </TabList>
                                                </div>
                                            </div>
                                            <div className="w-[200px] md:mx-0">
                                                <div className="pt-6 md:pt-10 w-22"> 
                                                {
                                                    1 <= cartProduct.length && cartProduct.some((p)=> p.id == product.id) ? 
                                                    (<button onClick={() => removeWishlistProduct(product.id)} className="flex items-center justify-center gap-2 rounded-full border-amber-400 font-bold px-4 py-2 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Remove Wishlist <MdOutlineFavorite className="h-5 w-5 text-[#f8b95a]" /> </button>) 
                                                    : cartProduct.some((p)=> p.product_id == product.id) ?
                                                    (<button onClick={() => removeWishlistProduct(product.id)} className="flex items-center justify-center gap-2 rounded-full border-amber-400 font-bold px-4 py-2 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Remove Wishlist <MdOutlineFavorite className="h-5 w-5 text-[#f8b95a]" /> </button>) 
                                                    :(<button onClick={() => addToCart(ip, product.id)} className="flex items-center justify-center gap-2 rounded-full border-amber-400 font-bold px-6 py-2 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> Add to Wishlist <MdOutlineFavorite className="h-5 w-5" /> </button>)
                                                }
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap space-x-2 pt-4">
                                                <p className='text-[#d4983d]'>Product Keywords : </p>
                                                <Link className="text-sm font-medium " href={'/'}>#{product.key_words}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                : <Loader />}
            </div>
        </>
    )
}
