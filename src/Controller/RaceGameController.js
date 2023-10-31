import { RaceGameModel } from "../Model/RaceGameModel";
import { RaceGameView } from "../View/RaceGameView";

export class RaceGameController {
  #model;
  #view;

  constructor() {
    this.#model = new RaceGameModel();
    this.#view = new RaceGameView();
  }

  /**
   * 레이싱 게임을 실행하는 메소드
   */
  async game() {}

  /**
   * try 문자열에 대해 검증하는 메소드
   * @param {string} input_try
   * @returns {boolean}
   */
  #is_valid_try(input_try) {
    if (isNaN(input_try) || parseInt(input_try) < 0) {
      return false;
    }
    return true;
  }

  /**
   * try 문자열에 대해 검증하고 이를 갱신하는 메소드
   *
   * 올바른 try 값이면 해당 값을 model에 갱신한다.
   * @param {string} input_try
   */
  #set_try(input_try) {
    if (!this.#is_valid_try(input_try)) {
      throw new Error(ERROR_MSG.WRONG_NUMBER);
    }
    this.#model.set_try(parseInt(input_try));
  }

  /**
   * cars 문자열에 대해 검증하는 메소드
   * @param {string[]} car_names
   * @returns {boolean}
   */
  #is_valid_car_name(car_names) {
    // 길이 검사
    car_names.forEach((value) => {
      if (value.length > MAX_LENGTH_OF_NAME) {
        return false;
      }
    });
    return true;
  }

  /**
   * cars 문자열에 대해 검증하고 이를 갱신하는 메소드
   *
   * 올바른 cars 문자열이면 해당 값을 model에 갱신한다.
   * @param {string} cars
   */
  #set_race_cars(cars) {
    let car_names = cars.split(",");
    car_names = car_names.map((value) => value.trim());

    if (!this.#is_valid_car_name(car_names)) {
      throw new Error(ERROR_MSG.NAME_LEN_EXCEED);
    }

    const RACE_CARS = car_names.map((car_name) => ({
      name: car_name,
      distance: 0,
    }));

    this.#model.set_race_cars(RACE_CARS);
  }

  /**
   * 이동 거리를 랜덤하게 리턴하는 메소드
   * @returns {number}
   */
  #get_distance() {}

  /**
   * 자동차 레이스를 1회 실행한 후 그 결과에 대한 자동차 배열을 model에 반영하는 메소드
   */
  #race() {}

  /**
   * 최종 우승자를 계산하고, 최종 우승자 명단 배열을 model에 저장하는 메소드
   * @param {Object[]} race_cars
   */
  #set_winners(race_cars) {
    // ? 1. 최대 거리 구하기
    const MAX_DIST = race_cars.reduce(
      (max, cur) => (cur.distance > max ? cur.distance : max),
      0
    );

    // ? 2. 우승자 판별 - 최대 거리를 갖는 경주차
    const RESULT = race_cars.filter((car) => car.distance === MAX_DIST);

    const WINNERS_NAME = RESULT.map((winner) => winner.name);
    this.#model.set_winners(WINNERS_NAME);
  }

  /**
   * 최종 우승자 문자열을 리턴하는 함수
   * @param {string[]} winners
   * @returns {string}
   */
  #get_winners_str(winners) {}
}
