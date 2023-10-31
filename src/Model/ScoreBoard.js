export default class ScoreBoard {
	getScoreBoard(CARS) {
		const carsObj = {};

		CARS.forEach((car) => {
			carsObj[car] = 0;
		});

		return carsObj;
	}
}
