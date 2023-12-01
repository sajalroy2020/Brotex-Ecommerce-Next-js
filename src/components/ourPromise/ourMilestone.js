import { GoDotFill } from "react-icons/go";
import Image from 'next/image';

export default function OurMilestone({ ethicalMilestone }) {
  return (
    
    <div className="pb-20">
      <div className="container mx-auto px-4 md:px-[99px]">
        <div className="bg-white rounded-md p-6 md:p-16 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="title_font_size font-bold text-[#d4983d] uppercase">
              {ethicalMilestone.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12">
              <h2 className="text-xl sm:text-2xl font-bold pb-8 text-[#d4983d]">
                {ethicalMilestone.value}
              </h2>
              <div className="">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    Success through Organic Commitment: BroTex Limited&apos;s
                    overarching commitment is to achieve success organically,
                    emphasizing the importance of ethical practices and
                    sustainability as the cornerstones of our business
                    philosophy.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text-gray-600 select-none text_align ">
                    Launch of In-House Compliance Team: To ensure the rigorous
                    enforcement of our ethical principles, BroTex Limited has
                    established an in-house Compliance Team. This team is
                    dedicated to upholding our standards, assessing compliance,
                    and continuously improving our ethical performance.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    Establishment of In-House Design & Innovation Teams: BroTex
                    Limited has laid the foundation for in-house Design &
                    Innovation Teams, aimed at driving creative and sustainable
                    solutions in our product development processes. These teams
                    are instrumental in integrating ethics into our designs and
                    practices.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    First Production of Fully Traceable Organic Cotton: One of
                    BroTex Limited&apos;s notable achievements is the production of
                    fully traceable organic cotton. This accomplishment
                    underscores our commitment to transparent and sustainable
                    sourcing, setting new industry benchmarks.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    Launch of Fire Safety Awareness Training Program: Ensuring
                    the safety and well-being of our workforce is a top priority
                    for BroTex Limited. We have initiated a Fire Safety
                    Awareness Training program to empower our teams with
                    essential knowledge and skills, emphasizing a safe working
                    environment.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    Transformation of 15% of Total Production Volume: BroTex
                    Limited&apos;s dedication to sustainability is evident in our
                    goal to transform 15% of our total production volume into
                    eco-friendly, ethical, and environmentally responsible
                    products. This ambitious target propels us toward a more
                    responsible and sustainable future.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <GoDotFill className="text-sm mt-1 mr-1" />
                  <p className="text_align text-gray-600 select-none">
                    Each of these ethical milestones represents a step forward
                    in BroTex Limited&apos;s unwavering commitment to ethical and
                    sustainable practices, making a positive impact on our
                    business and the communities we serve.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 mx-auto">
              <Image
                className="mx-auto pt-8 lg:pt-0"
                src="/image/etich-new.png"
                width="400"
                height="600"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
