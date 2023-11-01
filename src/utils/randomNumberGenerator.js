import { MissionUtils } from '@woowacourse/mission-utils';
import GAME from '../constants/Game.js';

const randomNumberGenerator = () => {
	return MissionUtils.Random.pickNumberInRange(
		GAME.minRandomNum,
		GAME.maxRandomNum
	);
};

export default randomNumberGenerator;
