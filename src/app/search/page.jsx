'use client'
import LogoSlider from "../../components/logoSlider";
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { productSearch, singleProduct } from "../../../servises/action/product";
import Loader from "@/components/loaders/loader";
import SingleProductDetails from "@/components/product_details";
import '../../components/pagination/pagination.css';

const Search =()=> {
	
	const [singleProducts, setSingleProducts] = useState(false);
    const [singleProductShow, setSingleProductShow] = useState({});
	const [loading, setLoading] = useState(true);
    const [searchProduct, setSearchProduct] = useState([]);
	const [search, setSearch] = useState('');

	const showProduct = async (slug) => {
		setSingleProducts(true);
	try {
		const { data } = await singleProduct(slug);
		setSingleProductShow(data.product);
		setLoading(true);
	} catch (error) {
		console.error(error);
	}
	}

	const {
		register,
		handleSubmit,watch,
		formState: { errors },
	  } = useForm();


	const getSearchProduct = async () => {
		try {
			const { data } = await productSearch();
			setSearchProduct(data.products);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	const onSubmit = async (searchData) => {
		console.log(search.length);
			try {
				const { data } = await productSearch(searchData);
			  setSearchProduct(data.products);
		  } catch (error) {
				console.log(error, "search error");
		  }
		
	  };

	  // pagination start 
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 12;
  
	useEffect(() => {
	  const endOffset = itemOffset + itemsPerPage;
	  setCurrentItems(searchProduct.slice(itemOffset, endOffset));
	  setPageCount(Math.ceil(searchProduct.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, searchProduct]);
  
	const handlePageClick = (event) => {
	  const newOffset = event.selected * itemsPerPage;
	  setItemOffset(newOffset);
	};
	// pagination end 
	

	const regex = /(<([^>]+)>)/gi;

	const searchInputValue = watch("search")

	useEffect(() => {
		getSearchProduct();
    }, []);

	useEffect(() => {	
		if (searchInputValue === "") {
		getSearchProduct();
	} 
}, [searchInputValue])

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
				{singleProducts ?
					<div className='container mx-auto pt-5 px-4 md:px-[99px]'>
						<button onClick={() => setSingleProducts(false)} className="flex items-center justify-center gap-2 rounded-full border-amber-400 font-bold pr-5 pl-3 py-2 border-0 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"> <MdOutlineKeyboardDoubleArrowLeft className="text-[21px]" /> Back </button>
					</div>
				: ''}

				{singleProducts ? 
				<div>
					{loading ? 
						 <SingleProductDetails passSingleProduct={singleProductShow} />
						: 
						<Loader/>
					}
				</div>
			: 
				<>
				{loading ? <Loader /> : 	
					<div className='bodybg'>
						<div className='container mx-auto px-4 md:px-[99px]'>
							<div className="py-8 pl-3">
								<h2 className='title_font_size font-bold pb-6 text-[#d4983d] uppercase'>Search Results </h2>
								<div className="relative w-full">
									<form onSubmit={handleSubmit(onSubmit)}>
										<input  {...register("search")} type="text" size="15" className="bg-transparent outline outline-offset-2 outline-0 border-r-0 border-l-0 border-t-0 border border-[#d4983d] text-gray-900 text-sm block w-full px-2 md:px-4 py-4" placeholder="Search" required />
										<button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
											<FiSearch className='text-2xl text-sky-800' />
										</button>
									</form>
								</div>
							</div>
						</div>

						<div className='container mx-auto pb-20 px-4 md:px-[99px]'>
							<div className="flex flex-wrap items-center">
								{currentItems && currentItems.map((items) => (
									<div key={items.id} className="w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 h-full">
										<div className="p-3">
											<div className="bg-white shadow-md hover:shadow-2xl rounded-lg p-3 text-center cursor-pointer">
												{items.front_thumbnails &&(
													<div className="h-[150px] w-full mx-auto py-5 cursor-pointer" onClick={()=>showProduct(items.slug)}>
														<Image src={items.front_thumbnails} className="mx-auto py-2"
														 width={200}
														 height={150}
														 style={{ height: '100%', width: 'auto' }} 
														 alt='img' />
													</div>
												)}
												<h6 onClick={()=>showProduct(items.slug)} className="hover:text-[#d4983d] text-sm font-bold text-[#d4983d]">{`${items.name.replace(regex, " ").substring(0, 6)}`}...</h6>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="flex justify-center">
								<ReactPaginate
									breakLabel="..."
									nextLabel=">"
									onPageChange={handlePageClick}
									pageRangeDisplayed={1}
									pageCount={pageCount}
									previousLabel="<"
									renderOnZeroPageCount={null}
									containerClassName="pagination"
									pageLinkClassName="page-num"
									nextLinkClassName="page-num"
									previousLinkClassName="page-num"
									activeClassName="active"
								/>
								
							</div>
						</div>
						
					</div>
					}
					</>
					}	
				</div>
			
				<LogoSlider />
			</>
		)
}


export default Search;
