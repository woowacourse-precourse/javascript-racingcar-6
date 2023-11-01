/**
 * 상수로 다루는 객체들의 key 값들도 스네이크 컨벤션을 따라야하나 ? 라는 의문점이 있었는데
 *  airbnb 컨벤션에선 변수명만 대문자로 선언해주고 key값은 소문자로 표시합니다.
 * https://github.com/airbnb/javascript#naming--uppercase 참조
 * 하지만 키값에 대한 정확한 컨벤션은 소문자라고만 되어있고
 * 카멜인지 무엇인지는 정확히 기재되어있지는 않네요.
 */

export const GAME_MESSAGES = Object.freeze({
  input_car_names: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  input_count_of_attemp: '시도할 횟수는 몇 회인가요?\n',
  print_result_start: '실행 결과',
  game_result: (status, car) => `${car} : ${'-'.repeat(status || 0)}`,
  winner_result: (winner) => `최종 우승자 : ${winner.join(', ')}`,
  random_start_num: 0,
  random_end_num: 9,
});
