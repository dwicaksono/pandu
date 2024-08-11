import { create } from "zustand";

type OpenDrawer = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const useOpenDrawer = create<OpenDrawer>((set) => ({
	isOpen: false,
	onOpen: () => {
		return set({ isOpen: true });
	},
	onClose: () => {
		return set({ isOpen: false });
	},
}));
