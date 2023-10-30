import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './racingcar.js';
class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async play() {
    await this.getInput();
    this.validateCarNames();
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
      this.printRoundResult();
    }
    this.printWinners();
  }

  async getRounds() {
    const rounds = await MissionUtils.Console.readLineAsync("몇 번의 게임을 진행할까요?");

    if (isNaN(rounds)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    if (rounds.length === 1 && rounds < 1 || rounds > 9) {
      throw new Error("[ERROR] 라운드는 1에서 9까지의 자연수만 허용합니다.");
    }
    this.rounds = Number(rounds);
  }


  async getInput() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) :");
    const roundsInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? :");

    carNames.split(",").forEach(name => {
      const trimmedName = name.trim();
      if (trimmedName.length > 0 && trimmedName.length <= 5)
        this.cars.push(new Car(trimmedName));
      else
        throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    });
    this.rounds = Number(roundsInput);
  }

  validateCarNames() {
    for (const car of this.cars)
      if (!car.isValidName()) throw new Error("[ERROR] 차량 이름이 유효하지 않습니다.");
  }

  playRound() { this.cars.forEach(car => car.move()); }

  printRoundResult() {
    MissionUtils.Console.print(''); // 출력값을 사용자가 보기 좋도록 결과 사이에 공백을 두는 문장
    for (const car of this.cars)
      MissionUtils.Console.print(`${car.getName()} : ${car.getPosition()}`);
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition().length));
    const winnersNames = [];
    for (const car of this.cars)
      if (car.getPosition().length === maxPosition) winnersNames.push(car.getName());
    MissionUtils.Console.print(`최종 우승자: ${winnersNames.join(", ")}`);
  }
}

export default App;

const racingCargame = new App();
racingCargame.play();
