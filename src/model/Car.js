import GAME from '../constants/Game.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';

class Car {
	name;
	location;

	constructor(name) {
		this.name = name;
		this.location = 0;
	}

	move() {
		const moveProbability = randomNumberGenerator();

		if (moveProbability >= GAME.moveThreshold) this.location++;
	}
}

export default Car;
