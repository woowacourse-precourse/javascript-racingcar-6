import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants.js';

export default class RacingCar {
	constructor(name) {
		this.name = name;
		this.distance = 0;
	}

	go() {
		this.distance += 1;
	}

	showCarPosition() {
		Console.print(`${this.name} : ${CONSTANTS.distanceMarker.repeat(this.distance)}`);
	}
}
