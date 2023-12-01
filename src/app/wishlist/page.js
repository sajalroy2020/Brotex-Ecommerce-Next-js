"use client";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoSlider from "../../components/logoSlider";
import {
  removeItem,
  resetCart,
} from "../../../features/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";
import {
  passProductContact,
  removeProduct,
} from "../../../servises/action/product";
import Loader from "@/components/loaders/loader";
import axios from "axios";

export default function Product() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);
  const isLodding = useSelector((state) => state.cart.isLodding);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [productComments, setProductComments] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [ip, setIP] = useState("");

  const removeWishlistProduct = async (id) => {
    dispatch(removeItem(id));
    try {
      const { data } = await removeProduct(id);
      showRemoveMessage();
    } catch (error) {
      console.error(error);
    }
  };

  function showRemoveMessage() {
    toast.success("Product remove successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  const onSubmit = async (productData) => {
    const item = cartProduct.map((product, index) => ({
      product_id: product.product_id ? product.product_id : product.id,
      comment: productComments[index] || "",
    }));

    let allProductData = {
      ip_address: ip,
      items: item,
      data: productData,
    };
    try {
      const { data } = await passProductContact(allProductData);
      showToastMessage();
      document.getElementById("RequestForm").reset();
      dispatch(resetCart());
    } catch (error) {
      console.log(error, "product contact error");
    }
  };

  function showToastMessage() {
    toast.success("Request send successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

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
        <div className="bodybg">
          <div className="container mx-auto pt-10 pb-20 px-4 md:px-[99px]">
            <div className="pt-5 pl-2">
              <h2 className="title_font_size font-bold pb-2 text-[#d4983d] uppercase">
                Your Wishlist
              </h2>
              <h6 className="text-sm font-semibold text-red-600 md:pb-5">
                * To submit your comments, click the Submit Selection button on the <br/> Product Enquiry Request Form (your selection is temporarily saved).
              </h6>
            </div>
            <form id="RequestForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap pt-4">
                <div className="w-full md:w-6/12 xl:w-8/12">
                  {isLodding ? (
                    <Loader />
                  ) : (
                    <div className="flex flex-wrap">
                      {cartProduct.map((items, index) => (
                        <div
                          key={items.id}
                          className="w-full sm:w-6/12 md:w-full xl:w-6/12"
                        >
                          <div className="p-2">
                            <div className="bg-white p-6 rounded-lg shadow-2xl mb-1">
                              <div className="flex justify-end">
                                <div
                                  onClick={() =>
                                    removeWishlistProduct(items.id)
                                  }
                                  className="cursor-pointer flex gap-2 w-22 items-center text-[10px] rounded-full px-2 py-1 mr-1 text-gray-500 border-gray-4300 border hover:text-[#fff] hover:border-[#fff] hover:bg-[#d4983d] transition-all ease-out duration-300"
                                >
                                  Remove{" "}
                                  <RxCrossCircled className="text-[14px]" />
                                </div>
                              </div>

                              <div className="">
                                <div className="h-[150px] w-full">
                                  <Image
                                    className="mx-auto py-2"
                                    src={items.front_thumbnails}
                                    alt="IMG"
                                    width={200}
                                    height={150}
                                    style={{ height: "100%", width: "auto" }}
                                  />
                                </div>
                                <div className="">
                                  <h2 className="text-lg font-semibold">
                                    {items.name}
                                  </h2>
                                  <div className="py-2 flex items-center">
                                    <h6 className="text-sm font-medium">
                                      Style Number :
                                    </h6>
                                    <p className="text-gray-700">
                                      {items.style_number}
                                    </p>
                                  </div>
                                  <div className="flex items-center flex-wrap">
                                    <h6 className="text-sm font-medium">
                                      Composition :
                                    </h6>
                                    <p className="text-gray-700">
                                      100% Recycled Polyester{" "}
                                    </p>
                                  </div>
                                  
                                </div>
                              </div>
                              <div className="pt-2">
                                <label className="">Comment : </label>
                                <div className="pt-1">
                                  <input
                                    type="text"
                                    id={`productComment${items.product_id}`}
                                    value={productComments[index] || ""}
                                    onChange={(e) => {
                                      const updatedComments = [
                                        ...productComments,
                                      ];
                                      updatedComments[index] = e.target.value;
                                      setProductComments(updatedComments);
                                    }}
                                    className="w-full h-20 px-2 border rounded border-gray-400"
                                    placeholder="Write comment"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full md:w-6/12 xl:w-4/12 mt-10 md:mt-0">
                  <div className="">
                    <div className="p-6 bg-white rounded-xl shadow-2xl ml-0 md:ml-4">
                      <h6 className="text-xl sm:text-3xl font-bold pb-3 text-center text-[#d4983d] uppercase">
                        Inquiry Form
                      </h6>
                      <p className="text-gray-700 text-center">
                        Kindly utilize the provided form to submit your inquiry.{" "}
                        <br />
                        Our dedicated team commits to a prompt response within
                        24 hours.
                      </p>
                      <div className="">
                        <div className="w-full">
                          <div className="pt-8">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                              Name :
                            </label>
                            <input
                              {...register("client_name", { required: true })}
                              type="text"
                              id="text"
                              className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                              placeholder="Your Name"
                              required
                            />
                            {errors.client_name &&
                              errors.client_name.type == "required" && (
                                <p className="text-red-600">
                                  {" "}
                                  Please enter your name{" "}
                                </p>
                              )}
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="pt-8">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                              Company Name :
                            </label>
                            <input
                              {...register("company_name", { required: true })}
                              type="text"
                              id="text"
                              className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                              placeholder="Your Company Name"
                              required
                            />
                            {errors.company_name &&
                              errors.company_name.type == "required" && (
                                <p className="text-red-600">
                                  {" "}
                                  Please enter your company name{" "}
                                </p>
                              )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Email Address :
                        </label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          id="text"
                          className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                          placeholder="Your Email Address"
                          required
                        />
                        {errors.email && errors.email.type == "required" && (
                          <p className="text-red-600">
                            {" "}
                            Please enter your email{" "}
                          </p>
                        )}
                      </div>

                      <div className="w-full">
                        <div className="pt-6">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Phone Number :
                          </label>
                          <input
                            {...register("phone", { required: true })}
                            type="number"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                            placeholder="Your Phone Number"
                            required
                          />
                          {errors.phone && errors.phone.type == "required" && (
                            <p className="text-red-600">
                              {" "}
                              Please enter your email{" "}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="pt-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                          Message :
                        </label>
                        <textarea
                          {...register("message", { required: true })}
                          className="focus:amber-border-400 focus:border-0 resize rounded-md w-full bg-gray-50 border border-gray-400 p-5"
                          row="9"
                        ></textarea>
                        {errors.message &&
                          errors.message.type == "required" && (
                            <p className="text-red-600">
                              {" "}
                              Please enter your email{" "}
                            </p>
                          )}
                      </div>

                      <div className="pt-10 text-center">
                        <button
                          type="submit"
                          className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"
                        >
                          {" "}
                          Submit Enquiry{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LogoSlider />
    </>
  );
}
