import { MissionUtils } from '@woowacourse/mission-utils';

import result from './result.js';

export default function playGame(carArr, count) {
    MissionUtils.Console.print('실행 결과');
    const winner = result(carArr, count);
    
    MissionUtils.Console.print(winner);
}