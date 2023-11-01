/**
 * 상수로 다루는 객체들의 key 값들도 스네이크 컨벤션을 따라야하나 ? 라는 의문점이 있었는데
 *  airbnb 컨벤션에선 변수명만 대문자로 선언해주고 key값은 소문자로 표시합니다.
 * https://github.com/airbnb/javascript#naming--uppercase 참조
 * 하지만 키값에 대한 정확한 컨벤션은 소문자라고만 되어있고
 * 카멜인지 무엇인지는 정확히 기재되어있지는 않네요.
 */

export const ERROR_MESSAGES = Object.freeze({
  have_a_space: '이름에 공백이 존재하는 자동차가 있어요!',
  out_of_range_of_names: '각 자동차의 이름은 1글자 이상 5글자 이하여야해요!',
  have_duplication: '이름이 중복되는 자동차가 있어요!',
  not_a_number: '시도 횟수는 숫자여야해요!',
  out_of_range_of_attemps: '시도 횟수는 최소 1보다 커야해요!',
  invalid_characters: '자동차 이름은 한글, 영어, 숫자만 가능해요!',
  out_of_range_of_cars: '참가하는 자동차는 최소 2대 이상이어야해요!',
  not_integer: '시도 횟수는 양의 정수여야해요!',
});
