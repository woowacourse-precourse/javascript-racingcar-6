import makeCarList from "./util/makeCarList.js";
import enterValue from "./util/enterValue.js";
import checkForward from "./util/checkForward.js";
import goFoward from "./util/goFoward.js";
class App {
  async play() {
    let cars = await makeCarList();
    const count = await enterValue("시도할 횟수는 몇회인가요?");
    Console.print("실행 결과");
    for (let i = 0; i < count; i++) {
      cars = await checkForward(cars);
      goFoward(cars);
    }
  }
}

export default App;
