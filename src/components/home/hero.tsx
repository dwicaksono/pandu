import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface HeroProps {
	src: StaticImageData;
	title: string;
	subtitle: string;
	description: string;
	link?: string;
	buttonTitle?: string;
	withButton?: boolean;
}

const Hero: FC<HeroProps> = ({
	description,
	src,
	subtitle,
	title,
	buttonTitle,
	link,
	withButton = false,
}) => {
	return (
		<section
			id="hero"
			className="relative flex place-items-center px-4 h-[756px] lg:h-[810px]">
			<Image
				alt="zambrood"
				loading="eager"
				src={src}
				className="object-cover object-center absolute inset-0 w-full h-full"
				sizes="100"
			/>
			<div
				id="wrapper"
				className="absolute inset-x-0 px-4 py-52 w-full max-w-7xl mx-auto text-center lg:text-left col-span-full">
				<h1 className="lg:m-0 m-8 font-the-signature text-tan  text-[54px] sm:text-[85px] whitespace-nowrap leading-[0.3] lg:leading-none">
					{title}
				</h1>
				<span className="font-unbounded text-vista-white text-lg lg:text-2xl font-bold">
					{subtitle}
				</span>
				<p className="mx-auto lg:mx-0 text-vista-white text-base lg:text-2xl max-w-[708px]">
					{description}
				</p>
				{withButton && link && (
					<Link href={link}>
						<Button className="button text-center inline-flex justify-center h-auto items-center px-6 py-3 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-white border-2 border-white hover:bg-tan hover:text-vista-white hover:border-tan mt-6">
							{buttonTitle}
						</Button>
					</Link>
				)}
			</div>
		</section>
	);
};

export default Hero;
