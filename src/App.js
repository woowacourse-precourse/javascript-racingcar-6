import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const nameInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const tryNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const names = nameInput.split(',')

    let result = []
    for(let i = 0; i < names.length; i++){
      if(names[i].length > 5){
        throw new Error("[ERROR] 이름의 길이가 5를 초과했습니다 (길이 > 5)");
      } else if(names[i].length == 0){
        throw new Error("[ERROR] 비어있는 이름을 작성하였습니다. (길이 = 0)");
      }
      result.push('');
    }
  }
  
}

export default App;
