export function CheckLength(car) {
  if (car.length > 5) {
    throw new Error('[ERROR] 자동차 이름이 5이상입니다.');
  }
}