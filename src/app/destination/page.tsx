import React from "react";
import DestinationHero from "../../../public/images/destination.webp";
import Image from "next/image";
import { getDestinations } from "@/actions/getDestinations";
import { formatCurrency } from "@/helper/formatCurrency";
import Link from "next/link";
import { Footages, PandooinWeb } from "@/components/home";
import { DestinationCard } from "@/components/destination";

const Destination = async () => {
	const { data } = await getDestinations();

	return (
		<>
			<section className="relative flex place-items-center px-4 h-[756px] lg:h-[810px]">
				<Image
					alt="destination"
					src={DestinationHero}
					className="absolute object-cover object-center h-full w-full inset-0"
					sizes="100vw"
				/>
				<div
					id="wrapper"
					className="absolute inset-x-0 px-4 py-52 w-full max-w-7xl mx-auto text-center">
					<h1 className="m-0 font-the-signature text-tan text-[72px] lg:text-[128px] whitespace-nowrap leading-[0.2]">
						All Destinations
					</h1>
					<span className="font-unbounded text-vista-white text-[24px] lg:text-[54px] font-bold">
						Your Paradise Gateway
					</span>
					<p className="text-vista-white text-base lg:text-2xl">
						Pamper yourself with a luxury break for a day
					</p>
				</div>
			</section>
			<section className="lg:mt-[72px] py-4 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-x-[72px] lg:gap-y-[144px]">
				{data.map((data: any) => (
					<DestinationCard data={data} key={data.itinerary_id} />
				))}
			</section>
			<Footages />
			<PandooinWeb />
		</>
	);
};

export default Destination;
