import { MissionUtils } from '@woowacourse/mission-utils';

export default class ScoreBoard {
	getScoreBoard(CARS) {
		const carsObj = {};

		CARS.forEach((car) => {
			carsObj[car] = 0;
		});

		return carsObj;
	}

	showCurrentRace(carsObj) {
		Object.keys(carsObj).forEach((name) => {
			const DISTANCE = '-'.repeat(carsObj[name]);
			MissionUtils.Console.print(`${name} : ${DISTANCE}`);
		});
	}
}
