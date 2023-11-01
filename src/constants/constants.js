const CAR_NAME_MIN_LENGTH = 5;
const MOVING_FORWARD = 4;

const GUIDE_MESSAGE = Object.freeze({
	enter_car_names:
		'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
	enter_number_of_attempts: '시도할 횟수는 몇 회인가요?',
	print_results: '실행 결과',
	winners: '최종 우승자 :',
});

const ERROR_MESSAGE = Object.freeze({
	invalid_attempts_pattern:
		'[ERROR] 잘못된 형식입니다. 숫자 외의 문자는 입력할 수 없습니다. 게임을 종료합니다.',
	invalid_car_names_pattern:
		'[ERROR] 잘못된 형식입니다. 한글, 영문, 숫자 및 쉼표(,) 외의 모든 문자는 입력할 수 없습니다. 게임을 종료합니다.',
	no_input: '[ERROR] 빈 문자열을 입력할 수 없습니다. 게임을 종료합니다.',
	duplicate_name_found:
		'[ERROR] 중복된 자동차 이름이 있습니다. 게임을 종료합니다.',
	number_under_zero:
		'[ERROR] 잘못된 범위입니다. 0 이하의 수는 입력하실 수 없습니다. 게임을 종료합니다.',
	invalid_car_name_length:
		'[ERROR] 잘못된 형식입니다. 자동차의 이름은 최대 5자까지 입력할 수 있습니다. 게임을 종료합니다.',
});

export { CAR_NAME_MIN_LENGTH, MOVING_FORWARD, GUIDE_MESSAGE, ERROR_MESSAGE };
