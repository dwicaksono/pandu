import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.webp";
import Link from "next/link";
const PandooinWeb = () => {
	return (
		<section
			className="py-[54px] lg:pb-0 px-4 w-full max-w-7xl mx-auto"
			id="pandooin-website">
			<div
				className="w-full p-6 flex flex-col lg:flex-row space-y-2 justify-between items-center bg-[lightgray] bg-no-repeat bg-center bg-cover backdrop-blur-sm"
				style={{
					backgroundImage: "url('/images/background.webp')",
				}}>
				<Image
					alt="logo white"
					src={logo}
					className="h-[54px] w-auto"
					loading="lazy"
					sizes="100vw"
				/>
				<div className="flex flex-col space-y-2 justify-center lg:justify-end text-right">
					<p className="text-vista-white text-base text-center lg:text-right">
						Want to see other destinations? Check us out at our website
					</p>
					<Link
						target="_blank"
						className="text-vista-white inline-flex items-center justify-center lg:justify-end gap-2"
						href="https://pandooin.com">
						<span className="text-xl font-bold underline">Pandooin.com</span>
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5 16.013L15.8333 5.17969M15.8333 5.17969V15.5797M15.8333 5.17969H5.43333"
								stroke="#FAF9F5"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PandooinWeb;
