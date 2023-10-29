export const getLines = (number) => {
	let lines = '';
	for (var i = 0; i < number; i++)
		lines += '-';

	return lines;
};