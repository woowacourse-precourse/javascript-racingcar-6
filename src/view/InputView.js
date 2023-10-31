import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE_FUNCTION, OUTPUT_MESSAGE } from '../constants/Messages.js';

const InputView = {
  async readRacingVehicleName(vehicle) {
    const racingVehicleName = await Console.readLineAsync(INPUT_MESSAGE_FUNCTION.name(vehicle));
    return racingVehicleName;
  },

  async readRacingCount() {
    const racingCount = await Console.readLineAsync(OUTPUT_MESSAGE.count);
    return racingCount;
  },
};

export default InputView;
