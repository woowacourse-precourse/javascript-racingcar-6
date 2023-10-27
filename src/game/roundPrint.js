import { MissionUtils } from '@woowacourse/mission-utils';

import advanceCondition from '../data/advanceCondition.js';

export default function roundPrint(carArr, scoreArr, car) {
    if(advanceCondition()) {
        scoreArr[car] += '-';
    }
    MissionUtils.Console.print(`${carArr[car]} : ${scoreArr[car]}`);
}