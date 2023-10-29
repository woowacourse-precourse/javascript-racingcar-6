import checkSpace from "./common-validator.js";

const ERROR_MESSAGE = Object.freeze({
  LENGTH: "[ERROR] 자동차의 이름은 1자 이상 5자 이내로 구성되어야 합니다.",
  DUPLICATION: "[ERROR] 중복된 자동차의 이름이 존재합니다.",
});

/**
 * 자동차 이름의 길이를 검증하기 위한 함수
 * @param {string} racingCarName 자동차의 이름
 * @throw 길이가 1~5자를 벗어난다면 에러를 던진다.
 * @returns
 */
function checkLength(racingCarName) {
  if (racingCarName.length < 1 || racingCarName.length > 5) {
    throw new Error(ERROR_MESSAGE.LENGTH);
  }

  return;
}

/**
 * 중복된 자동차의 이름이 존재하는지 검증하기 위한 함수
 * @param {string[]} racingCarNames 자동차의 이름들
 * @throw 중복된 자동차의 이름이 존재하면 에러를 던진다.
 * @returns
 */
function checkDuplication(racingCarNames) {
  const uniqueRacingCarNames = new Set(racingCarNames);
  if (uniqueRacingCarNames.size !== racingCarNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATION);
  }

  return;
}

/**
 * 입력받은 자동차들의 이름을 검증하기 위한 함수
 * @param {string[]} racingCarNames 자동차들의 이름
 * @returns
 */
function validateRacingCarNames(racingCarNames) {
  racingCarNames.forEach((racingCarName) => {
    checkSpace(racingCarName);
    checkLength(racingCarName);
  });
  checkDuplication(racingCarNames);

  return;
}

export default validateRacingCarNames;
