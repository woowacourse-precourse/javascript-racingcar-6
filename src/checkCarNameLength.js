export default function checkCarNameLength(CARS_ARRAY) {
  CARS_ARRAY.map(function (car) {
    if (car.length > 5) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  });

  return true;
}
