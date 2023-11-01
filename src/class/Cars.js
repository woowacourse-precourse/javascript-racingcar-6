import { MissionUtils } from "@woowacourse/mission-utils";

class Cars {
	constructor(names) {
		this.number = names.length;
		this.names = names;
		this.distances = new Array(names.length).fill(0);
	}

	moveOrStop() {
		for (var i = 0; i < this.number; i++) {
			if (this.isMove())
				this.distances[i]++;
		}
	}

	isMove() {
		const number = MissionUtils.Random.pickNumberInRange(0, 9);
		return number >= 4;
	};

	getWinners() {
		const maxDistance = Math.max(...this.distances);
		const winners = this.names.filter((_, i) => this.distances[i] == maxDistance);

		return winners;
	}
}

export default Cars;