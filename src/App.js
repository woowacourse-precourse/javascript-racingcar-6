import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const MAX_CAR_NAME_LENGTH = 5;
    const MIN_ROUNDS = 1;
    const MAX_ROUNDS = 100;

    try {
      MissionUtils.Console.print(
        "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = await MissionUtils.Console.readLineAsync();
      const carNamesArray = carNames.split(",").map((name) => name.trim());
      MissionUtils.Console.print(`${carNamesArray}`);

      carNamesArray.forEach((name) => {
        if (name.length > MAX_CAR_NAME_LENGTH) {
          throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
        }
      });

      MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
      const rounds = await MissionUtils.Console.readLineAsync();
      MissionUtils.Console.print(`${rounds}`);

      if (rounds < MIN_ROUNDS || rounds > MAX_ROUNDS) {
        throw new Error("[ERROR] 시도 횟수는 1에서 100 사이어야 합니다.");
      }

      MissionUtils.Console.print("실행 결과");

      const winners = this.startRace(carNamesArray, rounds);

      // 최종 우승자 출력
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (error) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
  }

  startRace(carNames, rounds) {
    const carPositions = carNames.map(() => "-");
    const winners = [];

    for (let round = 0; round < rounds; round++) {
      carNames.forEach((car, index) => {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          carPositions[index] += "-";
        }
      });
    }

    const maxPosition = Math.max(
      ...carPositions.map((position) => position.length)
    );
    carNames.forEach((car, index) => {
      if (carPositions[index].length === maxPosition) {
        winners.push(car);
      }
      MissionUtils.Console.print(`${car} : ${carPositions[index]}`);
    });

    return winners;
  }
}

export default App;
