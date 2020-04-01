import { useState } from "react";

export const useToggleOpen = (initial?: boolean) => {
	const [isOpen, setIsOpen] = useState(initial);
	return { isOpen, setIsOpen };
};
