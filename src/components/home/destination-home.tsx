"use client";
import { formatCurrency } from "@/helper/formatCurrency";
import { formatDaysAndNights } from "@/helper/formatDaysAndNights";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const DestinationHome = ({ data }: { data: any }) => {
	const [imageSrc, setImageSrc] = useState(0);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setOpacity(0);
			setTimeout(() => {
				setImageSrc((prev) => (prev === 0 ? 1 : 0));
				setOpacity(1);
			}, 3000);
		}, 3000);

		return () => clearInterval(interval);
	}, [data.related_galleries]);

	return (
		<div
			className="py-4 lg:py-[72px] w-full flex flex-col lg:odd:flex-row-reverse lg:flex-row gap-4 lg:gap-6 items-stretch"
			id="destination-card-landscape">
			<div className="relative lg:w-1/2 max-h-[256px] lg:max-h-[327px] aspect-video">
				<Image
					width={600}
					height={400}
					loading="lazy"
					sizes="100vw"
					alt={data.itinerary_name}
					src={data.related_galleries[imageSrc].src}
					className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out duration-3000"
					style={{ opacity }}
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
							{formatCurrency(data.related_variant.itinerary_variant_pub_price)}
						</span>
					</div>
					<Link href="/destination">
						<button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal ">
							See Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DestinationHome;
