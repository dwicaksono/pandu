import { getDestinations } from "@/actions/getDestinations";
import { Arrow } from "@/icons";
import Link from "next/link";
import React from "react";
import DestinationHome from "./destination-home";

const Destination = async () => {
	const params = { highlight: true };
	const { data } = await getDestinations(params);
	return (
		<section className="p-4 w-full max-w-7xl mx-auto">
			<div className="py-6 w-full flex flex-col sm:flex-row items-start gap-6">
				<h1 className="my-auto w-fit text-left text-dark-teal font-unbounded font-bold text-[22px] lg:text-4xl">
					Destinations
				</h1>
				<div className="w-fit flex items-center">
					<Link
						href="/destination"
						className="group w-fit inline-flex gap-4 items-center cursor-pointer">
						<Arrow />
						<span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
							Explore more
						</span>
					</Link>
				</div>
			</div>
			<div id="destination-list" className="w-full flex flex-col">
				{data.map((data: any) => (
					<DestinationHome key={data.itinerary_id} data={data} />
				))}
			</div>
			<div className="w-full max-w-7xl mx-auto py-[54px] lg:py-[26px] px-4">
				<div className="w-full inline-flex justify-center lg:justify-end">
					<Link
						href="/destination"
						className="group w-fit inline-flex gap-4 items-center cursor-pointer">
						<Arrow />
						<span className="uppercase text-base text-dark-teal font-bold group-hover:text-tan transition-colors ease-in-out duration-300">
							Explore more
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Destination;
