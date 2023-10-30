import { Console } from '@woowacourse/mission-utils';
import ErrorMessage from '../views/ErrorMessage.js';
import PromptMessage from '../views/PromptMessage.js';

class Car {
  constructor() {
    this.carModelsArr = [];
    this.carModels = {};
  }

  async getCarModelsArr() {
    const getCarModels = await Console.readLineAsync(
      PromptMessage.ENTER_CARNAME,
    );
    this.carModelsArr = getCarModels.split(',').map((name) => name.trim());
  }

  validateCarModels(carModelsArr) {
    let remainCarArr = carModelsArr;
    remainCarArr = this.carModelsArr;
    remainCarArr.forEach((e) => {
      if (e.length > 5) {
        throw new Error(ErrorMessage.INVALID_LENGTH);
      }
    });

    remainCarArr.forEach((e) => {
      if (e === '') {
        throw new Error(ErrorMessage.SPACE_NAME);
      }
    });

    const set = new Set(remainCarArr);
    if (remainCarArr.length !== set.size) {
      throw new Error(ErrorMessage.DUPLICATE_NAME);
    }

    remainCarArr.forEach((car) => {
      this.carModels[car] = {
        forwardCountArr: [],
      };
    });
  }
}

export default Car;
