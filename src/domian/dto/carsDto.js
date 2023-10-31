export class CarsDto {
  constructor(carDtoList) {
    this.cars = carDtoList;
  }
}

// 구조
// CarsDto {
//   cars; [CarDto, CarDto, ...]
// }