import { nameValidation, duplicateChecks } from "./Validations";

export default class Cars {
  constructor(arr) {
    Cars.validations(arr);
    this.obj = {};
    arr.forEach((v) => {
      this.obj[v] = 0;
    });
    this.len = arr.length;
  }

  move_cars(moves) {
    Object.keys(this.obj).forEach((item, i) => {
      if (moves[i] >= 4) this.obj[item] += 1;
    });
  }

  static validations(arr) {
    nameValidation(arr);
    duplicateChecks(arr);
  };
}
