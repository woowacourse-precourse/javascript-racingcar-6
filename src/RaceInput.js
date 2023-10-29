import { MissionUtils } from "@woowacourse/mission-utils";
import { CAR_NAME_INPUT_MESSAGE } from './Messages.js';
import { checkCarName } from './Validation.js';

export async function readCarName() {
    const carNameInput = await MissionUtils.Console.readLineAsync(CAR_NAME_INPUT_MESSAGE + "\n");
    checkCarName(carNameInput);

    return carNameInput;
};

