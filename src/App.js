import { MissionUtils } from "@woowacourse/mission-utils";

// ** Car 클래스: 각 자동차의 상태 관리 **
class Car {
  // Car 클래스의 생성자 함수
  constructor(name) {
    this.name = name; // 자동차의 이름
    this.position = 0; // 자동차의 현재 위치 (전진한 횟수)
  }

  // 자동차 전진시키기
  advance() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position++;
    }
  }

  // 자동차의 현재 위치 출력
  async printPosition() {
    await MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.position)}\n`);
  }
}

// ** Race 클래스: 자동차 경주 게임 진행 **
class Race {
  constructor(cars, tries) {
    this.cars = cars; // 경주에 참여하는 자동차들
    this.tries = tries; // 전체 시도 횟수
  }

  // 경주 시작 , 각 시도별로 전진 or 멈추기
  // 각 시도 후에 경주의 현재 상태 출력
  async run() {
    for (let i = 0; i < this.tries; i++) {
      this.cars.forEach(car => car.advance());
      await this.printRaceResult();
    }
  }

  // 모든 자동차의 이름과 위치 출력
  async printRaceResult() {
    for (const car of this.cars) {
      await car.printPosition();
    }
    await MissionUtils.Console.print('\n');
  }

  // 경주가 끝난 후 최종 우승자 결정
  findWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
  }
}

// ** App 클래스: 애플리케이션의 메인 로직 담당 **
class App {
  // 사용자로부터 입력을 받고 경주를 진행
  async play() {
    try {
      const cars = await this.getCars();
      const tries = await this.getTries();
      const race = new Race(cars, tries); // 경주 생성
      await race.run(); // 경주 시작
      const winners = race.findWinners(); // 최종 우승자 결정
      await MissionUtils.Console.print("최종 우승자 : " + winners.join(", ") + "\n");
    } catch (error) {
      await MissionUtils.Console.print(error.message + "\n");
      throw error;    // ★ 에러메세지를 다시 던져줘야 테스트에서 예외를 캐치할 수 있음.
    }
  }

  // 사용자로부터 자동차 이름 입력받기
  async getCars() {
    const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const names = input.split(",").map(name => name.trim());

    if (names.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    return names.map(name => new Car(name));
  }

  // 사용자로부터 시도할 횟수 입력받기
  async getTries() {
    const input = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const tries = parseInt(input, 10);

    if (isNaN(tries) || tries <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }

    return tries;
  }
}

// ** 애플리케이션의 시작점: App 인스턴스를 생성하고 게임을 시작시키기 **
async function main() {
  const app = new App();
  await app.play();
}

main();

export default App;