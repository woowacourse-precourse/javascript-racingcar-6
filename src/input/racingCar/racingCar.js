import { Console } from "@woowacourse/mission-utils";

const racingCar = (input) => {
  const input_string = input;
  const input_array = input_string.split(",");
  const input_object_array = input_array.map((item) => {
    return {
      car: item,
      currentState: 0,
    };
  });
  return input_object_array;
};

export default racingCar;
