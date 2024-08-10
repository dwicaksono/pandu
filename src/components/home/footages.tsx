"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ZambroodBeach from "../../../public/images/zamrood_beach.webp";
import FishJpg from "../../../public/images/fish.jpeg";
import Boat from "../../../public/images/boat.webp";
import Dive from "../../../public/images/dive.webp";
import Island from "../../../public/images/island.webp";
import River from "../../../public/images/river.webp";
import { SeparatorBlock } from "@/icons";

const images = [FishJpg, ZambroodBeach, Boat, Dive, Island, River];
const Footages = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);
	return (
		<section className="bg-tan lg:mt-[72px]" id="luxury-footages">
			<div
				id="wrapper"
				className="pt-12 p-9 lg:py-[72px] lg:pt-[84px] w-full max-w-7xl mx-auto lg:text-left flex flex-col space-y-6">
				<h1 className="font-the-signature text-[52px] lg:text-[72px] text-dark-teal">
					Luxury Footages
				</h1>
				<div className="block lg:hidden relative w-full aspect-[356/256]">
					<Image
						alt=""
						src={images[currentImageIndex]}
						loading="lazy"
						className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out duration-300 opacity-100"
						sizes="100vw"
					/>
				</div>
				<div className="hidden w-full lg:grid grid-cols-3 gap-6">
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={ZambroodBeach}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={FishJpg}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={Boat}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
					<div className="col-span-full">
						<SeparatorBlock />
					</div>
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={Dive}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={Island}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
					<div className="relative w-full aspect-[356/256] cursor-pointer">
						<Image
							alt="Zamrood Luxury Footage"
							src={River}
							loading="lazy"
							className="object-cover object-center absolute inset-0 w-full h-full transition-opacity ease-in-out duration-300 opacity-100"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footages;
