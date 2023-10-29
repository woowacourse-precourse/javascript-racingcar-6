import { MissionUtils } from '@woowacourse/mission-utils';

function readLineCar() {
  return MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
}

function readLineGameCount() {
  return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
}

function consoleResult(msg) {
  return MissionUtils.Console.print(`${msg}`);
}
function consoleWinner(winner) {
  return MissionUtils.Console.print(`최종 우승자 : ${winner}`);
}

function randomNum() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}

export {
  readLineCar,
  readLineGameCount,
  consoleResult,
  consoleWinner,
  randomNum,
};
