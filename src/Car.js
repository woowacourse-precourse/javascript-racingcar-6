import { Random } from "@woowacourse/mission-utils";

class Car {
	constructor(name) {
		this.name = name;
		this.message = [];
		this.maxDash = 0;
	}

	updateDash() {
		const raceCarNumber = Random.pickNumberInRange(0, 9);
		if (raceCarNumber >= 4) {
			this.message.push('-');
		}
		const dashCount = this.message.filter((message) => message === '-').length;
		if (dashCount > this.maxDash) {
			this.maxDash = dashCount;
		}
	}
}

export default Car;