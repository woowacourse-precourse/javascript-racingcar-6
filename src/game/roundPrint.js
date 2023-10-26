import { MissionUtils } from '@woowacourse/mission-utils';

import advanceCondition from '../data/advanceCondition.js';

export default function roundPrint(carArr, strArr, car) {
    if(advanceCondition()) {
        strArr[car] += '-';
    }
    MissionUtils.Console.print(`${carArr[car]} : ${strArr[car]}`);
}