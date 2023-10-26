import { MissionUtils } from '@woowacourse/mission-utils';

import gameRounds from './gameRounds.js';

export default function result(carArr, count) {
    let strArr = [...Array(carArr.length).fill('')];
    for(let round = 0; round < count; round++) {
        gameRounds(carArr, strArr);
        MissionUtils.Console.print('\n');
    }
    let res = -1;
    let winner = null;
    for(const [index, score] of strArr.entries()) {
        if(score.length > res) {
            res = score.length;
            winner = carArr[index];
        }
    }

    console.log(winner);
}