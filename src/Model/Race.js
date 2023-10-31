import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVING_FORWARD } from "../constants/constants";

export default class Race {
	getRandomNumber() {
		return MissionUtils.Random.pickNumberInRange(0, 9);
	}
}