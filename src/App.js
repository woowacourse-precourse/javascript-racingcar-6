import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    /** 레이싱 게임 함수 */
    const game = function racingGame(arr, count) {
      // 배열을 오브젝트로 변경
      let nameObj = {};
      arr.forEach((element) => {
        nameObj[element] = 0;
      });
      for (let i = 0; i < count; i++) {
        for (let j in arr) {
          let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
          if (randonNum >= 4) {
            nameObj[j] += 1;
          }
        }
        
      }
    }
    
    /** 무응답, 형식 오류 검증 함수 */
    const error = function validCheck(nameList,runCount) {
      let nullCheck = nameList ?? false;
      nullCheck = runCount ?? false;
      for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i].length >= 5) {
          throw new Error(`[ERROR] 자동차 이름은 5글자 이내로 입력해주세요.`);
        }
      }
      if (nullCheck == false) {
          throw new Error(`[ERROR] 형식이 올바르지 않습니다.`);
      }
    }

    const nameList = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const runCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const nameArr = nameList.split(",");
    validCheck(nameArr, runCount);

    // 배열을 오브젝트로 변경
    

    racingGame(nameObj, runCount);
    
  }
}

export default App;