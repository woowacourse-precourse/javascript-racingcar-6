import validateRacingCar from "./validateRacingCar.js";

const racingCar = (input) => {
  const input_string = input;
  const input_array = input_string.split(",");

  if (!validateRacingCar(input_array)) {
    throw new Error("[ERROR] 문자가 잘못된 형식입니다.");
  }
  const input_object_array = input_array.map((item) => {
    return {
      car: item,
      currentState: 0,
    };
  });
  return input_object_array;
};

export default racingCar;
