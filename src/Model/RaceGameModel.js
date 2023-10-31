export class RaceGameModel {
  #try; // 게임 시도 횟수
  #race_cars; // 레이싱 자동차 배열
  #winners; // 우승자 명단 배열

  constructor() {
    this.#try = 0;
    this.#race_cars = [];
    this.#winners = [];
  }

  /**
   * try 값을 설정하는 메소드
   * @param {number} new_try
   */
  set_try(new_try) {
    this.#try = new_try;
  }

  /**
   * 레이싱 자동차 목록을 설정하는 메소드
   * @param {Array<RaceCar>} new_race_cars
   */
  set_race_cars(new_race_cars) {
    this.#race_cars = new_race_cars;
  }

  /**
   * 우승자 목록을 설정하는 메소드
   * @param {string[]} new_winners
   */
  set_winners(new_winners) {
    this.#winners = new_winners;
  }

  /**
   * 현재 저장된 try 값을 리턴하는 메소드
   * @returns {number} try
   */
  get_try() {
    return this.#try;
  }

  /**
   * 현재 저장된 레이싱 자동차 배열(게임 진행 상태)을 리턴하는 메소드
   * @returns {Array<RaceCar>} race_cars
   */
  get_race_cars() {
    return this.#race_cars;
  }

  /**
   * 현재 저장된 우승자 명단 배열을 리턴하는 메소드
   * @returns {string[]} winners
   */
  get_winners() {
    return this.#winners;
  }
}
