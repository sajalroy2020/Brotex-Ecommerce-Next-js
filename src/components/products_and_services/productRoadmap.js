import { GoDotFill } from "react-icons/go";
import Image from "next/image";

export default function ProductRoadmap({ convertionRoadmapText }) {
  return (
    <>
      <div className="pb-0 md:pb-20">
        <div className="container mx-auto px-4 md:px-[99px]">
          <div className="text-center">
            <h2 className="title_font_size font-bold pb-5 text-[#d4983d]">
              {" "}
              {convertionRoadmapText.title}{" "}
            </h2>
            <p className="text-xl text_align text-gray-700 tracking-wider pb-10">
              {convertionRoadmapText.value}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-[99px]">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl h-full bg-white shadow-lg mr-0 md:mr-4">
                <div className="">
                  <div
                    className="rounded-t-xl"
                    style={{
                      backgroundImage: `url(/image/14.png)`,
                      height: "264px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div className="p-8">
                    <h2 className="w-full text-xl font-semibold pb-3 text-[#d4983d]">
                      DESIGN AND DEVELOPMENT
                    </h2>
                    <p className="text-gray-700 pb-4">
                      Our experienced design teams are dedicated to transforming
                      your concepts into marketable garment designs. Through
                      collaborative ideation and creative expertise, we help
                      bring your brand vision to life and stay ahead of the
                      fashion curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl bg-white shadow-lg h-full">
                <div className="">
                  <div
                    className="rounded-t-xl"
                    style={{
                      backgroundImage: `url(/image/15.png)`,
                      height: "264px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="p-8">
                    <h2 className="w-full text-xl font-semibold pb-3 text-[#d4983d]">
                      SAMPLE ROOM
                    </h2>
                    <p className="text-gray-700 pb-4">
                      Guide our partner factories from selection of the yarns
                      till ﬁnishing of the fabric and also guiding the factory
                      in every days troubleshooting in terms of correcting the
                      patterns and achieving right ﬁt for all our orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl bg-white h-full shadow-lg mr-0 md:mr-4">
                <div className="">
                  <div
                    className="rounded-t-xl"
                    style={{
                      backgroundImage: `url(/image/16.png)`,
                      height: "264px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="p-8">
                    <h2 className="w-full text-xl font-semibold pb-3 text-[#d4983d]">
                      IN-HOUSE LABORATORY
                    </h2>
                    <p className="text-gray-700 pb-4">
                      Lab Team cross-checks both fabric and garment on a daily
                      basis, which gives a level of conﬁdence before goods are
                      released for Shipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl bg-white shadow-lg">
                <div className="">
                  <div
                    className="rounded-t-xl"
                    style={{
                      backgroundImage: `url(/image/18.png)`,
                      height: "264px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div className="p-8">
                    {/* <h2 className='w-full text-xl sm:text-3xl font-bold pb-2 text-[#d4983d]'> OUR INTEGRATED SERVICES</h2> */}
                    <h2 className="w-full text-xl font-semibold pb-3 text-[#d4983d]">
                      MERCHANDISING DEPARTMENT
                    </h2>
                    <p className="text-gray-700 pb-4">
                      Our expert merchandising team ensures smooth coordination
                      and effective communication throughout the production
                      process. They are committed to understanding your needs
                      and providing personalized support, ensuring timely order
                      fulﬁllment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl bg-white shadow-lg mr-0 md:mr-4">
                <div className="">
                  <div
                    className="rounded-t-xl"
                    style={{
                      backgroundImage: `url(/image/19.png)`,
                      height: "264px",
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div className="p-8">
                    {/* <h2 className='w-full text-xl sm:text-3xl font-bold pb-2 text-[#d4983d]'> OUR INTEGRATED SERVICES</h2> */}
                    <h2 className="w-full text-xl font-semibold pb-3 text-[#d4983d]">
                      QUALITY CONTROL
                    </h2>
                    <p className="text-gray-700 pb-4">
                      We maintain stringent quality control measures to
                      guarantee that every garment leaving our facilities meets
                      the highest industry standards. Our dedicated quality
                      control team conducts thorough inspections and tests at
                      every stage of production
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mt-10">
              <div className="rounded-xl bg-white shadow-lg h-full">
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="rounded-t-xl">
                    <div className="justify-center items-center gap-8 flex w-full pt-10">
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-1.png"
                        width="50"
                        height="50"
                        alt="image"
                      />
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-2.png"
                        width="50"
                        height="50"
                        alt="image"
                      />
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-3.png"
                        width="50"
                        height="50"
                        alt="image"
                      />
                    </div>
                    <div className="justify-center gap-8 items-center flex w-full pt-4">
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-4.png"
                        width="50"
                        height="50"
                        alt="image"
                      />
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-5.svg"
                        width="50"
                        height="50"
                        alt="image"
                      />
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-6.jpeg"
                        width="50"
                        height="50"
                        alt="image"
                      />
                      <Image
                        className="w-[15%]"
                        src="/image/24-logo-7.png"
                        width="50"
                        height="50"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="w-full text-xl font-semibold pb-2 text-[#d4983d]">
                      COMPLIANCE SERVICES
                    </h2>
                    <p className="text-gray-700 pb-4">
                      Ethical sourcing and compliance are integral to our
                      operations. We prioritize fair labor practices, worker
                      safety, and sustainable manufacturing processes. Our
                      compliance services ensure adherence to international
                      standards and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
