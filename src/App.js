import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let CAR_NAME = [];
    Console.readLine(
      "경주 할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n",
      (answer) => {
        // console.log(`닉네임: ${answer}`);
        CAR_NAME = answer.split(",");
        console.log("CAR_NAME: ", CAR_NAME);
      }
    );
  }
}

export default App;

const app = new App();
app.play();
