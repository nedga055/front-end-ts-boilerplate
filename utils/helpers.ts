type ThrottleCallbackFunction = (...args: any[]) => any;

let timerId;

export const throttle = (delay: number, fn: ThrottleCallbackFunction) => {
	return (...args) => {
		if (timerId) {
			clearTimeout(timerId);
		}
		timerId = setTimeout(() => {
			fn(...args);
			timerId = null;
		}, delay);
	};
};
