import { create } from "zustand";

type OpenSheet = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const useOpenSheet = create<OpenSheet>((set) => ({
	isOpen: false,
	onOpen: () => {
		return set({ isOpen: true });
	},
	onClose: () => {
		return set({ isOpen: false });
	},
}));
