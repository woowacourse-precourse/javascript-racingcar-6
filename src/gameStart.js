import { MissionUtils } from '@woowacourse/mission-utils';
import { isNameLengthUnderFive } from './validation.js';

const MINIMUM_MOVE_THRESHOLD = 4;

async function getRacecarNames(gameData) {
  const str = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const data = str
    .split(',')
    .map((name) => ({ name: isNameLengthUnderFive(name), count: 0 }));
  gameData.setRacecarNames(data);
}

async function getRoofNum(gameData) {
  const num = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );
  gameData.setRoofNum(num);
}

function displayWinner(gameData) {
  let top = 0;
  gameData.getRacecarNames().forEach((data, idx) => {
    if (top < data.count) {
      top = data.count;
    }
  });
  const winner = gameData
    .getRacecarNames()
    .filter((data) => data.count === top)
    .map((data) => data.name);

  MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
}

function isCarMove() {
  return MissionUtils.Random.pickNumberInRange(0, 9) >= MINIMUM_MOVE_THRESHOLD;
}

async function gameStart(gameData) {
  await getRacecarNames(gameData);
  await getRoofNum(gameData);

  MissionUtils.Console.print('\n실행 결과');
  let roofNum = gameData.getRoofNum();

  while (roofNum-- > 0) {
    gameData.getRacecarNames().forEach((data, i) => {
      if (isCarMove()) {
        data.count++;
      }
      MissionUtils.Console.print(`${data.name} : ${'-'.repeat(data.count)}`);
    });
    MissionUtils.Console.print('\n');
  }

  displayWinner(gameData);
}

export { gameStart };
