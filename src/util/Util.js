import { Random } from "@woowacourse/mission-utils";

class Util {
	static isForward() {
		if (Random.pickNumberInRange(0, 9) >= 4) {
			return true;
		}
		return false;
	}
	static trimStringInArray(arr) {
		return arr.map((str) => str.trim());
	}
	static getWinners(carStateArray) {
		let maxForwardNumber = 0;
		carStateArray.forEach((carState) => {
			maxForwardNumber = Math.max(maxForwardNumber, carState.forwardNumber);
		});
		let winnersList = [];
		carStateArray.forEach((carState) => {
			if (carState.forwardNumber === maxForwardNumber) {
				winnersList.push(carState.name);
			}
		});
		return winnersList.join(', ');
	}
}

export default Util;