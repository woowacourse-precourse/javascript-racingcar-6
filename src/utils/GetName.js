// 자동차 이름 받고 분리하기
export const getCars = (input) => {
	const carList = input.split(',').map((element) => {
		checkLength(element);

		return {
			name: element,
			count: '',
		};
	});

	return carList;
};
