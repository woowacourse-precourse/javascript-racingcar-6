import { Console } from "@woowacourse/mission-utils";

export const CarNameGenerator = async() => {
  const MAX_CAR_NAME_LENGTH = 5;

  const result = [];
  const carNames = await Console.readLineAsync();

  try {
    if (carNames.length < MAX_CAR_NAME_LENGTH) {
      carNames.split(",").map((name) => name.trim());
      result.push(carNames);
    }
    Console.print(`${carNames}`);
  }
  catch (error) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
  }
  
};
