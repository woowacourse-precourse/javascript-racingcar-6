import { ERROR } from "../Constant/Constant";

const InputValidate = {
  readCarsValidate(input) {
    let inputCars = input.split(",");
    if (inputCars.some((item) => item.length > 5))
      throw new Error(ERROR.CARS_LENGTH_ERROR);
    let set = new Set(inputCars);
    if (set.size !== inputCars.length)
      throw new Error(ERROR.CARS_SAMEINPUT_ERROR);
    if (inputCars.some((item) => item.includes(" "))) {
      throw new Error(ERROR.CARS_SPACE_ERROR);
    }
    if (inputCars.length <= 1) throw new Error(ERROR.CARS_SIZE_ERROR);
  },
  readTrynumValidate(input) {
    if (!input.match(/\d+/g)) throw new Error(ERROR.TRYNUM_TYPE_ERROR);
    if (+input <= 0) throw new Error(ERROR.TRYNUM__SIZE_ERROR);
  },
};

export default InputValidate;
