import { menuItems } from "@/constans/menu";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useOpenSheet } from "@/zustand/useOpenSheet";
import { usePathname, useParams } from "next/navigation";

const MenuApp = () => {
	const { isOpen, onClose } = useOpenSheet();
	const pathname = usePathname();
	const params = useParams();
	const [pathHash, setPathHash] = useState("");
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		if (isMounted) {
			setPathHash(window.location.hash);
		} else {
			setMounted(true);
		}
	}, [isMounted, params]);

	useEffect(() => {
		if (pathHash) {
			const element = document.getElementById(pathHash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [pathHash]);

	const handleLinkClick = (hash: string) => {
		setPathHash(hash);
		onClose();
	};
	return (
		<>
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
					<Link
						scroll={!!pathHash}
						href={item.path}
						onClick={() => handleLinkClick(item.active)}>
						{item.name}
					</Link>
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
		</>
	);
};

export default MenuApp;
