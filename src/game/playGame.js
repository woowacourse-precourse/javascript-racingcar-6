import { MissionUtils } from '@woowacourse/mission-utils';

import result from './result.js';

export default function playGame(carArr, count) {
    MissionUtils.Console.print('실행 결과');
    result(carArr, count);
}