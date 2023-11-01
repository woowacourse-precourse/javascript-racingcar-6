import { MissionUtils } from "@woowacourse/mission-utils";

const randomNumber = () => {
	return MissionUtils.Random.pickNumberInRange(0, 9);
};

export default randomNumber;