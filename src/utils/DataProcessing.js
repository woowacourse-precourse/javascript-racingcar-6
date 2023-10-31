import { Console } from '@woowacourse/mission-utils';
import { checkLength } from './CheckInput';
import { MESSAGE } from './Constants';

// 자동차 이름 받고 분리하기
export const getCarsName = (input) => {
	const carList = input.split(',').map((element) => {
		checkLength(element);

		return {
			name: element,
			count: '',
		};
	});

	return carList;
};

// 승자 목록 추출 및 출력
export const getWinner = (cars) => {
	const winnerScore = Math.max(
		...cars.map((element) => {
			return element.count.length;
		})
	);

	const winnerList = cars
		.filter((element) => element.count.length === winnerScore)
		.map((car) => car.name)
		.join(', ');

	Console.print(MESSAGE.end + winnerList);
};
