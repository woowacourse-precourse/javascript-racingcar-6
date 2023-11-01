import { Console } from '@woowacourse/mission-utils';
import { RULE } from '../constants/constants.js';

export class SetRacingCar {
	constructor(car) {
		this.car = car;
		this.score = 0;
	}
	run() {
		this.score += 1;
	}
	state() {
		Console.print(`${this.car} : ${RULE.WIN_SIGN.repeat(this.score)}`);
	}
}
