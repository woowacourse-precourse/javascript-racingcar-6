import { MissionUtils } from '@woowacourse/mission-utils';
import { validateInputAttemptNumber, validateInputCarNames } from '../validations/validateInputUser.js';

const input = async (printString = '') => {
    return await MissionUtils.Console.readLineAsync(printString);
};

const inputCarNames = async () => {
    const carNames = await input();
    validateInputCarNames(carNames);

    return carNames.split(',');
};

const inputAttemptNumber = async () => {
    const attemptNumber = await input();
    validateInputAttemptNumber(attemptNumber);

    return Number(attemptNumber);
}

export { inputCarNames, inputAttemptNumber };