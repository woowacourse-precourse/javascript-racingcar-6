import { Random, Console } from "@woowacourse/mission-utils";
class GameModel {
  constructor() {
    this.carModels = [];
  }

  // this.carModels = [ 'a', 'b', 'c' ]
  async getCarModels() {
    const getCarModels = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
    );
    const carModelsArr = getCarModels.split(",").map((name) => name.trim()); //공백제거 trim

    //5 자 이하여야 한다.
    carModelsArr.forEach((e) => {
      if (e.length > 5) {
        throw new Error("[ERROR] 이름이 5자를 초과하였습니다.");
      }
    });
    //중복되면 안된다.
    const set = new Set(carModelsArr);
    if (carModelsArr.length !== set.size) {
      throw new Error("[ERROR] 이름이 중복되었습니다.");
    }

    this.carModels = carModelsArr;
    return this.carModels;
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
    return this.attempt;
  }

  getRandomValue() {
    let rand = Random.pickNumberInRange(0, 9);
    return rand;
  }
}

const model = new GameModel();
// model.getCarModel();
model.getRaceAttempt();

export default GameModel;
