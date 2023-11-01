// @ts-check

// 정적 배열 - 크기 변경 불가
// 동적 배열 - 크기 변경 가능(push 등), 자바스크립트는 기본적으로 동적 배열
// List

import { ERROR } from "../constants/constants";
import OutputView from "../view/OutputView";
import Car from "./Car";
import { CarDto } from "./dto/carDto";
import { CarsDto } from "./dto/carsDto";
import { WinnerDto } from "./dto/winnerDto";
import { WinnersDto } from "./dto/winnersDto";

// ADT(abstract data type, 추상 자료형(자료구조 공부)
// 할 수 있는 일을 명확하게 제약을 두기
// 앞, 뒤에서만 넣고 뺼 수 있는 stack, queue처럼 배열 만들기

//클래스 만든 뒤 원하는 기능만 매서드로 만들기 -> 한눈에 파악 가능!

//일급 컬렉션(배열, 같은 타입의 데이터를 여러개 모은 것)

//Cars는 도메인 객체 - 비즈니스 로직만 갖고있음, 출력할때 쓰는 건 따로 dto로 빼줌
export class Cars {
  /**
   * @type {Car[]}
   */
  #carList; // Car[]

  /**
   *
   * @param {string[]} carNames
   */

  constructor(carNames) {
    this.#validateDuplicateName(carNames);
    // carNames를 돌면서 Car만들기
    // [new Car('a'), new Car('b'), ...]
    this.#carList = carNames.map((carName) => new Car(carName));
  }
  /**
   *
   * @param {string[]} carNames
   * @returns {void}
   */
  #validateDuplicateName(carNames) {
    // 중복확인은 cars에서
    const carSet = new Set(carNames);
    if (carSet.size !== carNames.length) {
      throw new Error(ERROR.NAME_DUPLICATION_ERROR);
    }
  }

  /**
   * @return {void}
   */

  // 모든 차를 움직이는 매서드
  // 자기 객체의 데이터는 되도록 자기 안에서 쓰기
  moveAll() {
    this.#carList.forEach((car) => {
      car.move();
    });
  }
  /**
   *
   * @returns {CarsDto}
   */

  // 결과는 도메인 객체에서 dto로 만들기 (보통 toCarsDto라고 명명한다)
  makeCarsDto() {
    // this.#carList는 [Car, Car, ..]
    // 그것을 [CarDto,CarDto,CarDto, ... ]로 만들어야 한다
    // Car에 돌려서 만든 carDtoList를 CarsDto로 보내준다.
    const carDtoList = this.#carList.map((car) => car.makeCarDto());
    return new CarsDto(carDtoList);
  }
  // /**
  //  *
  //  * @returns {WinnersDto}
  //  */

  makeWinnersDto() {
    const winnerDtoList = this.#findWinners();
    return new WinnersDto(winnerDtoList); //여기서 winnersDto로 하나로 모아줌
  }

  // 최대 이동거리 계산 후 우승자 반환
  #getMaxDistance() {
    //돌면서 거리들 뽑기
    const distanceList = this.#carList.map((car) => car.distance);
    //거리들끼리 비교
    const maxDistance = Math.max(...distanceList);
    return maxDistance;
  }

  #findWinners() {
    const maxNumber = this.#getMaxDistance();
    return this.#carList
      .filter((car) => car.distance === maxNumber)
      .map((car) => car.makeWinnerDto());
  }
}
