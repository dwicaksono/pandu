import { getDestinations } from "@/actions/getDestinations";
import { formatCurrency } from "@/helper/formatCurrency";
import { formatDaysAndNights } from "@/helper/formatDaysAndNights";
import { Arrow } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
					<div
						key={data.itinerary_id}
						className="py-4 lg:py-[72px] w-full flex flex-col lg:odd:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch"
						id="destination-card-landscape">
						<div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
							<Image
								width={600}
								height={400}
								loading="lazy"
								sizes="100vw"
								alt={data.itinerary_name}
								src={data.related_galleries[0].src}
								className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out duration-300 opacity-100"
							/>
						</div>
						<div className="lg:w-1/2 flex flex-col justify-between space-y-2 lg:space-y-4 text-center lg:text-left">
							<div className="w-full flex flex-col space-y-2">
								<span className="text-left text-xs lg:text-base">
									{formatDaysAndNights(data.itinerary_day)}
								</span>
								<strong className="text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">
									{data.itinerary_name}
								</strong>
								<span
									className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold"
									title="Organized by Pandooin">
									Organized by {data.partner_name}
								</span>
								<p className="text-left text-sm lg:text-base text-dark-teal line-clamp-4">
									{data.itinerary_short_description}
								</p>
							</div>
							<div className="mt-auto w-full inline-flex justify-between items-center">
								<div className="flex flex-col">
									<span className="text-left text-dark-teal text-xs lg:text-base">
										Start from
									</span>
									<span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">
										{formatCurrency(
											data.related_variant.itinerary_variant_pub_price
										)}
									</span>
								</div>
								<Link href="/destination/premium-trip-labuan-bajo-liveboard-in-vinca-voyages-phinisi">
									<button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal ">
										See Details
									</button>
								</Link>
							</div>
						</div>
					</div>
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
