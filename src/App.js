import { MissionUtils } from '@woowacourse/mission-utils';
import Prompter from './utils/Prompter.js';
import Inspector from './utils/Inspector.js';
import Race from './utils/Race.js';

class App {
  async play () {
    const prompter = new Prompter();
    const inspector = new Inspector();  

    // 선수 입력값 받아오기
    const userInput = await prompter.getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const players = await inspector.isSplitable(userInput);
    if (!players) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
    } 

    // 움직임 입력값 받아오기
    const number = await prompter.getUserInput('시도할 횟수는 몇 회인가요?');
    const moveNumber = await inspector.isNumber(number);
    if (!moveNumber) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.')
    }

    // 게임 시작
    const race = new Race(players);
    await race.compete(moveNumber);
    const winner = await race.getWinner();
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
