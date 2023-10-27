import { MissionUtils } from '@woowacourse/mission-utils';

import gameRounds from './gameRounds.js';

export default function result(carArr, count) {
    let strArr = [...Array(carArr.length).fill('')];
    for(let round = 0; round < count; round++) {
        gameRounds(carArr, strArr);
        MissionUtils.Console.print('\n');
    }

    let res = -1;
    let winner = [];
    for(const [index, score] of strArr.entries()) {
        if(score.length === res) {
            winner.push(carArr[index]);
        }
        if(score.length > res) {
            winner = [];
            res = score.length;
            winner.push(carArr[index]);
        }
    }
    const tmp = winner.join(', ');
    console.log("최종 우승자 : ", tmp);
}