"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./mobile-menu";

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
		</>
	);
};

export default ModalProvider;
