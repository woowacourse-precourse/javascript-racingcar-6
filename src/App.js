import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  
  Check_Name(){} //이름 예외 처리

  Check_Match_Num(MATCH_NUM){}//숫자 예외 처리

  async play() {
    
    
    const USER_INPUT = await Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
    const USER_NAME = USER_INPUT.split(',');
    this.Check_Name(USER_NAME);

    const MATCH_NUM= await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.Check_Match_Num(MATCH_NUM);
    
  }
}
export default App;

