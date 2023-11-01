import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor(name) {
    this.name = name;
  }
  
  async play() {
    await this.inputCarName();
    this.run();
  }

  async inputCarName() {
    try {
      const carName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      const cars = carName.split(",");

      for (let i = 0; i < cars.length; i++) {
        this.isCarName(cars, i);
        carNameList.push(cars[i]); 
      }
      console.log(cars[0]);
    } catch (error) {
      console.error(error.message); // 에러 메시지 출력
    }
  }

  isCarName(checkList, i) {
    if (isNaN(parseFloat(checkList[i])) || checkList[i].trim() === "") {
      throw new Error("[ERROR] 값이 비어있습니다.");
    }
    if (checkList[i].length > 5) {
      throw new Error("[ERROR] 5자리 이하의 값만 입력해주세요.");
    }
  }

  checkCarRandomNumber() {}

  run() {
    // this.randomNumber();
    // this.inputNumber();
    // this.checkNumber();
  }
}

const carNameList = [];


new App().inputCarName().catch(console.error);
