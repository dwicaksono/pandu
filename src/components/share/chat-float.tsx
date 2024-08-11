"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useOpenDrawer } from "@/zustand/useOpenDrawer";

const ChatFloat = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { onOpen } = useOpenDrawer();

	useEffect(() => {
		const handleScroll = () => {
			const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
			if (window.scrollY > navbarHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		isVisible && (
			<div className="fixed bottom-6 right-6">
				<Button
					className="bg-dark-aquaman rounded-full text-white font-medium px-4 py-2 flex items-center justify-center hover:bg-tan transition duration-300 ease-in-out shadow-lg"
					onClick={onOpen}>
					Need holiday ideas? Click here!
				</Button>
			</div>
		)
	);
};

export default ChatFloat;
