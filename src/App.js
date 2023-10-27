import { Random, Console } from '@woowacourse/mission-utils';

// 경주 자동차 클래스
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;  // 현재 위치
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {  // 4 이상일 경우 자동차 전진
      this.position++;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);  // 현재위치 수 만큼 "-" 반환
  }
}

class App {
  async play() {
    try {
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ");
      const carNames = input.split(',').map(name => name.trim())

      // 이름에 대한 예외 처리
      if(carNames.some(name => name.length > 5)){
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력하세요.")
      }

      const car = carNames.map(name => new Car(name));
      const rounds = parseInt(await Console.readLineAsync("시도할 횟수는 몇 회인가요? "));

      if (rounds <= 0) {  // 시도할 회수 0 방지
        throw new Error("[ERROR] 올바른 숫자를 입력하세요.");
      }

      Console.print("\n" + "실행 결과");
      this.startRace(car, rounds)  // 경기 시작

      const winner = this.raceWinner(car);
      Console.print(`\n최종 우숭자: ${winner}`);

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 경기 시작
  startRace(car, rounds) {
    for (let i = 0; i < rounds; i++) {
      Console.print("\n");
      car.forEach(player => {
        player.move();
        Console.print(`${player.name} : ${player.getPosition()}`);
      });
    }
  }

  // 우승자
  raceWinner(car) {
    const finPosition = Math.max(...car.map(player => player.position));  // 가장 큰 위치 값 찾기
    const jointWinner = car.filter(player => player.position === finPosition)
    return jointWinner.map(winner => winner.name).join(', ');
  }
}

export default App;