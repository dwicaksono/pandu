"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { Menu } from "lucide-react";
import { useOpenSheet } from "@/zustand/useOpenSheet";
import MenuApp from "./menu";

const Navbar: React.FC = () => {
	const { onOpen } = useOpenSheet();

	return (
		<nav className=" top-0 z-40 font-sans bg-white w-full inline-flex justify-center">
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
						<MenuApp />
					</ul>
				</div>
				<div className="lg:hidden flex ">
					<Button
						onClick={onOpen}
						variant="outline"
						size="lg"
						className="h-auto p-0 size-10 text-base font-bold rounded-full border-[2px] border-primary text-primary transition-all ease-in-out delay-100  hover:bg-primary hover:text-white hover:border-primary">
						<Menu className="size-8" />
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
