/**
 * @typedef {object} CommonValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(inputValue : string) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CommonValidationTypes
 * @property {CommonValidationType} emptyValues - 입력 값이 비어있는지를 검사하기 위한 객체
 * @property {CommonValidationType} existSpaces - 입력 값에 공백이 포함되어 있는지를 검사하기 위한 객체
 */

/**
 * @typedef {object} CarNamesValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(carNames : string[]) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CarNamesValidationTypes
 * @property {CommonValidationType} duplicateCarNames - 중복되는 자동차 이름이 있는지 확인하기 위한 객체
 * @property {CommonValidationType} lengthOfCarName - 최대 자동차 길이를 만족하는지 확인하기 위한 객체
 */

/**
 * @typedef {object} MoveCountValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(moveCount : number) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} MoveCountValidationTypes
 * @property {MoveCountValidationType} checkTypeOfNumber - 이동 횟수가 숫자인지 확인하기 위한 객체
 * @property {MoveCountValidationType} checkNaturalNumber - 이동 횟수가 자연수인지 확인하기 위한 객체
 */

/**
 * @typedef {object} RacingCarInfo
 * @property {string} carName - 자동차 이름
 * @property {number} position - 자동차가 이동한 위치
 */

/**
 * @typedef {RacingCarInfo[]} RacingStatus
 */

/**
 * @typedef {RacingStatus[]} RacingResult
 */

/**
 * @typedef {object} RacingGameResult
 * @property {RacingResult} racingResult - 이동 횟수 만큼 진행한 자동차들의 레이싱 결과
 * @property {string} racingWinners - 레이싱 게임의 우승자들의 이름
 */

export {};
