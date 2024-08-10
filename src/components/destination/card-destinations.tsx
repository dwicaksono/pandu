import { formatCurrency } from "@/helper/formatCurrency";

import Image from "next/image";
import Link from "next/link";

interface DestinationData {
	itinerary_id: string;
	itinerary_name: string;
	itinerary_day: number;
	itinerary_short_description: string;
	partner_name: string;
	related_galleries: { src: string }[];
	related_variant: { itinerary_variant_pub_price: string };
}

const DestinationCard: React.FC<{ data: DestinationData }> = ({ data }) => (
	<div
		className="p-6 w-full flex flex-1 flex-col justify-between space-y-6"
		key={data.itinerary_id}>
		<div className="relative max-h-[256px] lg:max-h-[327px] aspect-video">
			<Image
				alt={data.itinerary_name}
				className="object-cover object-center absolute inset-0 w-full h-full"
				width={600}
				height={400}
				src={data.related_galleries[0].src}
			/>
		</div>
		<div className="w-full flex flex-col space-y-2">
			<span className="text-dark-teal text-left text-xs lg:text-base">
				{data.itinerary_day} DAYS
			</span>
			<strong className="m-0 mt-1 text-left text-dark-aquaman text-base lg:text-4xl font-bold line-clamp-2">
				{data.itinerary_name}
			</strong>
			<span
				className="text-left text-dark-teal text-sm lg:text-base line-clamp-1 font-bold"
				title="Organized by Pandooin">
				Organized by {data.partner_name}
			</span>
			<p className="mt-2 text-left text-sm lg:text-base text-dark-teal line-clamp-4">
				{data.itinerary_short_description}
			</p>
		</div>
		<div className="mt-auto w-full inline-flex justify-between items-center">
			<div className="flex flex-col">
				<span className="text-left text-dark-teal text-xs lg:text-base">
					Start from
				</span>
				<span className="text-left font-unbounded text-[#B8B8B8] text-xs lg:text-base font-medium line-through">
					{formatCurrency(data.related_variant.itinerary_variant_pub_price)}
				</span>
				<span className="text-left font-unbounded text-dark-teal text-lg lg:text-[28px] font-medium">
					{formatCurrency(data.related_variant.itinerary_variant_pub_price)}
				</span>
			</div>
			<Link href={`/destination/${data.itinerary_id}`}>
				<button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal">
					See Details
				</button>
			</Link>
		</div>
	</div>
);

export default DestinationCard;
