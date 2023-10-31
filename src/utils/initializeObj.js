export function initializeCarNameObj(carNames) {
	const carNameObj = {};
	carNames.forEach((name) => {
		carNameObj[name] = 0;
	});
	return carNameObj;
}
