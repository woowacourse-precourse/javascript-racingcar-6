import { MissionUtils } from "@woowacourse/mission-utils";
import { CAR_NAME_INPUT_MESSAGE, RACE_COUNT_INPUT_MESSAGE } from './Messages.js';
import { checkCarName, checkRaceCount } from './Validation.js';

export async function readCarName() {
    const carNameInput = await MissionUtils.Console.readLineAsync(CAR_NAME_INPUT_MESSAGE + "\n");
    checkCarName(carNameInput);

    return carNameInput;
};

export async function readRaceCount() {
    const raceCountInput = await MissionUtils.Console.readLineAsync(RACE_COUNT_INPUT_MESSAGE + "\n");
    checkRaceCount(raceCountInput);

    return raceCountInput;
};
