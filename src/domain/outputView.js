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
  countArr = countArr.map((el) => (el = el.length));
  finalWinner(carNamesArray, countArr);
};

export const finalWinner = (carNamesArray, countArr) => {
  let result = [];
  for (let i = 0; i < carNamesArray.length; i++) {
    result.push([carNamesArray[i], countArr[i]]);
  }
  result = result.sort((a, b) => b[1] - a[1]);
  if (result[0][1] !== result[1][1]) {
    MissionUtils.Console.print(`최종 우승자 : ${result[0][0]}`);
  } else {
    let k = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i][1] !== result[i + 1][1]) {
        k = i;
        break;
      }
    }
    MissionUtils.Console.print('최종 우승자 : \r');
    for (let i = 0; i <= k; i++) {
      MissionUtils.Console.print(result[i][0]);
    }
  }
};
