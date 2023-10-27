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
}