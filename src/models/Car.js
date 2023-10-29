import { Console } from "@woowacourse/mission-utils";
import { ErrorMessage, PromptMessage } from "../views/Messages.js";

class Car {
  constructor() {
    this.carModelsArr = [];
    this.carModels = {};
  }

  async getCarModels() {
    const getCarModels = await Console.readLineAsync(
      PromptMessage.ENTER_CARNAME
    );
    this.carModelsArr = getCarModels.split(",").map((name) => name.trim());
  }

  getCarModelsArr(carModelsArr) {
    carModelsArr = this.carModelsArr;
    carModelsArr.forEach((e) => {
      if (e.length > 5) {
        throw new Error(ErrorMessage.INVALID_LENGTH);
      }
    });

    carModelsArr.forEach((e) => {
      if (e === "") {
        throw new Error(ErrorMessage.SPACE_NAME);
      }
    });

    const set = new Set(carModelsArr);
    if (carModelsArr.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NAME);
    }

    carModelsArr.forEach((car) => {
      this.carModels[car] = {
        forwardCountArr: [],
      };
    });
  }
}

export default Car;
