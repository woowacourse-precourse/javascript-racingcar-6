import { MissionUtils } from '@woowacourse/mission-utils';
import { validateNameLength } from './validation.js';

async function getRacecarNames(gameData) {
  const input = await MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  const data = input
    .split(',')
    .map((name) => ({ name: validateNameLength(name), count: 0 }));
  gameData.setRacecarNames(data);
}

async function getRoofNum(gameData) {
  const attemps = await MissionUtils.Console.readLineAsync(
    '시도할 횟수는 몇 회인가요?\n'
  );
  gameData.setRoofNum(attemps);
}

async function askRaceInfo(gameData) {
  await getRacecarNames(gameData);
  await getRoofNum(gameData);
}

export { askRaceInfo };
