"use client";

import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { Menu } from "lucide-react";
import { useOpenSheet } from "@/zustand/useOpenSheet";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

export const menuItems = [
	{ name: "Home Page", path: "/", active: "" },
	{
		name: "Customize Your Trip",
		path: "/#customize-your-trip",
		active: "#customize-your-trip",
	},
	{ name: "Destination", path: "/destination", active: "/destination" },
	{ name: "Action", path: "/#action", active: "#action" },
];

const Navbar: React.FC = () => {
	const pathname = usePathname();
	const params = useParams();
	const { onOpen } = useOpenSheet();
	const [pathHash, setPathHash] = useState("");
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		if (isMounted) {
			setPathHash(window.location.hash);
		} else {
			setMounted(true);
		}
	}, [isMounted, params]);

	return (
		<nav className="sticky top-0 z-40 font-sans bg-white w-full inline-flex justify-center">
			<div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
				<Link href="/">
					<Image
						src={logo}
						alt="Pandooin Zambrood logo"
						sizes="30vw"
						loading="eager"
						width={135}
						height={50}
						fetchPriority="high"
					/>
				</Link>
				<div className="hidden lg:inline-flex items-center">
					<ul className="inline-flex items-center text-primary gap-3 xl:gap-6">
						{menuItems.map((item) => (
							<li
								key={item.name}
								className={cn(
									"px-6 py-2.5 hover:border-b-[2px]  hover:border-b-primary font-bold text-base",
									pathname === "/" &&
										pathHash === item.active &&
										"border-b-[2px] border-primary",
									pathname === item.active && "border-b-[2px] border-primary"
								)}>
								<Link href={item.path}>{item.name}</Link>
							</li>
						))}
						<Link
							href="https://api.whatsapp.com/send/?phone=6283831556160&text=Hi%2C+I+wanna+ask+question+about+Zamrood&type=phone_number&app_absent=0"
							target="_blank">
							<Button
								variant="outline"
								size="lg"
								className="text-base font-bold rounded-full border-[2px] border-slate-900 text-slate-900 transition-all ease-in-out delay-100 h-auto py-3 hover:bg-primary hover:text-white hover:border-primary">
								Need Assistance?
							</Button>
						</Link>
					</ul>
				</div>
				<div className="lg:hidden flex ">
					<Button
						onClick={onOpen}
						variant="outline"
						size="lg"
						className="h-auto p-0 size-14 text-base font-bold rounded-full border-[2px] border-primary text-primary transition-all ease-in-out delay-100  hover:bg-primary hover:text-white hover:border-primary">
						<Menu className="size-8" />
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
