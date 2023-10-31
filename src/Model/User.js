import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants/constants';
import Validator from './Validator';

export default class User {
  constructor() {
    this.validator = new Validator();
  }

	async getCarNames() {
		const INPUT = await MissionUtils.Console.readLineAsync(
			GUIDE_MESSAGE.enter_car_names
		);  
    return String(INPUT)
	}
}
