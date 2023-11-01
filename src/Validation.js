import { ERROR_MESSEAGE } from "./const/errorData.js";

const Validation = {
  carNames(carNames) {
    if (
      carNames
        .split(",")
        .filter((carName) => carName.length >= 1 || carName.length <= 5)
        .length != carNames.split(",").length
    ) {
      throw new Error(ERROR_MESSEAGE.CAR_NAME_LENGTH);
    }

    if (carNames.split(",").length != new Set(carNames.split(",")).size) {
      throw new Error(ERROR_MESSEAGE.CAR_NAME_DUPLICATION);
    }

    if (carNames.split(",").length <= 1) {
      throw new Error(ERROR_MESSEAGE.CAR_COUNT_MIN);
    }

    if (carNames.includes(" ")) {
      throw new Error(ERROR_MESSEAGE.BLANK_FORM);
    }
  },
  tryCount(tryCount) {
    if (Number.isNaN(Number(tryCount))) {
      throw new Error(ERROR_MESSEAGE.NUMBER_FORM);
    }

    if (Number(tryCount) < 1) {
      throw new Error(ERROR_MESSEAGE.TRY_COUNT_MIN);
    }
  },
};

export default Validation;
