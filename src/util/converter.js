/**
 * 자동차들의 이름을 객체로 변환하는 함수
 * @param {string[]} racingCarNames 자동차들의 이름
 * @returns {object} 자동차들을 관리하는 객체
 * object {
 *  key: 자동차의 이름
 *  value: 자동차의 전진 거리
 * }
 */
function convertArrayToObject(racingCarNames) {
  const racingCarObject = {};
  racingCarNames.forEach((racingCarName) => {
    racingCarObject[racingCarName] = 0;
  });

  return racingCarObject;
}

export { convertArrayToObject };
