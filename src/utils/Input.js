import { Console } from "@woowacourse/mission-utils";

const Input = {
  async racingCar() {
    const racingCars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const racingCarList = racingCars.split(',');
    return racingCarList;
  },
  async racingCount() {
    const racingCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return Number(racingCount);
  },
}

export default Input;