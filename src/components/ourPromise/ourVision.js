"use client";
import "./ourPromise.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function OurVision() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 500,

    className: "center",
    centerMode: true,
    centerPadding: "200px",
    speed: 500,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0px",
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="md:mb-20">
      <div className="overflow-hidden pt-0 md:pt-20 pb-10 ourVisionSlider">
        <div className="mx-auto container px-4 md:px-[99px]">
          <div className="px-4 text-center my-8">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#d4983d]">
              Sustainable Commitment
            </h2>
            <h3 className="text-xl sm:text-xl font-bold py-6 text-[#d4983d]">
              Environmental, Social, and Innovative Initiatives
            </h3>
          </div>
          <div className="px-2 md:px-12 h-full">
            <Slider {...settings}>
                <div className="text-center bg-gray-50 p-8 shadow-md rounded-2xl">
                  <Image
                    className="m-auto"
                    src="/image/partnership-icon-new.svg"
                    width="100"
                    height="80"
                    alt="lgo"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold py-6 text-[#d4983d]">
                    Partnership
                  </h3>
                  <h6 className="text-xl sm:text-2xl  pb-6 text-[#d4983d]">
                    Environmental Goal
                  </h6>
                  <p className="text_align text-lg text-gray-700 tracking-wider">
                    Our dedication to environmental betterment is reflected in our
                    strategic partnerships with suppliers who share our fervent
                    commitment to eco-responsibility. We believe that
                    collaboration is key to achieving our ambitious environmental
                    goals. These partnerships are built upon a foundation of
                    shared values and mutual dedication to preserving our planet.{" "}
                  </p>
                  <p className="text_align text-lg text-gray-700 tracking-wider pt-6">
                    Our dedicated compliance team plays a pivotal role in ensuring
                    that our supply chain adheres to the latest compliance and
                    ethical guidelines. They continuously assess, adapt, and
                    enhance our supplier relationships to ensure we consistently
                    set the highest standards in environmental responsibility.
                    Through these partnerships and by maintaining stringent
                    environmental standards, we are unwavering in our commitment
                    to making a positive impact on the environment while
                    continuously raising the bar for sustainable business
                    practices.
                  </p>
                  <div className="sm:flex justify-enter pt-8">
                      <div className="h-[10px] mx-auto w-full">
                          {/* <Image
                          className="m-auto"
                          src="/image/Lower-bg.png"
                          width="350"
                          height="50"
                          alt="lgo"
                          style={{ height: '100%', width: '100%' }} 
                        />   */}
                      </div>
                  </div>
                </div>

                <div className="text-center bg-gray-50 p-8 shadow-md rounded-2xl">
                  <Image
                    className="m-auto"
                    src="/image/people.svg"
                    width="100"
                    height="80"
                    alt="lgo"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold py-6 text-[#d4983d]">
                    People
                  </h3>
                  <h6 className="text-xl sm:text-2xl  pb-6 text-[#d4983d]">
                    Community Goal
                  </h6>
                  <p className="text_align text-lg text-gray-700 tracking-wider">
                    Our unwavering commitment extends beyond environmental
                    initiatives; it encompasses our dedication to the well-being
                    and development of the people living and working in the
                    regions where we operate. We prioritize their welfare through
                    a range of initiatives like Sustainable Materials,
                    Environmental Impact Reduction, Collaboration with Experts.
                  </p>
                  <p className="text_align text-lg text-gray-700 tracking-wider pt-6">
                    By combining our unwavering passion for innovation with
                    well-defined product goals, we remain dedicated to creating
                    products that are not only innovative but also environmentally
                    responsible. This approach helps us to forge a path toward a
                    more sustainable and eco-conscious future.
                  </p>
                  <div className="sm:flex justify-enter pt-9">
                        <div className="h-[80px] mx-auto w-full">
                          {/* <Image
                          className="m-auto"
                          src="/image/community.png"
                          width="350"
                          height="90"
                          alt="lgo"
                          style={{ height: '100%', width: '100%' }} 
                        />   */}
                        </div>
                  </div>
                </div>

                <div className="text-center bg-gray-50 p-8 shadow-md rounded-2xl">
                  <Image
                    className="m-auto"
                    src="/image/passion-icon-new.png"
                    width="100"
                    height="80"
                    alt="lgo"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold py-6 text-[#d4983d]">
                    Passion for Innovation
                  </h3>
                  <h6 className="text-xl sm:text-2xl  pb-6 text-[#d4983d]">
                    {" "}
                    Product Goal
                  </h6>
                  <p className="text_align text-lg text-gray-700 tracking-wider">
                    At the heart of our organization lies an unwavering passion
                    for innovation. This passion serves as our guiding force,
                    constantly propelling us forward and motivating us to reach
                    new heights. Our commitment to innovation is deeply rooted in
                    a desire to make a positive impact, especially in the context
                    of our product goals. Our product goals are intricately
                    intertwined with our passion for innovation. We set out to
                    achieve these goals with a clear vision of delivering
                    sustainable solutions to minimize the environmental impact of
                    our products. Our key objectives include, Sustainable
                    Materials,Environmental Impact Reduction and Collaboration
                    with Experts.
                  </p>
                  <p className="text_align text-lg text-gray-700 tracking-wider pt-6">
                    Our compliance team constantly assesses and scales up our
                    supply chain with the latest compliance and ethical guidelines
                    to ensure we keep improving and setting the highest standards.
                  </p>
                  <div className="sm:flex justify-enter pt-6">
                    <div className="h-[10px] mx-auto w-full">
                          {/* <Image
                          className="m-auto"
                          src="/image/product-goal.png"
                          width="350"
                          height="50"
                          alt="lgo"
                          style={{ height: '100%', width: '100%' }} 
                        />   */}
                      </div>
                  </div>
                </div>

             
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
