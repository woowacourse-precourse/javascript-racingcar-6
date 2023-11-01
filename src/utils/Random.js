import { Random } from '@woowacourse/mission-utils';

// 자동차의 갯수만큼 랜덤값 받아오기
const getCarsNumber = (carCount) => {
	const carsNumber = [];

	while (carsNumber.length < carCount) {
		carsNumber.push(Random.pickNumberInRange(0, 9));
	}

	return carsNumber;
};

export default getCarsNumber;
