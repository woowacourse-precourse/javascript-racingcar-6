export const OUTPUT_MESSAGES = {
  input_car_names_message:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  input_move_count_message: '시도할 횟수는 몇 회인가요?\n',
  result_message: '실행 결과',
  winner_message: '최종 우승자 : ',
};

export const ERROR_MESSAGES = {
  not_a_number: '[ERROR] 숫자를 입력해주세요.',
  not_positive_integer: '[ERROR] 1이상의 숫자를 입력해주세요.',
  not_an_integer: '[ERROR] 정수를 입력해주세요.',
  car_name_empty: '[ERROR] 자동차 이름은 공백일 수 없습니다.',
  car_name_too_long: '[ERROR] 자동차 이름은 5자 이하여야합니다.',
  car_name_duplicated: '[ERROR] 자동차 이름이 중복되었습니다.',
  car_name_has_spaces: '[ERROR] 자동차 이름에 공백이 포함되어 있습니다.',
  car_name_has_trailing_spaces: '[ERROR] 자동차 이름 양 끝에 공백이 있습니다.',
};

export const MINIMUM_MOVE_NUMBER = 4;
