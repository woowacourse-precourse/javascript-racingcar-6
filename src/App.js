import Prompter from './utils/Prompter.js'
import Inspector from './utils/Inspector.js';

class App {
  async play() {
    const prompter = new Prompter();
    const inspector = new Inspector();  

    // 선수 입력값 받아오기
    const players = await prompter.getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const splitedPlayers = await inspector.isSplitable(players);
    if (!splitedPlayers){
      throw new Error('[error] 선수 입력 오류')
    } 

    // 움직임 입력값 받아오기
    const moveNumber = await prompter.getUserInput('시도할 횟수는 몇 회인가요?');
    const numberNumber = await inspector.isNumber(moveNumber);
    if (!numberNumber){
      throw new Error('[error] 시도 횟수 입력 오류')
    }

  }
}

export default App;
