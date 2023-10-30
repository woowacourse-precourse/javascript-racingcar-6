import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE_FUNCTION } from '../constants/Messages.js';

const InputView = {
  async readRacingVehicleName(vehicle) {
    const racingVehicleName = await Console.readLineAsync(INPUT_MESSAGE_FUNCTION.name(vehicle));
    return racingVehicleName;
  },
};

export default InputView;
