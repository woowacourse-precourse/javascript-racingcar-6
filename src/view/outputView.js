import { MissionUtils } from '@woowacourse/mission-utils';

export const racingOutput = (carObject) => {
  if (!carObject) {
    return; // 빈 값을 무시하도록 수정
  }

  if (typeof carObject === 'string') {
    MissionUtils.Console.print(carObject);
  } else {
    Object.entries(carObject).forEach(([carName, dash]) => {
      MissionUtils.Console.print(`${carName} : ${dash}`);
    });
  }
};

export const printWinningMessage = (winner) => {
  MissionUtils.Console.print('최종 우승자 : ' + winner);
};
