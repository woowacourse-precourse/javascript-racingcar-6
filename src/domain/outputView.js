import { MissionUtils } from '@woowacourse/mission-utils';
import { makeRandomNumberAndJudge } from './NumberGenerator.js';

export const racingProgress = async (carNamesArray, tryNumber) => {
  const RESULT = [];
  let countArr = [];
  for (let i = 0; i < carNamesArray.length; i++) {
    countArr.push([]);
  }

  for (let i = 0; i < carNamesArray.length; i++) {
    RESULT.push(await makeRandomNumberAndJudge(tryNumber));
  }

  MissionUtils.Console.print('실행 결과');
  for (let i = 0; i < tryNumber; i++) {
    for (let j = 0; j < RESULT.length; j++) {
      if (RESULT[j][i] != 0) {
        countArr[j].push('-');
      }
      MissionUtils.Console.print(`${carNamesArray[j]} : ${countArr[j].join('').trim()}`);
    }
    MissionUtils.Console.print('\n');
  }
};
