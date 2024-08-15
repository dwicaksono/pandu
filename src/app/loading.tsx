import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
	return (
		<div className="w-full h-screen top-0 z-10 bg-black/30 backdrop-blur-md flex justify-center items-center">
			<Loader2 className="animate-spin text-primary font-semibold text-2xl" />
		</div>
	);
};

export default loading;
