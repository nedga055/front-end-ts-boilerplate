type ThrottleCallbackFunction = (...args: any[]) => any;

export const throttle = (delay: number, fn: ThrottleCallbackFunction) => {
	let timerId;
	return (...args) => {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			fn(...args);
			timerId = null;
		}, delay);
	}
};
