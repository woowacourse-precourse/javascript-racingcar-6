import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidCarNames, isValidAttempt } from './validate.js';
import { RaceManage } from './RaceManage.js';

class App {
  async play() {
    const carNames = await getCarNames();
    const attempt = await getAttempt();
    startRacing(carNames, attempt);
  }
}

async function getCarNames() {
  const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  const carNames = carNamesInput.split(',');
  isValidCarNames(carNames);
  return carNames;
}

async function getAttempt() {
  const attemptInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const attempt = parseInt(attemptInput);
  isValidAttempt(attempt);
  return attempt;
}

function startRacing(carNames, attempt) {
  const raceManagement = new RaceManage(carNames);
  raceManagement.startRace(attempt);
}

export default App;
