import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE_FUNCTION, OUTPUT_MESSAGE } from '../constants/Messages.js';
import Validators from '../utils/validator/index.js';

const InputView = {
  async readRacingVehicleName(vehicle) {
    const racingVehicleName = await Console.readLineAsync(INPUT_MESSAGE_FUNCTION.name(vehicle));
    Validators.checkRacingVehicleName(racingVehicleName);
    return racingVehicleName;
  },

  async readRacingCount() {
    const racingCount = await Console.readLineAsync(OUTPUT_MESSAGE.count);
    Validators.checkRacingCount(racingCount);
    return racingCount;
  },
};

export default InputView;
