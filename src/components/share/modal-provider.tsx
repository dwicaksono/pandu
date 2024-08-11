"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";
import ChatDrawer from "./chat-drawer";

const ModalProvider = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<MobileMenu />
			<ChatDrawer />
		</>
	);
};

export default ModalProvider;
