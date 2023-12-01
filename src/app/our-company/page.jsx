"use client";
import React, { useEffect, useState } from "react";
import LogoSlider from "../../components/logoSlider";
import OurTeem from "./ourTeem";
import Link from "next/link";
import {
  category,
  product,
  productType,
} from "../../../servises/action/product";
import Image from "next/image";
import {
  about,
  get_our_founder,
  get_our_team,
} from "../../../servises/action/all";
import Loader from "@/components/loaders/loader";

const OurGroup = () => {
  const [sectionAbout, setSectionAbout] = useState({});
  // const [sectionGlobalNetwork, setGlobalNetwork] = useState({});
  const [ourTeam, setOurTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [founder, setFounder] = useState({});
  const [categories, setCategory] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const regex = /(<([^>]+)>)/gi;

  function getStorage(key) {
    JSON.parse(localStorage.getItem(key));
  }
  function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const getAbout = async () => {
    try {
      const { data } = await about();
      setSectionAbout(data.setting);
      setStorage("sectionAbout", data.setting);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const getGlobalNetwork = async () => {
  //   try {
  //     const { data } = await globalNetwork();
  //     setGlobalNetwork(data.setting);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getOurTeam = async () => {
    try {
      const { data } = await get_our_team();
      setOurTeam(data.our_team);
    } catch (error) {
      console.error(error);
    }
  };

  const getFounder = async () => {
    try {
      const { data } = await get_our_founder();
      setFounder(data.our_team);
      setStorage("founder", data.our_team);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await category();
      setCategory(data.categories.slice(0, 1));
    } catch (error) {
      console.error(error);
    }
  };

  const getProductType = async () => {
    try {
      const { data } = await productType();
      setProductTypes(data.product_type.slice(0, 1));
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await product();
      setProducts(data.product.slice(0, 1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOurTeam();
    // getGlobalNetwork();
    getProduct();
    getProductType();
    getCategory();

    if (getStorage("founder") == null) {
      getFounder();
    } else {
      setFounder(getStorage("founder"));
      setLoading(false);
      getFounder();
    }

    if (getStorage("sectionAbout") == null) {
      getAbout();
    } else {
      setSectionAbout(getStorage("sectionAbout"));
      setLoading(false);
      getAbout();
    }
  }, []);

  const url_v =
    "https://drive.google.com/file/d/1Q0XvWiOfYUoSnKsLf0MMNZXxUemVv1S8/view?usp=sharing";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/image/banner-bg.png)`,
          height: "auto",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="bodybg">
            {/*====================================*/}
            <div className="container px-4 md:px-[99px] mx-auto pt-10 md:pt-20">
              <div className="bg-white rounded-md p-6 lg:p-8 xl:p-10 2xl:p-16 shadow-md">
                <div className="flex flex-wrap items-center">
                  <div className="w-full">
                    <h2 className="title_font_size font-bold text-[#d4983d] uppercase text-center pb-5">
                      {sectionAbout.title}
                    </h2>
                    <p className="text_align text-xl text-gray-700 tracking-wider">
                      {sectionAbout.value}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 pt-7 pb-4">
                      TOGETHER, WE ACHIEVE MORE...
                    </h2>
                    <p className="text_align text-xl text-gray-700 tracking-wider">
                      We are working with customers in Europe, America, Asia.
                      Our main products are woven outerwear, loungewear,
                      knitwear, swimwear, activewear, accessories and homewear.
                      Brotex Limited is managed by highly qualiﬁed and
                      experienced personnel. Skilled workers are employed for
                      each operation. We believe the success comes from its
                      practice of maintaining the standard of quality, time
                      schedule and meeting the buyers need
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*====================================*/}
            <div className="container px-4 md:px-[99px] mx-auto mb-10 md:mb-20 mt-10 md:mt-20">
              <div className="bg-white rounded-md p-6 lg:p-8 xl:p-10 2xl:p-16 shadow-md">
                <div className="flex flex-wrap items-center">
                  <div className="w-full">
                    <div className="">
                      <h2 className="title_font_size font-bold text-[#d4983d] text-center ">
                        VALUES
                      </h2>
                      <p className="text_align text-xl text-gray-700 tracking-wider pt-8 pb-10">
                        <b>Ownership:</b>
                        We foster a culture of ownership, where each individual
                        within our organization takes responsibility for their
                        role and contributions. We believe in mutual respect and
                        collaboration, recognizing that our success is a result
                        of the collective effort of our team.
                      </p>
                      <p className="text_align text-xl text-gray-700 tracking-wider">
                        <b>Excellence:</b>
                        We are committed to excellence in every aspect of our
                        business. With an unwavering determination to succeed,
                        we approach challenges with a growth mindset, constantly
                        seeking improvement and delivering exceptional results
                        to exceed expectations.
                      </p>
                      <p className="text_align text-xl text-gray-700 tracking-wider pt-4">
                        <b>Social Responsibility:</b>
                        We deeply care about the well-being of future
                        generations and our beloved country. Environmental
                        stewardship is at the core of our practices, as we
                        prioritize the implementation of green technologies and
                        environmentally-friendly management strategies to
                        minimize our ecological footprint.
                      </p>
                      <p className="text_align text-xl text-gray-700 tracking-wider pt-4">
                        <b>Recognition and Reward:</b>
                        We value and appreciate the efforts of our employees. By
                        acknowledging their hard work and achievements, we
                        enhance their self-esteem and job satisfaction. This
                        positive reinforcement fosters an improved attitude
                        towards their work, driving excellence and creating a
                        supportive work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*====================================*/}
            <div className="pb-20">
              <div className="container px-4 xl:px-[99px] mx-auto">
                <div className="bg-white rounded-md p-6 lg:p-8 xl:p-10 2xl:p-16 shadow-md">
                  <div className="px-4 md:px-[99px] text-center mb-16">
                    <h2 className="title_font_size font-bold pb-0 sm:pb-5 text-[#d4983d] uppercase">
                      Speech of our founder
                    </h2>
                  </div>
                  <div className="lg:flex md:px-12 space-y-4 sm:space-y-0">
                    <div className="mx-auto">
                      <div className="sm:h-[400px] h-[300px] w-[300px] sm:w-[400px] mx-auto">
                        <Image
                          src={founder.image}
                          className="mx-auto lg:mx-0 rounded-md"
                          width={400}
                          height={400}
                          style={{ height: "100%", width: "100%" }}
                          alt="img"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:pl-16 text-center lg:text-left pt-6 md:pt-0">
                      <h4 className="text-2xl sm:text-3xl font-bold pb-4 pt-4 lg:pt-0 text-[#d4983d]">
                        {founder.name}
                      </h4>
                      <h2 className="text-xl font-bold pb-4 text-gray-700">
                        {founder.degnigation}
                      </h2>
                        <p className="font-normal sm:font-medium text-gray-700 tracking-wider">
                          {founder.details ? (
                            <> {founder.details.replace(regex, " ")} </>
                          ) : (
                            ""
                          )}
                        </p>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/*====================================*/}

            <OurTeem our_Team={ourTeam} />

            {/*====================================*/}
            <div className="pb-20 w-full">
              <div className="mx-auto container px-4 md:px-[99px]">
                <div className="flex flex-wrap items-center mx-0 md:mx-12">
                  <h2 className="w-full title_font_size font-bold pb-16 text-center text-[#d4983d] uppercase">
                    Brotex Products
                  </h2>

                  {productTypes &&
                    productTypes.map((items) => (
                      <div
                        key={items.id}
                        className="w-full md:w-4/12 text-center"
                      >
                        <div className="h-[280px] w-full">
                          <Image
                            src={items.image}
                            className="mx-auto py-2"
                            width={200}
                            height={280}
                            style={{ height: "100%", width: "auto" }}
                            alt="img"
                          />
                        </div>
                        <div className="text-center mt-8">
                          <Link
                            href="/product_type"
                            className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"
                          >
                            New Innovation{" "}
                          </Link>
                        </div>
                      </div>
                    ))}

                  {products &&
                    products.map((items) => (
                      <div
                        key={items.id}
                        className="w-full md:w-4/12 text-center mt-12 md:mt-0"
                      >
                        <div className="h-[380px] w-full">
                          <Image
                            src={items.front_thumbnails}
                            className="mx-auto py-2"
                            width={200}
                            height={380}
                            style={{ height: "100%", width: "auto" }}
                            alt="img"
                          />
                        </div>
                        <div className="text-center mt-8">
                          <Link
                            href="/product"
                            className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"
                          >
                            All Products{" "}
                          </Link>
                        </div>
                      </div>
                    ))}

                  {categories &&
                    categories.map((items) => (
                      <div
                        key={items.id}
                        className="w-full md:w-4/12 text-center mt-12 md:mt-0"
                      >
                        <div className="h-[280px] w-full">
                          <Image
                            src={items.image}
                            className="mx-auto py-2"
                            width={200}
                            height={280}
                            style={{ height: "100%", width: "auto" }}
                            alt="img"
                          />
                        </div>
                        <div className="text-center mt-8">
                          <Link
                            href="/category"
                            className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"
                          >
                            Product Categories
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 md:px-[99px]">
              <div className="text-center">
                <h2 className="title_font_size font-bold pb-5 text-[#d4983d]">
                  Our Production Capacity{" "}
                </h2>
              </div>

              <div className="flex flex-wrap pb-20 mx-4 md:mx-0">
                <div className="w-full">
                  <div className="background-container">
                    <div className="h-full flex justify-center items-center">
                      <Image
                        src="/image/Production_Capacity.svg"
                        className="mx-auto rounded h-[500px] w-[90%] md:w-[70%] xl:w-[60%] my-6 md:my-28"
                        width="100"
                        height="800"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*====================================*/}
            <div className="pb-20">
              <div className="container px-4 md:px-[99px] mx-auto">
                <div className=" text-center">
                  <h2 className="title_font_size font-bold pb-5 text-[#d4983d] uppercase">
                    {" "}
                    Our Company Overview{" "}
                  </h2>
                </div>
              </div>

              <div className="container px-4 md:px-[99px] mx-auto">
                <div className="flex flex-wrap">
                  <iframe
                    className="w-full h-[600px] rounded-md"
                    src="https://www.youtube.com/embed/-23RVQ17REA"
                    title="Brotex Production Unit"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/*====================================*/}
          </div>
        )}
      </div>
      <LogoSlider />
    </>
  );
};

export default OurGroup;
