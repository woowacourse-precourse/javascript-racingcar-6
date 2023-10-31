import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    // TODO: 경주할 자동차 이름 입력 받기
    const InputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    // TODO: , 로 구분해서 저장
    const carNames = InputCarNames.split(",");
    const cars = carNames.map((name) => ({ name, position: 0 }));

    // TODO: 유효처리 - 이름이 5자 이하인지
    this.checkCarNameLength(carNames);

    // TODO: 시도할 횟수 입력 받기
    const InputTryCount = await Console.readLineAsync(
      "시도할 횟수는 몇회인가요?\n"
    );
    const tryCount = this.checkInputNumber(InputTryCount);

    // TODO: 입력받은 횟수만큼 모든 차에 전진 or 멈춤 게임 진행
    Console.print("\n실행 결과");
    for (let i = 0; i < tryCount; i++) {
      this.GoOrStop(cars);
      // TODO: 한번 진행할 때마다 현재 상태 출력
      this.CurrentStatus(cars);
    }

    // TODO: 게임 종료 후 우승자 출력
  }

  checkCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
    return;
  }

  checkInputNumber(InputTryCount) {
    if (isNaN(InputTryCount)) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    return Number(InputTryCount);
  }

  // TODO: 전진할 경우 - 랜덤 숫자 생성 후 4이상일 경우 전진
  GoOrStop(cars) {
    cars.forEach((car) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.position += 1;
      }
    });
  }

  CurrentStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("\n");
  }
}

export default App;
