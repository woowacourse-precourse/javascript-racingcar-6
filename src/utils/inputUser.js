import { MissionUtils } from '@woowacourse/mission-utils';

const input = async () => {
    return await MissionUtils.Console.readLineAsync();
};

const inputCarNames = async () => {
    const carNames = await input();

    return carNames.split(',');
};

const inputAttemptNumber = async () => {
    const attemptNumber = await input();

    return Number(attemptNumber);
}

export { inputCarNames, inputAttemptNumber };