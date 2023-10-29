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
		let maxForwardCount = 0;
		carStateArray.forEach((carState) => {
			maxForwardCount = Math.max(maxForwardCount, carState.forwardCount);
		});
		let winnersList = [];
		carStateArray.forEach((carState) => {
			if (carState.forwardCount === maxForwardCount) {
				winnersList.push(carState.name);
			}
		});
		return winnersList.join(', ');
	}
}

export default Util;