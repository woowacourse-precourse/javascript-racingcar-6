export class CarsDto {
  #cars;
  constructor(carDtoList) {
    // 배열은 요소가 변경 될 가능성이 있어서 불병성 유지를 위해 Object.freeze() 사용
    this.#cars = Object.freeze(carDtoList);
  }

  // 불변, 읽기 전용으로 만들기
  get cars() {
    return this.#cars;
  }
}

// 구조
// CarsDto {
//   cars; [CarDto, CarDto, ...]
// }
