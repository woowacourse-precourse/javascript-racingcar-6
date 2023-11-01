import { CarDto } from "./qcarDto";

// @ts-check
export class CarsDto {
  /**
   * @type {CarDto[]}
   */
  #cars;

  /**
   *
   * @param {CarDto[]} carDtoList
   */
  // [CarDto,CarDto,CarDto, ... ]
  constructor(carDtoList) {
    // 객체나 배열은 요소가 변경 될 가능성이 있어서 불병성 유지를 위해 Object.freeze() 사용
    this.#cars = Object.freeze(carDtoList);
  }
  /**
   * @returns {CarDto[]}
   */
  // 불변성 유지: 읽기 전용으로 만들기
  get cars() {
    return this.#cars;
  }
}

// 구조
// CarsDto {
//   cars: [CarDto, CarDto, ...]
// }
