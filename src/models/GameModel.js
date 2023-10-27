import { Random, Console } from "@woowacourse/mission-utils";
class GameModel {
  constructor() {
    this.carModels = {};
  }

  // this.carModels = [ 'a', 'b', 'c' ]
  async getCarModels() {
    const getCarModels = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
    );
    this.carModelsArr = getCarModels.split(",").map((name) => name.trim());
    const carModelsArr = this.carModelsArr;
    //5 자 이하여야 한다.
    carModelsArr.forEach((e) => {
      if (e.length > 5) {
        throw new Error("[ERROR] 이름이 5자를 초과하였습니다.");
      }
    });
    //공백이면 안된다.
    carModelsArr.forEach((e) => {
      if (e === "") {
        throw new Error("[ERROR] 공백인 이름이 있습니다.");
      }
    });
    //중복되면 안된다.
    const set = new Set(carModelsArr);
    if (carModelsArr.length !== set.size) {
      throw new Error("[ERROR] 이름이 중복되었습니다.");
    }

    carModelsArr.forEach((car) => {
      this.carModels[car] = {
        forwardCountArr: [],
      };
    });
  }

  // this.attempt = 5
  async getRaceAttempt() {
    const getRaceAttempt = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );
    this.attempt = parseInt(getRaceAttempt);
    // 타입이 `Number`이어야 한다.
    if (isNaN(getRaceAttempt) !== false) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  getRandomValue() {
    let rand = Random.pickNumberInRange(0, 9);
    return rand;
  }

  // - push
  getForwardCount(car) {
    let randomValue = this.getRandomValue(); //함수 호출때마다 난수 새로 생성
    if (randomValue >= 4) {
      // this.forwardCountArr.push("-");
      this.carModels[car].forwardCountArr.push("-");
    }
    return this.carModels[car].forwardCountArr.join("");
  }

  printCarForward() {
    for (const car in this.carModels) {
      let forwardCount = this.getForwardCount(car);
      Console.print(`${car} : ${forwardCount}`);
    }
  }

  //입력한 시도 횟수만큼 반복
  repeatRace() {
    let attempt = this.attempt; // 5
    Console.print("\n실행 결과");
    while (attempt > 0) {
      this.printCarForward();
      attempt--;
      Console.print(" ");
    }
  }

  // winner 결정
  printWinner() {
    const totalCountArr = [];
    const maxCountIndexArr = [];
    for (const car in this.carModels) {
      let forwardCount = this.carModels[car].forwardCountArr;
      totalCountArr.push(forwardCount.length);
    }
    let formIndex = totalCountArr.indexOf(Math.max(...totalCountArr));

    //최댓값 들어있는 인덱스들의 값 반환
    while (formIndex != -1) {
      maxCountIndexArr.push(formIndex);
      formIndex = totalCountArr.indexOf(
        Math.max(...totalCountArr),
        formIndex + 1
      );
    }

    const winner = maxCountIndexArr.map((idx) => this.carModelsArr[idx]);
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default GameModel;
