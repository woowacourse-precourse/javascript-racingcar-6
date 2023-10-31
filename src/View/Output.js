import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE } from '../constants/constants';

export default class Output {
	print(text) {
		MissionUtils.Console.print(text);
	}

	printCarNames(input) {
		this.print(GUIDE_MESSAGE.enter_car_names);
		this.print(input);
	}

  printAttempts(input) {
    this.print(GUIDE_MESSAGE.enter_number_of_attempts)
    this.print(input)
  }

  printStartGame() {
    this.print(GUIDE_MESSAGE.print_results)
  }
}
