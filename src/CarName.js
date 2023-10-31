//기능1. 자동차 이름
export function carname(input) {
  const car = input.split(',').map((v) => v.trim());
  if (
    car.filter((v) => v.length > 5).length !== 0 ||
    car.filter((v) => v === '').length > 0 ||
    [...new Set(car)].length !== car.length
  ) {
    throw new Error('[ERROR] 올바른 이름을 입력해주세요');
  }
  return car;
}
