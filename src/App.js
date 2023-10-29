import makeCarList from "./util/makeCarList.js";
import enterValue from "./util/enterValue.js";
import checkForward from "./util/checkForward.js";
import goFoward from "./util/goFoward.js";
import { Console } from "@woowacourse/mission-utils";
import printResult from "./util/printResult.js";

class App {
  async play() {
    //자동차 객체 배열 설정
    let cars = await makeCarList();

    //시도 횟수 입력
    const count = await enterValue("시도할 횟수는 몇회인가요?", "number");
    Console.print("실행 결과");

    //각 시도별 전진여부 판단 및 전진
    for (let i = 0; i < count; i++) {
      cars = await checkForward(cars);
      goFoward(cars);
    }
    printResult(cars);
    return;
  }
}

export default App;
