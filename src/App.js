import Prompter from './utils/Prompter.js'

class App {
  async play() {
    const prompter = new Prompter();
    const players = await prompter.getUserInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const moveNumber = await prompter.getUserInput('시도할 횟수는 몇 회인가요?');
    
    console.log(players, moveNumber);
  }
}

export default App;
