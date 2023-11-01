import { Console } from "@woowacourse/mission-utils";
import validateRacingCar from "./validateRacingCar.js";

const getRacingCar = async () => {
  const inputString = await Console.readLineAsync("");
  const inputArray = inputString.split(",");

  if (!validateRacingCar(inputArray)) {
    throw new Error("[ERROR] 문자가 잘못된 형식입니다.");
  }
  const inputObjectAarray = inputArray.map((item) => {
    return {
      car: item,
      currentState: 0,
    };
  });
  return inputObjectAarray;
};

export default getRacingCar;
