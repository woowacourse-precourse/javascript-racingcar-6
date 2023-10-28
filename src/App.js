import { Console, Random } from "@woowacourse/mission-utils";
import { MAX_LENGTH_OF_NAME, ERROR_MSG } from "constants";
import { FORWARD_BOUND } from "./constants";

class App {
  #TRY = 0; // 시도 횟수
  #RACE_CARS = []; // 경주 자동차 정보

  async play() {
    try {
      await this.game();
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }

  /**
   * 시도 횟수를 사용자에게 입력받은 후 이를 리턴하는 함수
   *
   * 입력받은 숫자에 대한 검증 과정도 포함한다
   * @returns {int} try
   */
  async get_try_input() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const INPUT_TRY = await Console.readLineAsync("");

    if (isNaN(INPUT_TRY) || parseInt(INPUT_TRY) < 0) {
      throw new Error(ERROR_MSG.WRONG_NUMBER);
    }

    return parseInt(INPUT_TRY);
  }

  /**
   * 사용자로부터 자동차 이름을 입력받은 후 이를 리턴한다.
   *
   * 입력받은 문자열에 대한 검증 과정도 포함한다.
   * @returns {Array<RaceCar>}
   */
  async get_car_input() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT_CARS = await Console.readLineAsync("");

    // ? 사용자 입력 검증 과정
    // 1. ","를 기준으로 문자열 분해 & 각 문자의 불필요한 공백 제거
    let car_names = INPUT_CARS.split(",");
    car_names = car_names.map((value) => value.trim()); // 앞/뒤 공백 제거

    // 2. 길이 검사
    car_names.forEach((value) => {
      if (value.length > MAX_LENGTH_OF_NAME) {
        throw new Error(ERROR_MSG.NAME_LEN_EXCEED);
      }
    });

    return car_names.map((car_name) => ({
      name: car_name,
      distance: 0,
    }));
  }

  /**
   * 이동 거리(+1 혹은 정지)를 랜덤으로 반환하는 메소드
   * @returns {int} distance
   */
  get_distance() {
    return Random.pickNumberInRange(0, 9) >= FORWARD_BOUND ? 1 : 0;
  }

  /**
   * 각 회차마다 실행할 자동차 경주 메소드
   *
   * RACE_CARS 배열 내부 값들을 갱신한다.
   */
  race() {
    this.#RACE_CARS.forEach((car) => (car.distance += this.get_distance()));
  }

  /**
   * 현재까지의 자동차 이동 거리를 출력하는 메소드
   */
  print_racing() {
    this.#RACE_CARS.forEach((car) =>
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`)
    );
  }

  /**
   * 최종 우승자를 판별하고 이를 출력하는 메소드
   */
  print_race_result() {
    // ? 1. 최대 거리 구하기
    const MAX_DIST = this.#RACE_CARS.reduce(
      (max, cur) => (cur.distance > max ? cur.distance : max),
      0
    );

    // ? 2. 우승자 판별 - 최대 거리를 갖는 경주차
    const RESULT = this.#RACE_CARS.filter((car) => car.distance === MAX_DIST);

    RESULT.forEach((winner) => Console.print(`최종 우승자 : ${winner.name}`));
  }

  /**
   * 자동차 경주 게임을 실행하는 메소드
   */
  async game() {
    this.#RACE_CARS = await this.get_car_input();
    this.#TRY = await this.get_try_input();

    Console.print("실행 결과");

    for (let i = 0; i < this.#TRY; ++i) {
      this.race();
      this.print_racing();
    }

    this.print_race_result();
  }
}

export default App;
