import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    
    /** 이름, 시도 횟수를 입력받는 함수 */ 
    async function getName() {
      const nameList = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const nameArr = nameList.split(",");
      
      // 문자가 5글자 이상일 경우 에러 출력
      for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i].length >= 5) {
          throw new Error("[ERROR] 문자가 5글자 이상입니다.");
        } else {
          continue;
        }
      }
      const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      return nameArr, tryCount;
    }
    
    let carList, tryCount = getName();


    
  }
}

export default App;