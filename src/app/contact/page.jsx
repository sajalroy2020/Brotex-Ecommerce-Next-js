"use client";
import LogoSlider from "../../components/logoSlider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { passContact } from "../../../servises/action/all";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useState } from "react";
import { checkInternationalPhone } from "./Validation";

const Search = () => {
  const [phone, setPhone] = useState("");
  const [formatted, setFormatted] = useState("");
  const [valid, setValid] = useState(false);
  const handleChange = (value, data) => {
    setFormatted(value.slice(data.dialCode.length));
    setPhone(value);
    setValid(checkInternationalPhone(value.slice(data.dialCode.length)));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (contactData) => {
    try {
      const { data } = await passContact(contactData);
      showToastMessage();
      setPhone("");
      document.getElementById("ContactForm").reset();
    } catch (error) {
      console.log(error, "contact error");
    }
  };

  function showToastMessage() {
    toast.success("Message send successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

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
        <div className="bodybg pb-20">
          <div className="px-4 pt-12 text-center">
            <h2 className="title_font_size font-bold pb-2 text-[#d4983d] uppercase">
              Contact us
            </h2>
            <h6 className="text-sm sm:text-xl font-semibold text-gray-700 md:pb-5">
              How can we assist you?
            </h6>
          </div>

          <div
            style={{
              backgroundImage: `url(/image/world.svg)`,
              height: "auto",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="py-10">
              <div className="container px-4 md:px-[99px] mx-auto">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full md:w-5/12 ">
                    <div className="p-4 whiteShadow rounded-xl bg-gray-100 mr-0 sm:mr-2 h-full">
                      <h6 className="text-xl sm:text-3xl text-center font-extrabold text-[#d4983d] py-6">
                        CHOOSE BROTEX LIMITED
                      </h6>
                      <Image
                        className="mx-auto rounded"
                        src="/image/contact-img.gif"
                        width="600"
                        height="900"
                        alt="image"
                      />
                      <p className="text-gray-600 p-[6px] mt-6 text-center md:text-left md:mt-[122px] text_align">
                        {`as your trusted garment supplier in Bangladesh. With our
                          state-of-the-art facilities, comprehensive services, and
                          unwavering commitment to excellence, we guarantee
                          exceptional results. Let us be your strategic partner in
                          creating high-quality, trend-setting garments that
                          captivate your customers and drive your brands success.
                          Contact us today to explore the endless possibilities of
                          collaboration with Brotex Limited.`}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-7/12">
                    <div className="px-8 py-6 bg-gray-100 rounded-xl shadow-xl h-full mt-10 md:mt-0">
                      <form id="ContactForm" onSubmit={handleSubmit(onSubmit)}>
                        <h6 className="text-xl sm:text-3xl font-bold pb-3 text-center text-[#d4983d] uppercase">
                          Inquiry Form
                        </h6>
                        <p className="text-gray-700 text-center">
                          Kindly utilize the provided form to submit your
                          inquiry. <br/>Our dedicated team commits to a prompt
                          response within 24 hours.
                        </p>
                        <div className="flex-wrap flex">
                          <div className="w-full md:w-6/12">
                            <div className="pt-5">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                Name :
                              </label>
                              <input
                                {...register("name", { required: true })}
                                type="text"
                                id="text"
                                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                                placeholder="Your Name"
                              />
                              {errors.name &&
                                errors.name.type == "required" && (
                                  <p className="text-red-600">
                                    Please enter your name
                                  </p>
                                )}
                              <input
                                {...register("composition", { required: true })}
                                value={"composition"}
                                type="hidden"
                                id="text"
                                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>

                          <div className="w-full md:w-6/12">
                            <div className="pt-5 pl-0 md:pl-4">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                Company Name :
                              </label>
                              <input
                                {...register("company_name", {
                                  required: true,
                                })}
                                type="text"
                                id="text"
                                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                                placeholder="Your Company Name"
                              />
                              {errors.company_name &&
                                errors.company_name.type == "required" && (
                                  <p className="text-red-600">
                                    Please enter your company name
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>

                        <div className="pt-5">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email Address :
                          </label>
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            id="text"
                            className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                            placeholder="Your Email Address"
                          />
                          {errors.email && errors.email.type == "required" && (
                            <p className="text-red-600">
                              Please enter your email
                            </p>
                          )}
                        </div>

                        <div className="flex-wrap flex">
                          <div className="w-full md:w-6/12">
                            <div className="pt-5">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                Phone Number :
                              </label>

                              <PhoneInput
                                className="w-full"
                                country={"us"}
                                enableSearch={true}
                                value={phone}
                                isValid={checkInternationalPhone}
                                onChange={handleChange}
                              />

                              {errors.phone &&
                                errors.phone.type == "required" && (
                                  <p className="text-red-600">
                                    Please enter your phone number
                                  </p>
                                )}
                            </div>
                          </div>
                          <div className="w-full md:w-6/12 pl-0 md:pl-4">
                            <div className="pt-5">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                {" "}
                                Enquiry Reason :
                              </label>
                              {/* <textarea
                                  {...register("contact_reason", { required: true })}
                                  className="h-12 focus:amber-border-400 focus:border-0 resize rounded-md w-full bg-gray-50 border border-gray-400 p-3"
                                  row="2"
                                ></textarea> */}
                              <select
                                className="h-12 focus:amber-border-400 focus:border-0 resize rounded-md w-full bg-gray-50 border border-gray-400 p-3"
                                name="contact_reason"
                                {...register("contact_reason", {
                                  required: true,
                                })}
                              >
                                <option value="">Select reason</option>
                                <option value="Business Development">
                                  General Enquiry
                                </option>
                                <option value="CSR, Compliance & Sustainability">
                                  Design & Development
                                </option>
                                <option value="Design & Innovation">
                                  Order Placement
                                </option>
                                <option value="Bangladesh - Regional Team">
                                  Others
                                </option>
                              </select>
                              {errors.contact_reason &&
                                errors.contact_reason.type == "required" && (
                                  <p className="text-red-600">
                                    Please select your enquiry reason
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>

                        <div className="flex-wrap flex">
                          <div className="w-full md:w-6/12">
                            <div className="pt-5">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                City :
                              </label>
                              <input
                                {...register("city", { required: true })}
                                type="text"
                                id="text"
                                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                                placeholder="Your City"
                              />
                              {errors.city &&
                                errors.city.type == "required" && (
                                  <p className="text-red-600">
                                    Please enter your city
                                  </p>
                                )}
                            </div>
                          </div>
                          <div className="w-full md:w-6/12">
                            <div className="pt-5 pl-0 md:pl-4">
                              <label className="block mb-2 text-sm font-medium text-gray-700">
                                Country :
                              </label>
                              <input
                                {...register("country", { required: true })}
                                type="text"
                                id="text"
                                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-[5px] focus:amber-border-400 focus:border-0 block w-full p-3"
                                placeholder="Your Country"
                              />
                              {errors.country &&
                                errors.country.type == "required" && (
                                  <p className="text-red-600">
                                    Please enter your country
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>

                        <div className="pt-5">
                          <label className="block mb-2 text-sm font-medium text-gray-700">
                            Message :
                          </label>
                          <textarea
                            {...register("message", { required: true })}
                            className="h-[104px] focus:amber-border-400 focus:border-0 resize rounded-md w-full bg-gray-50 border border-gray-400 p-3"
                            row="10"
                          ></textarea>
                          {errors.message &&
                            errors.message.type == "required" && (
                              <p className="text-red-600">
                                Please enter your message
                              </p>
                            )}
                        </div>

                        <div className="pt-6 text-center">
                          <button
                            onClick={() => setValue("phone", phone)}
                            className="rounded-full border-[#d4983d] font-bold px-6 py-3 border-2 bg-[#d4983d] hover:bg-amber-600 hover:border-amber-600 text-white transition-all ease-out duration-300"
                          >
                            {" "}
                            Submit Enquiry{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-20 mt-10 md:mt-0">
              <div className="mx-auto px-4 cardContainer">
                <h6 className="text-xl sm:text-3xl font-extrabold text-[#d4983d] pb-3 text-center uppercase">
                  Contact persons
                </h6>
                <div className="flex flex-wrap items-center md:px-0 mx-auto">
                  <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
                    <div className="px-4 py-6  mt-8 bg-gray-100 flex rounded-xl shadow-xl mr-0 md:mr-4 h-full">
                      <div className="pr-2">
                        <MdOutlinePermPhoneMsg className="text-4xl xl:text-2xl text-[#d4983d]" />
                      </div>
                      <div className="">
                        <h6 className="text-sm font-bold pb-1 text-gray-800">
                          Elias Ahmed
                        </h6>
                        <p className="text-gray-600 text-sm">
                          Managing Director
                        </p>
                        <p className="text-gray-600 text-sm">
                          Cell: +8801711368610
                        </p>
                        <p className="text-gray-600 text-sm">
                          Email: elias@brotexbd.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
                    <div className="px-4 py-6  mt-8 bg-gray-100 flex rounded-xl shadow-xl mr-0 md:mr-4 h-full">
                      <div className="pr-2">
                        <MdOutlinePermPhoneMsg className="text-4xl xl:text-2xl text-[#d4983d]" />
                      </div>
                      <div className="">
                        <h6 className="text-sm font-bold pb-2 text-gray-800">
                          Sohan Nur Alam
                        </h6>
                        <p className="text-gray-600 text-sm">Director</p>
                        <p className="text-gray-600 text-sm">
                          Cell: +8801689994663
                        </p>
                        <p className="text-gray-600 text-sm">
                          Email: sohan@brotexbd.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
                    <div className="px-4 py-6  mt-8 bg-gray-100 flex rounded-xl shadow-xl mr-0 md:mr-4 h-full">
                      <div className="pr-2">
                        <MdOutlinePermPhoneMsg className="text-4xl xl:text-2xl text-[#d4983d]" />
                      </div>
                      <div className="">
                        <h6 className="text-sm font-bold pb-2 text-gray-800">
                          MD. Hasan Rezvy
                        </h6>
                        <p className="text-gray-600 text-sm">
                          Marketing & Merchandising Manager
                        </p>
                        <p className="text-gray-600 text-sm">
                          Cell: +8801732141313
                        </p>
                        <p className="text-gray-600 text-sm">
                          Email: rezvy@brotexbd.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
                    <div className="px-4 py-6  mt-8 bg-gray-100 flex rounded-xl shadow-xl h-full">
                      <div className="pr-2">
                        <MdOutlinePermPhoneMsg className="text-4xl xl:text-2xl text-[#d4983d]" />
                      </div>
                      <div className="">
                        <h6 className="text-sm font-bold pb-2 text-gray-800">
                          Miraj Uddin Shemul
                        </h6>
                        <p className="text-gray-600 text-sm">Project Manager</p>
                        <p className="text-gray-600 text-sm">
                          Cell: +8801977519018
                        </p>
                        <p className="text-gray-600 text-sm">
                          Email: shemul@brotexbd.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="bg-gray-100 rounded-xl w-full mx-4">
                  <h6 className="text-xl sm:text-3xl font-bold py-8 text-center text-[#d4983d] uppercase">
                    Find Us
                  </h6>
                  <div className="w-full px-12 pb-12">
                    <iframe
                      className="w-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.502875680116!2d90.40042707576373!3d23.87178038410492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c53abe7a9247%3A0xa953a3064a7d082a!2sBRO%20TEX%20LIMITED%20(Buying%20Unit)!5e0!3m2!1sen!2sbd!4v1695358295418!5m2!1sen!2sbd"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoSlider />
    </>
  );
};

export default Search;
