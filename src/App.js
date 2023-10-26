import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carList = [];
    if (typeof carInput === "string") {
      carList = carInput.split(",");
    } else {
      throw new Error("[ERROR] : 문자만 입력해 주세요.");
    }

    carList.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] : 자동차 이름은 5자 이하만 입력 가능합니다.");
      }
    });
  }
}

export default App;
