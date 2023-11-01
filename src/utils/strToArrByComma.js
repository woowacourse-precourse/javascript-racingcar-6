export const strToArrByComma = (str) => {
	str = str.replaceAll(' ', '');
	const arr = str.split(',');
	return arr;
};