import Image from "next/image";
import React from "react";
import discoverImage from "../../../public/images/discovery.webp";
import Link from "next/link";
const Discover = () => {
	return (
		<section
			className="p-4 lg:py-[72px]  mt-[54px] lg:mt-[72px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 space-y-4"
			id="discover-tailored-experiences">
			<div className="relative w-full lg:w-1/2 max-h-[188px] lg:max-h-64 aspect-square">
				<Image
					src={discoverImage}
					alt="Pandooin Tailored Experiences"
					className="object-contain object-center absolute inset-0 w-full h-full"
					sizes="100vw"
				/>
			</div>
			<div className="lg:w-1/2 flex flex-col lg:justify-center space-y-2 lg:space-y-4 text-center lg:text-left">
				<h1 className="m-0 text-dark-teal text-[32px] font-bold">
					Discover Tailored Experiences
				</h1>
				<p className="text-sm lg:text-lg">
					Create your own journey, personalized to suit your preferences and
					interests, ensuring a once-in-a-lifetime adventure awaits.
				</p>
				<Link
					target="_blank"
					href="https://pandooin.com/id/tailor-made/create?utm_source=zamrood&amp;utm_medium=website&amp;utm_campaign=premium">
					<button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-dark-teal text-vista-white border-2 border-dark-teal hover:bg-tan hover:text-vista-white hover:border-tan !mt-6">
						Customize Your Trip
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Discover;
