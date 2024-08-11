"use client";
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useOpenSheet } from "@/zustand/useOpenSheet";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import MenuApp from "./menu";

const MobileMenu = () => {
	const { isOpen, onClose } = useOpenSheet();

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent>
				<div className="flex justify-end items-end mb-10">
					<Button
						onClick={onClose}
						variant="outline"
						size="lg"
						className="h-auto p-0 size-10 text-base font-bold rounded-full border-[2px] border-primary text-primary transition-all ease-in-out delay-100  hover:bg-primary hover:text-white hover:border-primary">
						<X className="size-8" />
					</Button>
				</div>
				<ul className="flex flex-col items-end text-primary gap-3 xl:gap-6">
					<MenuApp />
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
