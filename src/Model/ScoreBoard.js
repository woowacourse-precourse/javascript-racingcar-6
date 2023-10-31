import Output from '../View/Output';

export default class ScoreBoard {
	constructor() {
		this.output = new Output();
	}

	getScoreBoard(CARS) {
		const CARS_OBJ = {};

		CARS.forEach((car) => {
			CARS_OBJ[car] = 0;
		});

		return CARS_OBJ;
	}

	showCurrentRace(carsObj) {
		Object.keys(carsObj).forEach((name) => {
			const DISTANCE = '-'.repeat(carsObj[name]);
			this.output.print(`${name} : ${DISTANCE}`);
		});
	}
}
