import * as React from "react";
import { BotMessageSquare, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerTitle,
} from "@/components/ui/drawer";
import { useOpenDrawer } from "@/zustand/useOpenDrawer";

const ChatDrawer = () => {
	const { isOpen, onClose } = useOpenDrawer();
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		isOpen && (
			<Drawer open={true}>
				<DrawerOverlay className="bg-white/20 backdrop-blur-sm" />
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<div className="flex flex-col gap-4 border py-10 mt-3 px-4">
							<div className="flex border-[1px] justify-start items-center rounded-full border-dark-teal py-1 px-2 w-fit text-xs gap-x-2">
								<BotMessageSquare className="size-4" />
								<p>bot</p>
							</div>
						</div>

						<DrawerFooter>
							<Button
								variant="outline"
								onClick={onClose}
								className="bg-dark-teal text-white">
								Close
							</Button>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>
		)
	);
};

export default ChatDrawer;
