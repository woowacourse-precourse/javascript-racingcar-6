import { Console } from "@woowacourse/mission-utils";
import { INFO_MSG } from "../constants";

export class RaceGameView {
  /**
   * 사용자로부터 try 값을 입력받고 이를 리턴하는 메소드
   * @returns {string} try
   */
  async get_try_input() {
    return await Console.readLineAsync(INFO_MSG.TRY_INPUT);
  }

  /**
   * 사용자로부터 자동차 명단을 입력받고 이를 리턴하는 메소드
   * @returns {string} cars
   */
  async get_car_input() {
    return await Console.readLineAsync(INFO_MSG.CAR_INPUT);
  }

  /**
   * 입력받은 자동차 배열을 토대로 자동차 경주 진행 상태를 출력하는 메소드
   * @param {Object[]} race_cars
   */
  print_racing(race_cars) {
    race_cars.forEach((car) =>
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`)
    );
  }

  /**
   * 우승자 명단 문자열을 가지고 최종 우승자를 출력하는 메소드
   * @param {string} winners
   */
  print_race_result(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  }

  /**
   * 전달받은 문자열을 그대로 출력하는 메소드
   * @param {string} str
   */
  print_string(str) {
    Console.print(str);
  }
}
