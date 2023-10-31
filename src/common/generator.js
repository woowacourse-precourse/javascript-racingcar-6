import { Random } from '@woowacourse/mission-utils';
import { GAME_SETTING } from './constants.js';

const generateRandomNumber = () => Random.pickNumberInRange(GAME_SETTING.MIN_RANDOM_NUMBER, GAME_SETTING.MAX_RANDOM_NUMBER)

export default generateRandomNumber;