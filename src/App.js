import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const playGame = function racingGame(nameArr, count) {
      let nameObj = {};
      for (let i = 0; i < nameArr.length; i++) {
        nameObj[nameArr[i]] = 0;
      }
      for (let i = 0; i < count; i++) {
        nameArr.forEach((num) => {
          nameObj[num] += 1;
        });
        nameArr.forEach((j) => {
          const dashes = "-".repeat(nameObj[j]);
          Console.print(`${j} : ${dashes}`);
        });
      }
    };

    const validateError = function validateCheck(nameArr, nameList, runCount) {
      let nullCheck = nameList ?? false;
      nullCheck = runCount ?? false;
      for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i].length >= 5) {
          throw new Error("[ERROR] 이름은 5글자 이내로 입력해주세요.");
        }
      }
      if (nullCheck == false) {
        throw new Error("[ERROR] 형식이 올바르지 않습니다.");
      }
    };

    const nameList = await Console.readLineAsync(
      "자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const runCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const nameArr = nameList.split(",");
    validateError(nameArr, nameList, runCount);
    playGame(nameArr, runCount);
  }
}

export default App;
