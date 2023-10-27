import { Random, Console } from "@woowacourse/mission-utils";
class GameModel {
  constructor() {
    this.carModels = [];
  }

  //[ 'a', 'b', 'c' ]
  async getCarModel() {
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
}

const model = new GameModel();
model.getCarModel();

export default GameModel;
