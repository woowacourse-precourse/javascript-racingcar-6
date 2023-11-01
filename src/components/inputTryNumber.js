import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR, ERROR } from '../pages/texts.js';

export default async function inputTryNumber() {
    const count = await MissionUtils.Console.readLineAsync(CAR.count);

    if (isNaN(count) || !Number.isInteger(Number(count))) throw new Error(ERROR.COUNT);
    if (count <= 0) throw Error(ERROR.blank);

    return count;
}
