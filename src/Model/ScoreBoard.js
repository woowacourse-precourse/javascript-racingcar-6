import Output from '../View/Output';

export default class ScoreBoard {
	constructor() {
		this.output = new Output();
	}

	getScoreBoard(CARS) {
		const CARS_OBJ_FOR_SCOREBOARD = {};

		CARS.forEach((car) => {
			CARS_OBJ_FOR_SCOREBOARD[car] = 0;
		});

		return CARS_OBJ_FOR_SCOREBOARD;
	}

	showCurrentRace(carsObj) {
		const CARS_TO_GET_DISTANCE = carsObj;
		const NAMES_OF_CARS = Object.keys(CARS_TO_GET_DISTANCE)
		
		NAMES_OF_CARS.forEach((name) => {
			const DISTANCE = '-'.repeat(CARS_TO_GET_DISTANCE[name]);
			this.output.print(`${name} : ${DISTANCE}`);
		});
	}
}
