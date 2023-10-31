import Output from '../View/Output';

export default class ScoreBoard {
	constructor() {
		this.output = new Output();
	}

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
			this.output.print(`${name} : ${DISTANCE}`);
		});
	}
}
