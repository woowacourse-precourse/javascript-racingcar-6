import { MissionUtils } from '@woowacourse/mission-utils';

import gameRounds from './gameRounds.js';
import selectWinner from './selectWinner.js';

export default function result(carArr, count) {
    let scoreArr = [...Array(carArr.length).fill('')];
    for(let round = 0; round < count; round++) {
        gameRounds(carArr, scoreArr);
        MissionUtils.Console.print('\n');
    }
    let winner = selectWinner(carArr, scoreArr);
    winner = '최종 우승자 : ' + winner;

    return winner;
}