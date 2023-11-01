import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM } from '../constants.js';

const makeRandomNumber = () => MissionUtils.Random.pickNumberInRange(RANDOM.MIN, RANDOM.MAX);

export default makeRandomNumber;
