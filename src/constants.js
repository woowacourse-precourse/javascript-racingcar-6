const INPUT_REQUEST = {
	NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
	FREQUENCY: '시도할 횟수는 몇 회인가요?',
};

const RESULT = {
	GAME_PROGRESS: '실행 결과',
	FINAL_WINNER: '최종 우승자 : ',
};

const ERROR = {
	NAME: '[ERROR]',
	NO_INPUT: '값을 입력해주세요.',
	NO_ALONE: '두 명 이상을 입력해주세요.',
	ONLY_UNDER_FIVE: '5자리 이하만 가능합니다.',
	ONLY_NUMBER: '숫자만 입력가능합니다.',
};

const REG_EXP = {
  SPECIAL_CHARACTER: "/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/",
  STRING_CHARACTER: "/[a-zA-Z가-힣]/"
}