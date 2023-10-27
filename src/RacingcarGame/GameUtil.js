import { ErrorMessage } from "../message";

class GameUtil {
  carNameVaildator(car) {
    if (car.length > 5) {
      throw new Error(ErrorMessage.CAR_NAME_LENGTH);
    }
  }
}

export default GameUtil;
