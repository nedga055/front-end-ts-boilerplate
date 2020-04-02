import { useState, useEffect } from "react";
import { throttle } from "../utils/helpers";

const getDeviceBreakpoint = (width: number) => {
	if (width < 576) {
		return "xs";
	} else if (width >= 576 && width < 768) {
		return "sm";
	} else if (width >= 768 && width < 992) {
		return "md";
	} else if (width >= 992 && width < 1280) {
		return "lg";
	} else if (width >= 1280) {
		return "xl";
	}
};

export const useBreakpoint = () => {
	const client = typeof window !== "undefined";
	const [breakpoint, setBreakpoint] = useState(() =>
		client ? getDeviceBreakpoint(window.innerWidth) : "xl",
	);

	const calculateInnerWidth = throttle(200, () => {
		setBreakpoint(getDeviceBreakpoint(window.innerWidth));
	});

	useEffect(() => {
		if (client) {
			window.addEventListener("resize", calculateInnerWidth);
		}
		return () =>
			client && window.removeEventListener("resize", calculateInnerWidth);
	}, []);

	return breakpoint;
};
