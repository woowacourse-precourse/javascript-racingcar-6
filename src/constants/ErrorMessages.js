import CONDITIONS from './Conditions.js';

const ERROR_MESSAGES = Object.freeze({
	car_name_exceeds_maximum_digits: `[ERROR] 자동차 글자수가 ${CONDITIONS.car_name_max_digits}를 초과했습니다.`,
	duplicate_car_name: '[ERROR] 동일한 자동차 이름이 존재합니다.',
	use_escape_sequence: '[ERROR] 단어 \\ 은(는) 사용할 수 없습니다.',
	value_is_not_a_number: '[ERROR] 입력받은 값이 숫자가 아닙니다.',
	value_is_negative_number: '[ERROR] 입력받은 값이 0보다 작습니다.',
	value_is_exceeds_maximum_length: `[ERROR] ${CONDITIONS.value_maximum_length}보다 작은 값을 입력해주세요.`,
});

export default ERROR_MESSAGES;
