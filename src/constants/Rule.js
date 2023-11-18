const RULE = Object.freeze({
  name: Object.freeze({
    min: 1,
    max: 5,
  }),
  // 게임 참가하는 자동차 개수는 임의로 정함
  numberOfCar: Object.freeze({
    min: 2,
    max: 10,
  }),
  delimiter: ',',
  // 최대 게임 횟수는 임의로 정함
  round: Object.freeze({
    min: 1,
    max: 10,
  }),
  randomNumber: Object.freeze({
    min: 0,
    max: 9,
  }),
  pointOfMovement: 4,
});

export { RULE };
