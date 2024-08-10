import { Perzonalize, Exlusive, Facilities } from "@/icons";
import React from "react";

const BeyondPremium = () => {
	return (
		<section
			id="beyond-premium"
			className="p-4 lg:py-0 mt-[54px] lg:my-[72px] w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-stretch gap-4 lg:gap-6">
			<div className="col-span-full text-center">
				<h1 className="font-the-signature text-dark-aquaman text-[54px] lg:text-[85px]">
					Beyond Premium{" "}
				</h1>
				<span className="font-unbounded text-dark-teal font-bold uppercase text-[22px] lg:text-[32px]">
					Elevate Your Experience
				</span>
			</div>
			<div className="flex h-full flex-col justify-start items-stretch text-center">
				<Perzonalize />
				<h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
					Personalized Itineraries
				</h2>
				<p className="text-sm lg:text-base">
					Our premium travel services offer tailor-made itineraries crafted to
					suit your unique preferences and desires.
				</p>
			</div>
			<div className="flex h-full flex-col justify-start items-stretch text-center">
				<Exlusive />
				<h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
					Exclusive Experiences
				</h2>
				<p className="text-sm lg:text-base">
					From private charters to behind-the-scenes tours, we offer access to
					unique opportunities that are designed to elevate your trip to the
					next level.
				</p>
			</div>
			<div className="flex h-full flex-col justify-start items-stretch text-center">
				<Facilities />
				<h2 className="text-dark-aquaman text-base text-bold lg:text-2xl uppercase">
					Best Facilities
				</h2>
				<p className="text-sm lg:text-base">
					Experience the epitome of with our premium facility, designed to
					provide an unparalleled level of comfort and indulgence.
				</p>
			</div>
		</section>
	);
};

export default BeyondPremium;
