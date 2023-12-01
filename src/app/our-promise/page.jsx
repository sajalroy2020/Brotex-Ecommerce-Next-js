'use client';
import LogoSlider from "../../components/logoSlider";
import OurVision from "../../components/ourPromise/ourVision";
import Certifications from "../../components/ourPromise/certifications";
import OurMilestone from "../../components/ourPromise/ourMilestone";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { ethicalMilestones, get_our_mission, ourVision } from "../../../servises/action/all";
import Loader from "@/components/loaders/loader";
import TypingAnimation from "@/components/animation/animation";
import AnimationTwo from "@/components/animation/animationTwo";

const OurPromise = () => {
	const [mission, setMission] = useState({});
	const [ourvision, setOurVision] = useState({});
	// const [ourvalues, setOurValues] = useState({});
	// const [certificate, setCertificate] = useState({});
	// const [ourprogress, setOurProgress] = useState({});
	const [ethicalMilestone, setEthicalMilestones] = useState({});
	const [loading, setLoading] = useState(true);
	const [ourMission, setourMission] = useState(true);
	const [ourVisionLoder, setOurVisionLoder] = useState(true);
	const [isAnimationDone, setIsAnimationDone] = useState(false);

	function getStorage(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function setStorage(key,value) {
          localStorage.setItem(key, JSON.stringify(value));
    }

	const handleAnimationComplete = () => {
		setIsAnimationDone(true);
	};

	// const getCertificate = async () => {
	// 	try {
	// 		const { data } = await ourCertificate();
	// 		setCertificate(data.setting);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const getOurVision = async () => {
		try {
			const { data } = await ourVision();
			setOurVision(data.setting);
			setOurVisionLoder(false);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	// const getOurValues = async () => {
	// 	try {
	// 		const { data } = await ourValues();
	// 		setOurValues(data.setting);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const getEthicalMilestones = async () => {
		try {
			const { data } = await ethicalMilestones();
			setEthicalMilestones(data.setting);
            setStorage('ethicalMilestone', data.setting);
		} catch (error) {
			console.error(error);
		}
	};

	// const getOurProgress = async () => {
	// 	try {
	// 		const { data } = await ourProgress();
	// 		setOurProgress(data.setting);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const get_mission = async () => {
		try {
			const { data } = await get_our_mission();
			setMission(data.setting);
			setourMission(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getOurVision();
		// getCertificate();
		// getOurValues();
		// getOurProgress();
		get_mission();

		if(getStorage('ethicalMilestone') == null){
            getEthicalMilestones();
          }else{
            setEthicalMilestones(getStorage('ethicalMilestone'));
            setLoading(false);
            getEthicalMilestones();
          }
	}, []);

	return (
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
				{loading ? <Loader /> :
					<div className='bodybg'>
						<div className='mx-auto'>
							<div className="container px-4 md:px-[99px] mx-auto">
								<div className="flex flex-wrap pt-[5%] pb-5 rounded px-4 md:px-10">
									<div className="w-full lg:w-6/12">
										<div className="mr-0 md:mr-6">
											<h2 className='text-2xl sm:text-4xl font-bold pb-6 text-[#d4983d] uppercase'>{mission.title}</h2>
											<>{ourMission ? '' : <AnimationTwo mission={mission.value} onAnimationComplete={handleAnimationComplete} />}</>

											{isAnimationDone && (
											<div className="pt-10">
												<h2 className='text-2xl sm:text-4xl font-bold pb-6 text-[#d4983d] uppercase'>{ourvision.title}</h2>
													{ourVisionLoder ? '' : <TypingAnimation ourvision={ourvision.value} />}
											</div>
											)}
										</div>
									</div>
									<div className="w-full lg:w-6/12">
										<div className="flex justify-center lg:justify-end">
											<div className="globe" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<OurVision />
						<OurMilestone ethicalMilestone={ethicalMilestone} />
						<Certifications />
						<div className='pb-20'>
							<div className='container mx-auto px-4 md:px-[99px]'>
								<div className="bg-white rounded-md p-6 md:p-16 shadow-lg">
									<div className="text-center mb-12">
										<h2 className='title_font_size font-bold text-[#d4983d]'>OUR COMPETITIVE EDGE</h2>
									</div>

									<div className="flex flex-wrap items-center">
										<div className="w-full lg:w-7/12">
											<h2 className='text-xl sm:text-2xl font-bold pb-8 text-[#d4983d] select-none'>What sets Brotex Limited apart:</h2>
											<p className='text_align text-xl text-gray-700 tracking-wider pb-5 select-none'>
												- Trustworthy Partnerships: We have built a strong reputation for reliability and trust through our longstanding relationships
												with renowned brands worldwide. Our commitment to maintaining transparency and delivering on promises has made us a
												preferred choice for garment supply.
											</p>

											<div className="">
												<p className='text_align text-xl text-gray-700 tracking-wider select-none'>
													- Flexibility and Scalability: Whether you have a small order or require large-scale production,
													we treat every client with equal importance. Our ﬂexible approach allows us to cater to
													diverse requirements while maintaining exceptional quality standards.
												</p>
												<p className='text_align text-xl text-gray-700 tracking-wider pt-5 select-none'>
													Competitive Pricing: We understand the importance of cost-effectiveness in
													todays market. Brotex Limited offers competitive pricing plans without
													compromising on quality, ensuring optimal value for your investment.
												</p>
											</div>
										</div>

										<div className="w-full lg:w-5/12 mx-auto">
											<Image className="mx-auto" src="/image/tree.png" width="400" height="600" alt='img' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
			<LogoSlider />

		</>
	)
}

export default OurPromise;
