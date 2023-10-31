const GAME_START =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
const REPETATION_STR = "시도할 횟수는 몇 회인가요?";
const MOVE_CAR_STR = (car, repeatation) =>
  `${car} : ${"-".repeat(repeatation)}\n`;
const WINNER_STR = (cars) => {
  let winners = "";
  let max = 0;
  Object.keys(cars.obj).forEach((item) => {
    if (max < cars.obj[item]) {
      winners = item;
      max = cars.obj[item];
    } else if (max === cars.obj[item]) winners += `, ${item}`;
  });
  return winners;
};
export { GAME_START, REPETATION_STR, MOVE_CAR_STR, WINNER_STR };
